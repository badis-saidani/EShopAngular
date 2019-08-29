import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ClientComponent } from './client/client.component';
import { InboxComponent } from './admin/inbox/inbox.component';
import { DevisComponent } from './admin/devis/devis.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { ProductManagementComponent } from './admin/product-management/product-management.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    ProductsComponent,
    AboutusComponent,
    ContactusComponent,
    ClientComponent,
    InboxComponent,
    DevisComponent,
    CategoriesComponent,
    ProductManagementComponent,
    DetailProductComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PerfectScrollbarModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  exports: [

    FormUploadComponent,
    ListUploadComponent
  ]
})
export class AppModule { }
