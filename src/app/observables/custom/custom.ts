import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PrintFunction } from '../../services/print-function';

@Component({
  selector: 'app-custom',
  imports: [CommonModule],
  templateUrl: './custom.html',
  styleUrl: './custom.scss'
})
export class Custom implements OnInit, OnDestroy{

  constructor(private _printFunction : PrintFunction){}
  techStatus : any;
  sub2 : any = Subscription

  ngOnInit(): void {
    //ex-1 (manual)
    const cusObs1 = new Observable(observer=>{
      setTimeout(()=>{
         observer.next("Angular")
     },1000);

     setTimeout(()=>{
         observer.next("TypeScript")
     },2000);

     setTimeout(()=>{
         observer.next("Html and css")
         //observer.error(new Error("Limit exceed"))
         //this.techStatus == 'error';
         //observer.complete();
     },3000);

     setTimeout(()=>{
         observer.next("Javascript")
         //observer.complete();
         //observer.error(new Error("Limit exceed"))
     },4000);

     setTimeout(()=>{
         observer.next("Tailwand css")
         observer.complete();
     },5000);
     
    })

    cusObs1.subscribe(res => {
      console.log(res);
      this._printFunction.print(res, 'elContainer');
    },
    (error) => {
      this.techStatus == 'error';
    },
    ()=> {
      this.techStatus = "completed";
    }
   )

   //ex-2
   const cusObs2 = new Observable(observer=>{
    setInterval(()=>{
      observer.next("data emit")
    },1000)
   })

   this.sub2 = cusObs2.subscribe(res=>{
    console.log(res);
   })

   //ex-3 random names

  }

  ngOnDestroy(): void {
    this.sub2.unsubscribe()
  }
}
