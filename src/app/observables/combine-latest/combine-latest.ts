import { Component } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { combineLatest, withLatestFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-combine-latest',
  imports: [CommonModule],
  templateUrl: './combine-latest.html',
  styleUrl: './combine-latest.scss'
})
export class CombineLatest {
  // CombineLatest Example - Pizza Order
  pizzaSize$ = new BehaviorSubject<string>('');
  pizzaCrust$ = new BehaviorSubject<string>('');
  pizzaToppings$ = new BehaviorSubject<string>('');
  
  combineLatestResult: string[] = [];
  combineLatestEmitCount = 0;
  
  selectedSize = '';
  selectedCrust = '';
  selectedToppings = '';
  
  // WithLatestFrom Example - Photo Capture
  capturePhoto$ = new Subject<void>();
  location$ = new BehaviorSubject<string>('New York');
  filter$ = new BehaviorSubject<string>('Normal');
  brightness$ = new BehaviorSubject<number>(50);
  
  withLatestFromResult: any[] = [];
  withLatestFromEmitCount = 0;
  photoCount = 0;
  
  currentLocation = 'New York';
  currentFilter = 'Normal';
  currentBrightness = 50;
  
  private subscriptions = new Subscription();

  ngOnInit() {
    this.setupCombineLatest();
    this.setupWithLatestFrom();
  }
  
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  
  // CombineLatest Setup
  setupCombineLatest() {
    const sub = combineLatest([
      this.pizzaSize$,
      this.pizzaCrust$,
      this.pizzaToppings$
    ]).subscribe(([size, crust, toppings]) => {
      // Only emit if all values are selected
      if (size && crust && toppings) {
        this.combineLatestEmitCount++;
        const result = `Emit #${this.combineLatestEmitCount}: ${size} pizza, ${crust} crust, ${toppings} toppings`;
        this.combineLatestResult.push(result);
      }
    });
    
    this.subscriptions.add(sub);
  }
  
  // WithLatestFrom Setup
  setupWithLatestFrom() {
    const sub = this.capturePhoto$.pipe(
      withLatestFrom(
        this.location$,
        this.filter$,
        this.brightness$
      )
    ).subscribe(([_, location, filter, brightness]) => {
      this.withLatestFromEmitCount++;
      this.photoCount++;
      const result = {
        photoNumber: this.photoCount,
        emitNumber: this.withLatestFromEmitCount,
        location: location,
        filter: filter,
        brightness: brightness,
        timestamp: new Date().toLocaleTimeString()
      };
      this.withLatestFromResult.push(result);
    });
    
    this.subscriptions.add(sub);
  }
  
  // CombineLatest Methods
  selectSize(size: string) {
    this.selectedSize = size;
    this.pizzaSize$.next(size);
  }
  
  selectCrust(crust: string) {
    this.selectedCrust = crust;
    this.pizzaCrust$.next(crust);
  }
  
  selectToppings(toppings: string) {
    this.selectedToppings = toppings;
    this.pizzaToppings$.next(toppings);
  }
  
  resetPizza() {
    this.selectedSize = '';
    this.selectedCrust = '';
    this.selectedToppings = '';
    this.pizzaSize$.next('');
    this.pizzaCrust$.next('');
    this.pizzaToppings$.next('');
    this.combineLatestResult = [];
    this.combineLatestEmitCount = 0;
  }
  
  // WithLatestFrom Methods
  changeLocation(location: string) {
    this.currentLocation = location;
    this.location$.next(location);
  }
  
  changeFilter(filter: string) {
    this.currentFilter = filter;
    this.filter$.next(filter);
  }
  
  changeBrightness(event: any) {
    this.currentBrightness = event.target.value;
    this.brightness$.next(this.currentBrightness);
  }
  
  capturePhoto() {
    this.capturePhoto$.next();
  }
  
  resetCamera() {
    this.currentLocation = 'New York';
    this.currentFilter = 'Normal';
    this.currentBrightness = 50;
    this.location$.next('New York');
    this.filter$.next('Normal');
    this.brightness$.next(50);
    this.withLatestFromResult = [];
    this.withLatestFromEmitCount = 0;
    this.photoCount = 0;
  }

}
