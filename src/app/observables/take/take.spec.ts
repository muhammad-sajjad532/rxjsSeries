import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Take } from './take';

describe('Take', () => {
  let component: Take;
  let fixture: ComponentFixture<Take>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Take]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Take);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
