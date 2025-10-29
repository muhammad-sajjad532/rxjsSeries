import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReplay } from './share-replay';

describe('ShareReplay', () => {
  let component: ShareReplay;
  let fixture: ComponentFixture<ShareReplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareReplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareReplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
