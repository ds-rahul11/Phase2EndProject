import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDisplayComponent } from './cart-display/cart-display.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutsuccessComponent } from './checkoutsuccess/checkoutsuccess.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'products', component: ProductsComponent},
  {path:'cart-display',component:CartDisplayComponent},
  {path:'checkoutsuccess',component:CheckoutsuccessComponent},
  {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
