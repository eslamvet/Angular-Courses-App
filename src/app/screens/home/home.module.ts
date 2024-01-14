import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { PageBannerModule } from '@shared/page-banner/page-banner.module';
import { CourseCardModule } from '@shared/course-card/course-card.module';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '@pipes/sort.pipe';
import { FilterPipe } from '@pipes/filter.pipe';
import { IsCourseWishlistPipe } from '@pipes/is-course-wishlist.pipe';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PageBannerModule,
    FilterPipe,
    IsCourseWishlistPipe,
    SortPipe,
    CourseCardModule,
    RouterModule.forChild([{path:'',component:HomeComponent}])
  ]
})
export class HomeModule { }
