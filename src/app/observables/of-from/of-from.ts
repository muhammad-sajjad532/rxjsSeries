import { Component, OnInit } from '@angular/core';
import { PrintFunction } from '../../services/print-function';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  imports: [],
  templateUrl: './of-from.html',
  styleUrl: './of-from.scss'
})
export class OfFrom implements OnInit{
  obsMsg:any;

  constructor(private _printFunction : PrintFunction){}

  ngOnInit(): void {
    //OF
    const obs1 = of('sajjad','shahab', 'owais')
    obs1.subscribe(res=> {
    this._printFunction.print(res, 'elContainer1')
    //console.log(res)
   })

   const obs2 = of({a:'sajjad',b:'shahab', c:'owais'})
    obs2.subscribe(res=> {
      this.obsMsg = res
    //this._printFunction.print(res, 'elContainer2')
    //console.log('obsMsg =>', res);
   })

   //From-Array
    const obs3 = from(['khan','bangash', 'fateh khel'])
    obs3.subscribe(res=> {
    this._printFunction.print(res, 'elContainer3')
    //console.log(res);
    })

    //From-Promise
    const promise = new Promise(resolve=> {
      setTimeout(()=>{
        resolve('Promise is resolved')
      }, 3000)
    })

    const obs4 = from(promise)
    obs4.subscribe(res=> {
    this._printFunction.print(res, 'elContainer4')
    console.log('From promise =>', res);
    })

    const obs5 = from("Muhammad Sajjad")
    obs5.subscribe(res=> {
    this._printFunction.print(res, 'elContainer5')
    console.log('From String =>', res);
    })

  }
  
}
