import { Injectable } from '@angular/core';
import { Subject, Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';


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

 getData(): Observable<string> {
    // Simulate random failure
    const random = Math.random();
    if ( random < 0.5 ) {
      // Simulate successful response after a delay
      return of('Hello, World!').pipe(delay(1000));
    } else {
      // Simulate an error after a delay
      return throwError('Failed to fetch data!').pipe(delay(1000));
    }
  }
}






