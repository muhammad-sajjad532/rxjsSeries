import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  imports: [CommonModule],
  templateUrl: './tap.html',
  styleUrl: './tap.scss'
})
export class Tap {
  users = [
    { id: 1, name: 'Ali', gender: 'Male' },
    { id: 2, name: 'Sana', gender: 'Female' },
    { id: 3, name: 'Ahmed', gender: 'Male' },
    { id: 4, name: 'Zara', gender: 'Female' },
    { id: 5, name: 'Bilal', gender: 'Male' },
    { id: 6, name: 'Hina', gender: 'Female' },
    { id: 7, name: 'Usman', gender: 'Male' },
    { id: 8, name: 'Ayesha', gender: 'Female' },
    { id: 9, name: 'Saad', gender: 'Male' },
    { id: 10, name: 'Mona', gender: 'Female' }
  ];

  filteredUsers: any[] = [];

  ngOnInit(): void {
    from(this.users)
      .pipe(
        tap(user => console.log('Original User:', user)),   // Before filter
        filter(user => user.gender === 'Female'),
        tap(user => console.log('After Filter:', user)),     // After filter
        toArray()
      )
      .subscribe(res => {
        console.log('Final Array:', res);
        this.filteredUsers = res;
      });
  }

}
