import { Component, OnInit } from '@angular/core';
import { interval, concat, take, map } from 'rxjs';
import { PrintFunction } from '../../services/print-function';

@Component({
  selector: 'app-concat',
  imports: [],
  templateUrl: './concat.html',
  styleUrl: './concat.scss'
})
export class Concat implements OnInit{

  constructor(private _printFunction : PrintFunction){}

  ngOnInit(): void {
    const TechVideos = interval(1000).pipe(map(v  => 'Video ' + (v + 1)),take(5));
    const ComedyVideos = interval(1000).pipe(map(v  => 'Video ' + (v + 1)),take(3));
    const NewsVideos = interval(1000).pipe(map(v  => 'Video ' + (v + 1)),take(4));

    const FinalObs = concat(TechVideos, ComedyVideos, NewsVideos);
  
    FinalObs.subscribe(res => {
      this._printFunction.print(res, 'elContainer');
    })
   
  }

}
