import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@interfaces/course';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input({required:true}) cartItem!:Course
  @Input() showAddWishlistBtn = false
  @Output() deleteCartItem = new EventEmitter()
  @Output() addToWishlist = new EventEmitter<Course>()
}
