import { Component, OnInit } from '@angular/core';
import { PrintFunction } from '../../services/print-function';
import { concatMap, from, of, delay } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  imports: [],
  templateUrl: './concat-map.html',
  styleUrl: './concat-map.scss'
})
export class ConcatMap implements OnInit{


  getData(data : string){
    return of(data + 'Video Uploaded').pipe(delay(2000))
  }

  constructor(private _printFunction : PrintFunction){}

  ngOnInit(): void {
    const source = from([ 'Angular ', 'React ', 'Vue ', 'Javascript ']);

    source.pipe(concatMap(res => this.getData(res)))
    .subscribe(res => {
      console.log(res);
      this._printFunction.print(res, 'elContainer');
    })
  }

}

