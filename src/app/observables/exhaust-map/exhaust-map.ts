import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, exhaustMap, of, Subject, finalize } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  imports: [CommonModule],
  templateUrl: './exhaust-map.html',
  styleUrl: './exhaust-map.scss'
})
export class ExhaustMap {
  saveClick$ = new Subject<void>();
  
  totalClicks = 0;
  actualRequests = 0;
  ignoredClicks = 0;
  isLoading = false;
  lastSavedTime = '';
  
  constructor() {
    this.setupExhaustMap();
  }
  
  setupExhaustMap() {
    this.saveClick$.pipe(
      exhaustMap(() => {
        this.isLoading = true;
        this.actualRequests++;
        return this.mockApiCall().pipe(
          finalize(() => {
            this.isLoading = false;
          })
        );
      })
    ).subscribe({
      next: (response) => {
        this.lastSavedTime = new Date().toLocaleTimeString();
        console.log('Save successful:', response);
      },
      error: (error) => {
        console.error('Save failed:', error);
      }
    });
  }
  
  mockApiCall() {
    // Simulates a 2-second API call
    return of({ success: true, message: 'Data saved successfully' }).pipe(
      delay(2000)
    );
  }
  
  onSaveClick() {
    this.totalClicks++;
    
    if (this.isLoading) {
      this.ignoredClicks++;
    } else {
      this.isLoading = true;
    }
    
    this.saveClick$.next();
  }
  
  reset() {
    this.totalClicks = 0;
    this.actualRequests = 0;
    this.ignoredClicks = 0;
    this.lastSavedTime = '';
  }

}
