import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PrintFunction } from '../../services/print-function';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catch-throw-error',
  imports: [CommonModule],
  templateUrl: './catch-throw-error.html',
  styleUrl: './catch-throw-error.scss'
})
export class CatchThrowError implements OnInit{
   data: string = '';
   error: string = '';
   loading = false;

  constructor(private dataService: PrintFunction) {}


  ngOnInit(): void {
    
  }
  fetchData() {
    this.loading = true;
    this.error = '';
    this.data = '';

    this.dataService.getData().pipe(
      catchError(err => {
        this.error = err;
        this.loading = false;
        // Return an empty observable to complete the stream without error
        return of('');
      })
    ).subscribe(
      (response) => {
        this.data = response;
        this.loading = false;
      }
    );
  }

}
