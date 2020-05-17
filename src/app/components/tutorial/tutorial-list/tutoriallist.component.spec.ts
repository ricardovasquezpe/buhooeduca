import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialListComponent } from './tutoriallist.component';

describe('TutorialListComponent', () => {
  let component: TutorialListComponent;
  let fixture: ComponentFixture<TutorialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
