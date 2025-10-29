import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError, delay, retryWhen, retry, scan, throwError,tap } from 'rxjs';

@Component({
  selector: 'app-retry-demo',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './retry.html',
  styleUrls: ['./retry.scss']
})
export class Retry {
  users: any[] = [];
  loading = false;
  statusMessage = '';

  constructor(private http: HttpClient) {}

  fetchData() {
    this.loading = true;
    this.statusMessage = 'Fetching data...';

    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        retry(3), // Retry up to 3 times
        tap(() => {
          this.statusMessage = 'Data fetched successfully ✅';
        }),
        catchError((error) => {
          this.statusMessage = '❌ Failed after 3 attempts';
          this.loading = false;
          return throwError(() => error);
        })
      )
      .subscribe({
        next: (data) => {
          this.users = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
