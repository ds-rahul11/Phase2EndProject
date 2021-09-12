import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { CartDisplayComponent } from './cart-display/cart-display.component';
import { FormsModule } from '@angular/forms';
import { CheckoutsuccessComponent } from './checkoutsuccess/checkoutsuccess.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    CartDisplayComponent,
    CheckoutsuccessComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
