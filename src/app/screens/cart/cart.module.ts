import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { CartItemModule } from '@shared/cart-item/cart-item.module';
import { CalculateTotalPricePipe } from '@pipes/calculate-total-price.pipe';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartItemModule,
    CalculateTotalPricePipe,
    RouterModule.forChild([{path:'',component:CartComponent}])
  ]
})
export class CartModule { }
