import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEvent } from './from-event';

describe('FromEvent', () => {
  let component: FromEvent;
  let fixture: ComponentFixture<FromEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
