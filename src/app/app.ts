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
export class App {
  exclusive: boolean = false;
  constructor(private _printFunction : PrintFunction){}
  protected readonly title = signal('rxjsSeries');

 
}
