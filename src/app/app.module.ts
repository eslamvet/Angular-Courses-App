import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout-components/header/header.component';
import { CartItemModule } from '@shared/cart-item/cart-item.module';
import { CalculateTotalPricePipe } from '@pipes/calculate-total-price.pipe';
import { ToastComponent } from './layout-components/toast/toast.component';
import { ModalModule } from '@shared/modal/modal.module';
import { LoginModule } from './screens/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    ModalModule,
    CalculateTotalPricePipe,
    CartItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
