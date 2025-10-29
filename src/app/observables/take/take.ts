import { Component, OnInit } from '@angular/core';
import { from, interval, take, takeLast, takeUntil, timer } from 'rxjs';
import { PrintFunction } from '../../services/print-function';

@Component({
  selector: 'app-take',
  imports: [],
  templateUrl: './take.html',
  styleUrl: './take.scss'
})
export class Take implements OnInit{
  takeResult: number[] = [];
  takeLastResult: number[] = [];
  takeUntilResult: number[] = [];

  constructor(private _printFunction : PrintFunction){}

  ngOnInit(): void {
    this.exampleTake();
    this.exampleTakeLast();
    this.exampleTakeUntil();
  }

  // 1️⃣ take()
  exampleTake() {
    const numbers$ = from([10, 20, 30, 40, 50]);
    numbers$.pipe(take(3)).subscribe(value => this.takeResult.push(value));
  }

  // 2️⃣ takeLast()
  exampleTakeLast() {
    const numbers$ = from([1, 2, 3, 4, 5, 6]);
    numbers$.pipe(takeLast(2)).subscribe(value => this.takeLastResult.push(value));
  }

  // 3️⃣ takeUntil() - without Subject
  exampleTakeUntil() {
    const source$ = interval(1000);     // emits 0,1,2,3,4,...
    const stop$ = timer(10000);          // emits after 5 seconds
    source$
      .pipe(takeUntil(stop$))
      .subscribe(value => {
        console.log(value);
        this._printFunction.print(value, 'elContainer');
      });
  }

}
