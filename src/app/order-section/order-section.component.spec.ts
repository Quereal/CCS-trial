import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSectionComponent } from './order-section.component';

describe('OrderSectionComponent', () => {
  let component: OrderSectionComponent;
  let fixture: ComponentFixture<OrderSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderSectionComponent]
    });
    fixture = TestBed.createComponent(OrderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
