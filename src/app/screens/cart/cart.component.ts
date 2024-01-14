import { WishlistService } from '@services/wishlist.service';
import { ModalService } from '@services/modal.service';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CartService } from '@services/cart.service';
import { Course } from '@interfaces/course';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @ViewChild('checkouttemplate') checkoutTemplate!:TemplateRef<any>

  constructor(private cartService:CartService,private modalService:ModalService,private wishlistService:WishlistService){}

  get cartItems$(){
    return this.cartService.allCartItemsObs$
  }

  deleteCartItemHandler(index:number){
    this.cartService.deleteCartItem(index)
  }

  showCheckOutModal(){
    this.modalService.showModal(this.checkoutTemplate)
  }

  confirmPayment(){
    this.modalService.hideModal()
    this.cartService.deleteAllcartItems()
  }

  addToWishlistHandler(c:Course,index:number){
    this.wishlistService.setWishlistItems(c,(added:boolean)=>{
      added && this.cartService.deleteCartItem(index)
    })
  }

  trackBy(index:number){
    return index
  }
}
