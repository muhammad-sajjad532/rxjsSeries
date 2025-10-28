import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss'
})
export class Filter {
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

  filteredByLength: any[] = [];
  filteredByGender: any[] = [];

  ngOnInit(): void {
    // Example 1: Filter users with name length > 4
    from(this.users)
      .pipe(
        filter(user => user.name.length > 4),
        toArray()
      )
      .subscribe(res => this.filteredByLength = res);

    // Example 2: Filter users by gender = 'Female'
    from(this.users)
      .pipe(
        filter(user => user.gender === 'Female'),
        toArray()
      )
      .subscribe(res => this.filteredByGender = res);
  }
}


