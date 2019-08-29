import { DetailProductComponent } from './detail-product/detail-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
      path: 'products',
      component: ProductsComponent
    },
    {
      path: 'products/:id',
      component: ProductsComponent
    },
    {
      path: 'detail-product/:id',
      component: DetailProductComponent
    },
    {
      path: 'aboutus',
      component: AboutusComponent
    },
    {
      path: 'contactus',
      component: ContactusComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
      path: 'client',
      component: ClientComponent
  },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
