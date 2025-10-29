import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PrintFunction {

  exclusive = new Subject<boolean>();

  print(val:any, containerId:any){
  let el = document.createElement('li');
  el.innerText = val;

  document.getElementById(containerId)!.appendChild(el)
 }
}






