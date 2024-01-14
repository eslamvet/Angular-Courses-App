import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@interfaces/course';

@Pipe({
  name: 'calculateTotalPrice',
  standalone: true
})
export class CalculateTotalPricePipe implements PipeTransform {

  transform(cartItems: Course[]): {[key:string]:string} {
    const currencySymbol = cartItems[0].discountPrice[0]
    const allPrices = cartItems.reduce((acc,cartItem)=>{
      acc.totalAfterDiscount += parseFloat(cartItem.discountPrice.slice(1))
      acc.totalBeforeDiscount += parseFloat(cartItem.actualPrice.slice(1))
      return acc
    },{totalBeforeDiscount:0,totalAfterDiscount:0});
    const discount = allPrices.totalBeforeDiscount-allPrices.totalAfterDiscount
    return {
      discount:currencySymbol+(Math.floor(discount) !== discount ? discount.toFixed(2) : discount),
      totalAfterDiscount:currencySymbol+(Math.floor(allPrices.totalAfterDiscount) !== allPrices.totalAfterDiscount ? allPrices.totalAfterDiscount.toFixed(2) : allPrices.totalAfterDiscount),
      totalBeforeDiscount:currencySymbol+(Math.floor(allPrices.totalBeforeDiscount) !== allPrices.totalBeforeDiscount ? allPrices.totalBeforeDiscount.toFixed(2) : allPrices.totalBeforeDiscount),
    }
  }

}
