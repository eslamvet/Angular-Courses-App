import { ModalService } from '@services/modal.service';
import { UserService } from '@services/user.service';
import { Injectable } from '@angular/core';
import { Course } from '@interfaces/course';
import { BehaviorSubject, Observable } from 'rxjs';
import { TOAST_TYPE, ToastService } from './toast.service';
import { LoginComponent } from '../screens/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private allWishlistItemsSubject = new BehaviorSubject<Course[]>([])
  readonly allWishlistItemsObs$: Observable<Course[]>

  constructor(private toastService: ToastService,private userService:UserService,private modalService:ModalService) {
    this.allWishlistItemsObs$ = this.allWishlistItemsSubject.asObservable()
  }

  setWishlistItems(data: Course,cb:any=undefined) {
    if(!!this.userService.getUser()){
      const wishlistItems = [...this.allWishlistItemsSubject.value]
      const isCourseAlreadyAdded = wishlistItems.find(c => c.courseName == data.courseName)
      if (isCourseAlreadyAdded) {
        this.toastService.addToasts({ message: 'The course already exists in your wishlist', type: TOAST_TYPE.DANGER, id: Date.now() })
        cb && cb(false)
      } else {
        wishlistItems.push(data)
        this.allWishlistItemsSubject.next(wishlistItems)
        this.toastService.addToasts({ message: 'The course added successfully to your wishlist', type: TOAST_TYPE.SUCCESS, id: Date.now() })
        cb && cb(true)
      }
    }else{
      this.modalService.showModalComponent(LoginComponent)
    }
  }

  deleteWishlistItem(index: number) {
    const wishlistItems = [...this.allWishlistItemsSubject.value]
    wishlistItems.splice(index, 1)
    this.allWishlistItemsSubject.next(wishlistItems)
  }
}
