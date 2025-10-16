import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Promises } from './promises';

describe('Promises', () => {
  let component: Promises;
  let fixture: ComponentFixture<Promises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Promises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Promises);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
