import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContactsComponent } from './footer-contacts.component';

describe('FooterContactsComponent', () => {
  let component: FooterContactsComponent;
  let fixture: ComponentFixture<FooterContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterContactsComponent]
    });
    fixture = TestBed.createComponent(FooterContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
