import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustMap } from './exhaust-map';

describe('ExhaustMap', () => {
  let component: ExhaustMap;
  let fixture: ComponentFixture<ExhaustMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhaustMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhaustMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
