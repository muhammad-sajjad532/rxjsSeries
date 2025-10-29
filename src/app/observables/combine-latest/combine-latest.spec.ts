import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatest } from './combine-latest';

describe('CombineLatest', () => {
  let component: CombineLatest;
  let fixture: ComponentFixture<CombineLatest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
