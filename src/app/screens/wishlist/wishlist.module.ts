import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
import { RouterModule } from '@angular/router';
import { CourseCardModule } from '@shared/course-card/course-card.module';
import { IsCourseWishlistPipe } from '@pipes/is-course-wishlist.pipe';



@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    CourseCardModule,
    IsCourseWishlistPipe,
    RouterModule.forChild([{path:'',component:WishlistComponent}])
  ]
})
export class WishlistModule { }
