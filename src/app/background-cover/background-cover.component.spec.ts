import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundCoverComponent } from './background-cover.component';

describe('BackgroundCoverComponent', () => {
  let component: BackgroundCoverComponent;
  let fixture: ComponentFixture<BackgroundCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
