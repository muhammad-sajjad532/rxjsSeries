import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMap } from './concat-map';

describe('ConcatMap', () => {
  let component: ConcatMap;
  let fixture: ComponentFixture<ConcatMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcatMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
