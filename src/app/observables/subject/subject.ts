import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrintFunction } from '../../services/print-function';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.scss'
})
export class Subject implements OnInit, OnDestroy{

  constructor(private _printFunction : PrintFunction){}

  ngOnInit(): void {
    this._printFunction.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this._printFunction.exclusive.next(false);
  }

}
