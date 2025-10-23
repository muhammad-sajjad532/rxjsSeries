import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMap } from './merge-map';

describe('MergeMap', () => {
  let component: MergeMap;
  let fixture: ComponentFixture<MergeMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergeMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
