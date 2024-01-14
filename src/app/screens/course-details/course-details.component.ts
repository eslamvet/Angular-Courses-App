import { WishlistService } from '@services/wishlist.service';
import { CartService } from '@services/cart.service';
import { CourseService } from '@services/course.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Course } from '@interfaces/course';
import { BASE_HREF } from '@utils/base-href';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  isVideoPlaying = false
  courseName:string
  BASE_HREF=BASE_HREF

  constructor(private courseService:CourseService,private activatedRoute:ActivatedRoute,private cartService:CartService,private wishlistService:WishlistService){
    this.courseName = this.activatedRoute.snapshot.params['name']
  }

  get course$(){
    return this.courseService.allCoursesObs$.pipe(map(c=>c?.find(c=>c.courseName = this.courseName)),switchMap((c)=>this.wishlistService.allWishlistItemsObs$.pipe(map(w=>c ? ({...c,isWhislist:!!w.find(i=>i.courseName == c?.courseName)}) : null))))
  }

  get wishlistItems$(){
    return this.wishlistService.allWishlistItemsObs$
  }

  addToCartHandler(c:Course){
    this.cartService.setCartItems(c)
  }
  addToWishlistHandler(c:Course){
    this.wishlistService.setWishlistItems(c)
  }

}
