import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap, shareReplay } from 'rxjs/operators';


interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-share-replay',
  imports: [CommonModule],
  templateUrl: './share-replay.html',
  styleUrl: './share-replay.scss'
})
export class ShareReplay {
  userDataWithout$!: Observable<UserData>;
  
  // WITH shareReplay - one API call shared across all subscriptions
  userDataWith$!: Observable<UserData>;
  
  apiCallCountWithout = 0;
  apiCallCountWith = 0;
  
  subscriptionsWithout = 0;
  subscriptionsWith = 0;
  
  dataWithout1: UserData | null = null;
  dataWithout2: UserData | null = null;
  dataWithout3: UserData | null = null;
  
  dataWith1: UserData | null = null;
  dataWith2: UserData | null = null;
  dataWith3: UserData | null = null;
  
  loadingWithout = false;
  loadingWith = false;

  ngOnInit() {
    this.setupObservables();
  }
  
  setupObservables() {
    // WITHOUT shareReplay - creates a new API call for each subscriber
    this.userDataWithout$ = this.mockApiCall('without').pipe(
      tap(() => this.apiCallCountWithout++)
    );
    
    // WITH shareReplay - shares one API call result with all subscribers
    this.userDataWith$ = this.mockApiCall('with').pipe(
      tap(() => this.apiCallCountWith++),
      shareReplay(1) // Replay the last 1 emitted value to new subscribers
    );
  }
  
  mockApiCall(type: string): Observable<UserData> {
    console.log(`🌐 API Call Made (${type} shareReplay)`);
    
    // Simulates a 1.5-second API call
    return of({
      id: Math.floor(Math.random() * 1000),
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Developer'
    }).pipe(
      delay(1500)
    );
  }
  
  subscribeWithout() {
    this.loadingWithout = true;
    this.subscriptionsWithout++;
    
    const subNumber = this.subscriptionsWithout;
    
    this.userDataWithout$.subscribe({
      next: (data) => {
        this.loadingWithout = false;
        if (subNumber === 1) this.dataWithout1 = data;
        if (subNumber === 2) this.dataWithout2 = data;
        if (subNumber === 3) this.dataWithout3 = data;
      }
    });
  }
  
  subscribeWith() {
    this.loadingWith = true;
    this.subscriptionsWith++;
    
    const subNumber = this.subscriptionsWith;
    
    this.userDataWith$.subscribe({
      next: (data) => {
        this.loadingWith = false;
        if (subNumber === 1) this.dataWith1 = data;
        if (subNumber === 2) this.dataWith2 = data;
        if (subNumber === 3) this.dataWith3 = data;
      }
    });
  }
  
  reset() {
    this.apiCallCountWithout = 0;
    this.apiCallCountWith = 0;
    this.subscriptionsWithout = 0;
    this.subscriptionsWith = 0;
    
    this.dataWithout1 = null;
    this.dataWithout2 = null;
    this.dataWithout3 = null;
    
    this.dataWith1 = null;
    this.dataWith2 = null;
    this.dataWith3 = null;
    
    this.loadingWithout = false;
    this.loadingWith = false;
    
    this.setupObservables();
  }

}
