import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@interfaces/course';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(courses: Course[],sort:string): Course[] {
    return sort ? courses.sort((a,b)=>{
      const a_price = parseInt(a.actualPrice.slice(1))
      const b_price = parseInt(b.actualPrice.slice(1))
      return sort == 'asc' ? a_price-b_price : b_price-a_price
    })  : courses;
  }

}
