import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@interfaces/course';
import { BASE_HREF } from '@utils/base-href';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent {
  @Input({required:true}) course!:Course
  @Input() isWishlist!:boolean
  @Input() showRemoveWishlistBtn=false
  @Output() addToCart = new EventEmitter<Course>()
  @Output() addToWishlist = new EventEmitter<Course>()
  @Output() removeFromWishlist = new EventEmitter()
  BASE_HREF=BASE_HREF
}
