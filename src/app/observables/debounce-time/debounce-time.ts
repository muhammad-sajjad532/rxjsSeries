import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
@Component({
  selector: 'app-debounce-time',
  imports: [FormsModule],
  templateUrl: './debounce-time.html',
  styleUrl: './debounce-time.scss'
})
export class DebounceTime implements AfterViewInit {

  debounceResult: string = '';
  distinctResult: string = '';

  // 👇 Access HTML elements using ViewChild
  @ViewChild('debounceInput') debounceInput!: ElementRef;
  @ViewChild('distinctInput') distinctInput!: ElementRef;

  constructor() { }

  ngAfterViewInit() {

    /** ---------- Example 1: debounceTime ---------- **/
    fromEvent<any>(this.debounceInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
    ).subscribe((value) => {
      console.log('Debounce:', value);
      this.debounceResult = value;
    });

    /** ---------- Example 2: distinctUntilChanged ---------- **/
    fromEvent(this.distinctInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      distinctUntilChanged()
    ).subscribe((value) => {
      console.log('Distinct:', value);
      this.distinctResult = value;
    });
  }
}
