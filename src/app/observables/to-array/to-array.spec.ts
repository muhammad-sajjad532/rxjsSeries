import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToArray } from './to-array';

describe('ToArray', () => {
  let component: ToArray;
  let fixture: ComponentFixture<ToArray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToArray]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToArray);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
