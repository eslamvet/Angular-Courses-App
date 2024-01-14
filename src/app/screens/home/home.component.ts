import { WishlistService } from './../../services/wishlist.service';
import { CartService } from '@services/cart.service';
import { CourseService } from '@services/course.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent, map, throttleTime } from 'rxjs';
import { Course } from '@interfaces/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentIndex = 0
  numOfCoursesPerPage = 4
  sort=''
  searchText$!:Observable<string>
  @ViewChild('searchInput',{static:true}) inputRef!:ElementRef<HTMLInputElement>

  constructor(private courseService:CourseService,private cartService:CartService,private wishlistService:WishlistService){}

  ngOnInit(): void {
    this.searchText$ = fromEvent(this.inputRef.nativeElement,'keyup').pipe(throttleTime(300),map((e:any)=>{
      if(this.currentIndex!=0)this.currentIndex = 0
      return e.target.value
    }))
  }

  get courses$(){
    return this.courseService.allCoursesObs$
  }

  get wishlistItems$(){
    return this.wishlistService.allWishlistItemsObs$
  }

  trackBy(index: number) {
    return index
  }

  pageSizeChangeHandler(e:any){
    if(this.currentIndex!==0) this.currentIndex=0;
    this.numOfCoursesPerPage = parseInt(e.target.value)
  }

  addToCartHandler(c:Course){
    this.cartService.setCartItems(c)
  }
  addToWishlistHandler(c:Course){
    this.wishlistService.setWishlistItems(c)
  }
}
