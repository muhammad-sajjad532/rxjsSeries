import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merge } from './merge';

describe('Merge', () => {
  let component: Merge;
  let fixture: ComponentFixture<Merge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
