import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@interfaces/course';

@Pipe({
  name: 'isCourseWishlist',
  standalone: true
})
export class IsCourseWishlistPipe implements PipeTransform {

  transform(wishlistItems: Course[], course:Course): boolean {
    return !!wishlistItems.find(w=>w.courseName == course.courseName);
  }

}
