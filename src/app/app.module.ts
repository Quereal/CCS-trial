import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { BannerComponent } from './banner/banner.component';
import { ButtonComponent } from './button/button.component';
import { OrderSectionComponent } from './order-section/order-section.component';
import { OrderFormComponent } from './order-section/order-form/order-form.component';
import { OrderIconRowComponent } from './order-section/order-icon-row/order-icon-row.component';
import { FooterCopyrightComponent } from './footer/footer-copyright/footer-copyright.component';
import { FooterPaymentsComponent } from './footer/footer-payments/footer-payments.component';
import { FooterContactsComponent } from './footer/footer-contacts/footer-contacts.component';
import { FormsModule } from '@angular/forms';
import { SelectControlComponent } from './select-control/select-control.component';
import { RangeControlComponent } from './range-control/range-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLogoComponent,
    HeaderMenuComponent,
    FooterComponent,
    BannerComponent,
    ButtonComponent,
    OrderSectionComponent,
    OrderFormComponent,
    OrderIconRowComponent,
    FooterCopyrightComponent,
    FooterPaymentsComponent,
    FooterContactsComponent,
    SelectControlComponent,
    RangeControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
