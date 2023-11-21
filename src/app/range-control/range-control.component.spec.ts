import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeControlComponent } from './range-control.component';

describe('RangeControlComponent', () => {
  let component: RangeControlComponent;
  let fixture: ComponentFixture<RangeControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeControlComponent]
    });
    fixture = TestBed.createComponent(RangeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
