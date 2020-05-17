import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialScreenComponent } from './tutorialscreen.component';

describe('TutorialScreenComponent', () => {
  let component: TutorialScreenComponent;
  let fixture: ComponentFixture<TutorialScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
