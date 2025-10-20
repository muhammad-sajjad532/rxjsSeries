import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observables } from './observables';

describe('Observables', () => {
  let component: Observables;
  let fixture: ComponentFixture<Observables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
