import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Concat } from './concat';

describe('Concat', () => {
  let component: Concat;
  let fixture: ComponentFixture<Concat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Concat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Concat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
