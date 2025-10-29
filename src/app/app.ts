import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PrintFunction } from './services/print-function';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('rxjsSeries');

  exclusive: boolean = false;
  constructor(private _printFunction : PrintFunction){}

  ngOnInit() {
    this._printFunction.exclusive.subscribe(res => {
      this.exclusive = res;
    });
  }
}
