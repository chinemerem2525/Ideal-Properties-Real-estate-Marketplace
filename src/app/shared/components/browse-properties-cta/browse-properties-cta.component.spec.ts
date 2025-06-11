import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsePropertiesCtaComponent } from './browse-properties-cta.component';

describe('BrowsePropertiesCtaComponent', () => {
  let component: BrowsePropertiesCtaComponent;
  let fixture: ComponentFixture<BrowsePropertiesCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsePropertiesCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsePropertiesCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
