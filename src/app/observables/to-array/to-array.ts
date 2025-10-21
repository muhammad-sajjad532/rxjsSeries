import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  imports: [],
  templateUrl: './to-array.html',
  styleUrl: './to-array.scss'
})
export class ToArray implements OnInit{

  users = [
      {id: 1, name: 'sajjad'},
      {id: 2, name: 'shahab'},
      {id: 3, name: 'owais'}
    ]

    sourceSub : any = Subscription;

  ngOnInit(): void {
    const source = of(1,2,3,4)

    source.pipe(toArray()).subscribe(res=>{
      console.log(res);
    })

    const source2 = from(['angular', 'react', 'vue', 'javascript'])
    source2.pipe(toArray()).subscribe(res=>{
      console.log(res)
    })

    const source3 = from(this.users)
    source3.pipe(toArray()).subscribe(res=> {
      console.log(res)
    })

    const source4 = interval(1000);
    this.sourceSub = source4.pipe(take(5), toArray()).subscribe(res=> {
    console.log(res);
    })
  }
}
