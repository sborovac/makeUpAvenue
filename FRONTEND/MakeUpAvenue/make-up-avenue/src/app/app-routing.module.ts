import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {PocetnaStranicaComponent} from './pocetna-stranica/pocetna-stranica.component';
import {RegisterComponent} from './register/register.component';
import {ProductsComponent} from './products/products.component';
import {ProfileComponent} from './profile/profile.component';
import {ProductInfoComponent} from './product-info/product-info.component';

const routes: Routes = [
   {path:'', component: PocetnaStranicaComponent},
   { path: 'register', component: RegisterComponent },
   { path: 'products', component: ProductsComponent },
   { path: 'profile', component: ProfileComponent },
   { path: 'product-info', component: ProductInfoComponent },
  { path: 'signin', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
