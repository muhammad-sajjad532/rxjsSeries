import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTime } from './debounce-time';

describe('DebounceTime', () => {
  let component: DebounceTime;
  let fixture: ComponentFixture<DebounceTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebounceTime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceTime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
