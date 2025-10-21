import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { PrintFunction } from '../../services/print-function';

@Component({
  selector: 'app-interval',
  imports: [],
  templateUrl: './interval.html',
  styleUrl: './interval.scss'
})
export class Interval implements OnInit {
  obsMsg: any;
  videosSubscription : any = Subscription;

  constructor(private _printFunction : PrintFunction){}
  

  ngOnInit(){
  //const broadCastVideos = interval(1000);
  //timer(delay,interval)
  const broadCastVideos = timer(5000,1000);
  this.videosSubscription = broadCastVideos.subscribe(res =>{
    console.log(res);
    this.obsMsg = 'Video '+ res;
    this._printFunction.print(this.obsMsg, 'elContainer');
    this._printFunction.print(this.obsMsg, 'elContainer2');
    this._printFunction.print(this.obsMsg, 'elContainer3');



    if(res >=5){
      this.videosSubscription.unsubscribe()
    }
  })
 }
}
