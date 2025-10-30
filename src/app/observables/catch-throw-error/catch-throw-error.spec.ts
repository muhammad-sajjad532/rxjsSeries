import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchThrowError } from './catch-throw-error';

describe('CatchThrowError', () => {
  let component: CatchThrowError;
  let fixture: ComponentFixture<CatchThrowError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatchThrowError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchThrowError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
