import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  GooglePayButtonModule } from '@google-pay/button-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { CustomerFormComponent } from './component/admin-dashboard/customer-form/customer-form.component';
import { AfterWashOrderComponent } from './component/after-wash-order/after-wash-order.component';
import { AllPackagesComponent } from './component/all-packages/all-packages.component';
import { FormForPackageComponent } from './component/all-packages/form-for-package/form-for-package.component';
import { UpdatePackageComponent } from './component/all-packages/update-package/update-package.component';
import { AllUsersComponent } from './component/all-users/all-users.component';
import { CarsComponent } from './component/cars/cars.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { CustomerDashboardComponent } from './component/customer-dashboard/customer-dashboard.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { OrderFormComponent } from './component/order-form/order-form.component';
import { OrderViewTableComponent } from './component/order-form/order-view-table/order-view-table.component';
import { OrderInvoiceComponent } from './component/order-invoice/order-invoice.component';
import { RatingPageComponent } from './component/rating-page/rating-page.component';
import { ScheduledWashComponent } from './component/scheduled-wash/scheduled-wash.component';
import { ScheduledWashCustomerComponent } from './component/scheduled-wash-customer/scheduled-wash-customer.component';
import { SelectPackageComponent } from './component/select-package/select-package.component';
import { TestingComponent } from './component/testing/testing.component';
import { WashRequestComponent } from './component/wash-request/wash-request.component';
import { WasherDashboardComponent } from './component/washer-dashboard/washer-dashboard.component';
import { WasherDetailsComponent } from './component/washer-details/washer-details.component';
import { TokenInterceptor } from './interceptor/token.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    NavbarComponent,
    HomepageComponent,
    CustomerFormComponent,
    AfterWashOrderComponent,
    AllPackagesComponent,
    FormForPackageComponent,
    UpdatePackageComponent,
    AllUsersComponent,
    CarsComponent,
    ContactsComponent,
    CustomerDashboardComponent,
    InvoiceComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    OrderDetailsComponent,
    OrderFormComponent,
    OrderViewTableComponent,
    OrderInvoiceComponent,
    RatingPageComponent,
    ScheduledWashComponent,
    ScheduledWashCustomerComponent,
    SelectPackageComponent,
    TestingComponent,
    WashRequestComponent,
    WasherDashboardComponent,
    WasherDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgToastModule,
    ReactiveFormsModule,
    FormsModule,
    GooglePayButtonModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
