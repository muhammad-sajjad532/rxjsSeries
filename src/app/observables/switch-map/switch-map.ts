import { Component, OnInit } from '@angular/core';
import { PrintFunction } from '../../services/print-function';
import { from, of, delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  imports: [],
  templateUrl: './switch-map.html',
  styleUrl: './switch-map.scss'
})
export class SwitchMap implements OnInit{


  getData(data : string){
    return of(data + 'Video Uploaded').pipe(delay(2000))
  }

  constructor(private _printFunction : PrintFunction){}

  ngOnInit(): void {
    const source = from([ 'Angular ', 'React ', 'Vue ', 'Javascript ']);

    source.pipe(switchMap(res => this.getData(res)))
    .subscribe(res => {
      console.log(res);
      this._printFunction.print(res, 'elContainer');
    })
  }

}

