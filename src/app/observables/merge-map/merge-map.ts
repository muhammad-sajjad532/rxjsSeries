import { Component, OnInit } from '@angular/core';
import { PrintFunction } from '../../services/print-function';
import { from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  imports: [],
  templateUrl: './merge-map.html',
  styleUrl: './merge-map.scss'
})
export class MergeMap implements OnInit{


  getData(data : string){
    return of(data + 'Video Uploaded')
  }

  constructor(private _printFunction : PrintFunction){}

  ngOnInit(): void {
    const source = from([ 'Angular ', 'React ', 'Vue ', 'Javascript ']);

    source.pipe(mergeMap(res => this.getData(res)))
    .subscribe(res => {
      console.log(res);
      this._printFunction.print(res, 'elContainer');
    })
  }

}
