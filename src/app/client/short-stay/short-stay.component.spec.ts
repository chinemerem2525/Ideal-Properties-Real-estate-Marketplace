import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortStayComponent } from './short-stay.component';

describe('ShortStayComponent', () => {
  let component: ShortStayComponent;
  let fixture: ComponentFixture<ShortStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortStayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
