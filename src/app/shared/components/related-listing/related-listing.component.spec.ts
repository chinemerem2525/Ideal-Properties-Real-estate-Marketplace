import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedListingComponent } from './related-listing.component';

describe('RelatedListingComponent', () => {
  let component: RelatedListingComponent;
  let fixture: ComponentFixture<RelatedListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
