import { ModalService } from '@services/modal.service';
import { UserService } from '@services/user.service';
import { CartService } from '@services/cart.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/screens/login/login.component';
import { BASE_HREF } from '@utils/base-href';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  BASE_HREF=BASE_HREF

  constructor(private cartService:CartService,private userService:UserService,private router:Router,private modalService:ModalService){}

  showCartMenu(){
    const cartMenuEl = document.getElementById('cartMenu') as HTMLUListElement
    cartMenuEl.style.display = cartMenuEl.style.display == "block" ? "none" : "block"
  }

  closeCartMenu(){
    const cartMenuEl = document.getElementById('cartMenu') as HTMLUListElement
    cartMenuEl.style.display = "none"
  }

  get cartItems$(){
    return this.cartService.allCartItemsObs$
  }

  deleteCartItemHandler(index:number){
    this.cartService.deleteCartItem(index)
  }

  navLinkClickHandler(path:string){
    if(!!this.userService.getUser()) this.router.navigate([path])
    else{
      this.modalService.showModalComponent(LoginComponent,[{name:'redirectUrl',value:path}])
    }
  }

  trackBy(index:number){
    return index
  }
}
