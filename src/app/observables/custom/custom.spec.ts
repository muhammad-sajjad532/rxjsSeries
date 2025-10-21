import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custom } from './custom';

describe('Custom', () => {
  let component: Custom;
  let fixture: ComponentFixture<Custom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Custom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Custom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
