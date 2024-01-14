import { TOAST_TYPE, ToastService } from '@services/toast.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from '@interfaces/course';
import { LoginComponent } from '../screens/login/login.component';
import { ModalService } from './modal.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private allCartItemsSubject = new BehaviorSubject<Course[]>([])
  readonly allCartItemsObs$: Observable<Course[]>

  constructor(private toastService: ToastService, private userService: UserService, private modalService: ModalService) {
    this.allCartItemsObs$ = this.allCartItemsSubject.asObservable()
  }

  setCartItems(data: Course) {
    if (!!this.userService.getUser()) {
      const cartItems = [...this.allCartItemsSubject.value]
      const isCourseAlreadyAdded = cartItems.find(c => c.courseName == data.courseName)
      if (isCourseAlreadyAdded) {
        this.toastService.addToasts({ message: 'The course already exists in your cart', type: TOAST_TYPE.DANGER, id: Date.now() })
      } else {
        cartItems.push(data)
        this.allCartItemsSubject.next(cartItems)
        this.toastService.addToasts({ message: 'The course added successfully to your cart', type: TOAST_TYPE.SUCCESS, id: Date.now() })
      }
    } else {
      this.modalService.showModalComponent(LoginComponent)
    }
  }

  deleteAllcartItems() {
    this.allCartItemsSubject.next([])
  }

  deleteCartItem(index: number) {
    const cartItems = [...this.allCartItemsSubject.value]
    cartItems.splice(index, 1)
    this.allCartItemsSubject.next(cartItems)
  }

}
