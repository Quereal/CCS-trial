import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPaymentsComponent } from './footer-payments.component';

describe('FooterPaymentsComponent', () => {
  let component: FooterPaymentsComponent;
  let fixture: ComponentFixture<FooterPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterPaymentsComponent]
    });
    fixture = TestBed.createComponent(FooterPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
