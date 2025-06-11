import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopListingsComponent } from './top-listings.component';

describe('TopListingsComponent', () => {
  let component: TopListingsComponent;
  let fixture: ComponentFixture<TopListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
