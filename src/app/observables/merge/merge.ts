import { Component, OnInit } from '@angular/core';
import { interval,take, map, merge } from 'rxjs';
import { PrintFunction } from '../../services/print-function';

@Component({
  selector: 'app-concat',
  imports: [],
  templateUrl: './merge.html',
  styleUrl: './merge.scss'
})
export class Merge implements OnInit{

  constructor(private _printFunction : PrintFunction){}

  ngOnInit(): void {
    const TechVideos = interval(1000).pipe(map(v  => 'Tech Video ' + (v + 1)),take(5));
    const ComedyVideos = interval(1000).pipe(map(v  => 'Comedy Video ' + (v + 1)),take(3));
    const NewsVideos = interval(1000).pipe(map(v  => 'News Video ' + (v + 1)),take(4));

    const FinalObs = merge(TechVideos, ComedyVideos, NewsVideos);
  
    FinalObs.subscribe(res => {
      this._printFunction.print(res, 'elContainer');
    })
   
  }

}
