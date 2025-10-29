import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipForkJoin } from './zip-fork-join';

describe('ZipForkJoin', () => {
  let component: ZipForkJoin;
  let fixture: ComponentFixture<ZipForkJoin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZipForkJoin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipForkJoin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
