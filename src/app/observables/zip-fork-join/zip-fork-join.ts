import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { forkJoin, of, zip } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-zip-fork-join',
  imports: [CommonModule],
  templateUrl: './zip-fork-join.html',
  styleUrl: './zip-fork-join.scss'
})
export class ZipForkJoin {
  zipResults: string[] = [];
  forkJoinResult: any = null;

  // Fake API streams
  userData$ = of('User 1', 'User 2', 'User 3').pipe(delay(1000));
  postData$ = of('Post A', 'Post B', 'Post C').pipe(delay(1500));

  // ZIP example
  useZip() {
    this.zipResults = [];
    zip(this.userData$, this.postData$).subscribe(([user, post]) => {
      this.zipResults.push(`👤 ${user} - 📝 ${post}`);
    });
  }

  // FORKJOIN example
  useForkJoin() {
    this.forkJoinResult = null;
    const userApi$ = of('User Data Loaded').pipe(delay(2000));
    const postsApi$ = of('Posts Data Loaded').pipe(delay(3000));

    forkJoin({ user: userApi$, posts: postsApi$ }).subscribe((data) => {
      this.forkJoinResult = data;
    });
  }

}
