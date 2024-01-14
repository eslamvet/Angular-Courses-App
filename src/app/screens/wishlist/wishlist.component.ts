import { WishlistService } from '@services/wishlist.service';
import { Component } from '@angular/core';
import { CartService } from '@services/cart.service';
import { Course } from '@interfaces/course';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  constructor(private wishlistService:WishlistService,private cartService:CartService) {}

  get wishlistItems$(){
    return this.wishlistService.allWishlistItemsObs$
  }

  addToCartHandler(c:Course){
    this.cartService.setCartItems(c)
  }

  removeFromWishlistHandler(index:number){
    this.wishlistService.deleteWishlistItem(index)
  }

}
