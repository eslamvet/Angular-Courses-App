import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './course-details.component';
import { RouterModule } from '@angular/router';
import { PageBannerModule } from '@shared/page-banner/page-banner.module';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [CourseDetailsComponent, TimerComponent],
  imports: [
    CommonModule,
    PageBannerModule,
    RouterModule.forChild([{path:'',component:CourseDetailsComponent}])
  ]
})
export class CourseDetailsModule { }
