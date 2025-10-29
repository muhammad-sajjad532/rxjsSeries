import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, exhaustMap, of, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  imports: [CommonModule],
  templateUrl: './exhaust-map.html',
  styleUrl: './exhaust-map.scss'
})
export class ExhaustMap {
  isLoading = false;
  message = '';

  // Fake API call simulation (takes 3 seconds)
  fakeLoginApi() {
    return of('✅ Login Successful!').pipe(delay(3000));
  }

  onLoginClick() {
    // Convert single click to observable
    of(null)
      .pipe(
        // exhaustMap ensures only one login runs at a time
        exhaustMap(() => {
          this.isLoading = true;
          this.message = '';
          return this.fakeLoginApi().pipe(
            tap(() => {
              this.isLoading = false;
              this.message = '✅ Login Successful!';
            })
          );
        })
      )
      .subscribe();
  }

}
