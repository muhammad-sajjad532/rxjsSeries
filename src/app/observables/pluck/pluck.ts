import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { of, pluck } from 'rxjs';


@Component({
  selector: 'app-pluck',
  imports: [],
  templateUrl: './pluck.html',
  styleUrl: './pluck.scss'
})
export class Pluck implements OnInit {
  msg1 : any;
  msg2 : any;
  msg3 : any;


  ngOnInit() {
    const source = of(
      {id : 1, name : 'sajjad', age : 22},
      {id : 2, name : 'shahab', age : 23},
      {id : 3, name : 'owais', age : 24}
    );

   const sourceSub = source.pipe(
    pluck('name')
   );

   sourceSub.subscribe(res =>{
    this.msg1 = res;
   })
  }
}
