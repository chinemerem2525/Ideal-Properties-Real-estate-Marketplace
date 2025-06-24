import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShortletsSingleComponent } from './all-shortlets-single.component';

describe('AllShortletsSingleComponent', () => {
  let component: AllShortletsSingleComponent;
  let fixture: ComponentFixture<AllShortletsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllShortletsSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllShortletsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
