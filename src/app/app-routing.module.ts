import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminDashboardComponent } from '../app/component/admin-dashboard/admin-dashboard.component';
import { CustomerFormComponent } from '../app/component/admin-dashboard/customer-form/customer-form.component';
import { AfterWashOrderComponent } from '../app/component/after-wash-order/after-wash-order.component';

import { AllPackagesComponent } from './component/all-packages/all-packages.component';
import { FormForPackageComponent } from './component/all-packages/form-for-package/form-for-package.component';
import { UpdatePackageComponent } from './component/all-packages/update-package/update-package.component';
import { AllUsersComponent } from './component/all-users/all-users.component';
import { CarsComponent } from './component/cars/cars.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

import { HomepageComponent } from './component/homepage/homepage.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { ContactsComponent } from './component/contacts/contacts.component';

import { CustomerDashboardComponent } from './component/customer-dashboard/customer-dashboard.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { OrderViewTableComponent } from './component/order-form/order-view-table/order-view-table.component';
import { OrderFormComponent } from './component/order-form/order-form.component';
import { OrderInvoiceComponent } from './component/order-invoice/order-invoice.component';
import { ScheduledWashComponent } from './component/scheduled-wash/scheduled-wash.component';
import { ScheduledWashCustomerComponent } from './component/scheduled-wash-customer/scheduled-wash-customer.component';
import { WashRequestComponent } from './component/wash-request/wash-request.component';

import { WasherDashboardComponent } from './component/washer-dashboard/washer-dashboard.component';
import { WasherDetailsComponent } from './component/washer-details/washer-details.component';
import { SelectPackageComponent } from './component/select-package/select-package.component';
import { TestingComponent } from './component/testing/testing.component';

import { AuthGuard } from './Authguard/auth-guard.service';

const routes: Routes = [

  {path:'admin', component:AdminDashboardComponent,canActivate:[AuthGuard]},
  {path:'admin/form', component:CustomerFormComponent,canActivate:[AuthGuard]},
  {path:'admin/orderDetails', component:AfterWashOrderComponent,canActivate:[AuthGuard]},
  {path:'admin/orders/orderDetails', component:AfterWashOrderComponent,canActivate:[AuthGuard]},
  {path:'admin/orders', component:InvoiceComponent,canActivate:[AuthGuard]},
  {path:'admin/services', component:AllPackagesComponent,canActivate:[AuthGuard]},
  {path:'admin/services/form', component:FormForPackageComponent,canActivate:[AuthGuard]},
  {path:'admin/services/update', component:UpdatePackageComponent,canActivate:[AuthGuard]},
  {path:'admin/allUsers', component:AllUsersComponent,canActivate:[AuthGuard]},
  {path:'admin/cars', component:CarsComponent,canActivate:[AuthGuard]},
  {path:'admin/washersList', component:WasherDetailsComponent,canActivate:[AuthGuard]},



  {path:'customer', component:CustomerDashboardComponent,canActivate:[AuthGuard]},
  {path:'customer/scheduled/orderDetails', component:AfterWashOrderComponent,canActivate:[AuthGuard]},
  {path:'customer/orderDetails', component:AfterWashOrderComponent,canActivate:[AuthGuard]},
  {path:'customer/scheduled', component:ScheduledWashCustomerComponent,canActivate:[AuthGuard]},


  {path:'washer', component:WasherDashboardComponent,canActivate:[AuthGuard]},
  {path:'washer/orderDetails', component:AfterWashOrderComponent,canActivate:[AuthGuard]},
  {path:'washer/request', component:WashRequestComponent,canActivate:[AuthGuard]},
  {path:'washer/request/orderDetails', component:OrderDetailsComponent,canActivate:[AuthGuard]},
  {path:'washer/scheduled/orderDetails', component:OrderDetailsComponent,canActivate:[AuthGuard]},
  {path:'washer/scheduled', component:ScheduledWashComponent,canActivate:[AuthGuard]},


  {path:'home',component:HomepageComponent},
  {path:'contact', component:ContactsComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'*@#', component:NotFoundComponent},
  {path:'testing', component:TestingComponent},


  {path:'home/selectpackage', component:SelectPackageComponent,canActivate:[AuthGuard]},
  {path:'home/selectpackage/form/orderview', component:OrderViewTableComponent,canActivate:[AuthGuard]},
  {path:'home/selectpackage/form', component:OrderFormComponent,canActivate:[AuthGuard]},
  {path:'home/selectpackage/form/orderview/invoice', component:OrderInvoiceComponent,canActivate:[AuthGuard]},


  {path:'',component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
