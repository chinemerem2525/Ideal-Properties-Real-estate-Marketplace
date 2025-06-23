import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShortletsComponent } from './all-shortlets.component';

describe('AllShortletsComponent', () => {
  let component: AllShortletsComponent;
  let fixture: ComponentFixture<AllShortletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllShortletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllShortletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
