import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pluck } from './pluck';

describe('Pluck', () => {
  let component: Pluck;
  let fixture: ComponentFixture<Pluck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pluck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pluck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
