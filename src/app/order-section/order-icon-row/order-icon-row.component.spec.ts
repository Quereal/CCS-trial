import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderIconRowComponent } from './order-icon-row.component';

describe('OrderIconRowComponent', () => {
  let component: OrderIconRowComponent;
  let fixture: ComponentFixture<OrderIconRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderIconRowComponent]
    });
    fixture = TestBed.createComponent(OrderIconRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
