import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@interfaces/course';
import { BASE_HREF } from '@utils/base-href';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  BASE_HREF=BASE_HREF

  @Input({required:true}) cartItem!:Course
  @Input() showAddWishlistBtn = false
  @Output() deleteCartItem = new EventEmitter()
  @Output() addToWishlist = new EventEmitter<Course>()
}
