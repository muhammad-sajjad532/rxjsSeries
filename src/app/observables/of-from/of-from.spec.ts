import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfFrom } from './of-from';

describe('OfFrom', () => {
  let component: OfFrom;
  let fixture: ComponentFixture<OfFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfFrom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
