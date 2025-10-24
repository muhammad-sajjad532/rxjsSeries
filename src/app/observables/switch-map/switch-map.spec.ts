import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMap } from './switch-map';

describe('SwitchMap', () => {
  let component: SwitchMap;
  let fixture: ComponentFixture<SwitchMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
