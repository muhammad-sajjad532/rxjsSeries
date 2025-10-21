import { Component, OnInit } from '@angular/core';
import { interval,Subscription } from 'rxjs';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class Map implements OnInit{
  //subscriptions
  subs1 : any = Subscription;
  subs2 : any = Subscription;

  //messages
  msg1 : any;
  msg2 : any;

  ngOnInit(): void {
    const broadCastVideos = interval(1000)

    this.subs1 = broadCastVideos.pipe(map(data => 'video ' +data))
    .subscribe(res => {
      console.log(res)
      this.msg1 = res;
    })

    setTimeout(()=>{
      this.subs1.unsubscribe();
    }, 10000)

    const mapData = of(1,2,3,4)

    this.subs2 = mapData.pipe(map(data => data * 4))
    .subscribe(res => {
      console.log(res)
      this.subs2 = res;
    })

    setTimeout(()=>{
      this.subs2.unsubscribe();
    }, 1000)
  }

}
