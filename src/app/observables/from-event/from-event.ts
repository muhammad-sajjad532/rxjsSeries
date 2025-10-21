import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { PrintFunction } from '../../services/print-function';


@Component({
  selector: 'app-from-event',
  imports: [],
  templateUrl: './from-event.html',
  styleUrl: './from-event.scss'
})
export class FromEvent implements AfterViewInit{

  @ViewChild('addBtn') addBtn!: ElementRef;

  constructor(private _printFunction : PrintFunction){ }
   
 ngAfterViewInit(){
  let count = 1;
   fromEvent(this.addBtn.nativeElement, 'click').subscribe(res=>{
    let countVal = 'video '+ count++
    console.log(countVal);
    this._printFunction.print(countVal, 'elContainer');
    this._printFunction.print(countVal, 'elContainer2');
  
    })
  }

}
