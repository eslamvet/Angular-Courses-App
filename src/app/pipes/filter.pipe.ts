import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@interfaces/course';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], searchText:string|null): Course[] {
    if(searchText){
      const text = searchText.trim().toLowerCase()
      return courses.filter(c=>c.courseName.toLowerCase().includes(text) || c.author.toLowerCase().includes(text) || c.tags.find(t=>t.toLowerCase().includes(text)))
    }else return courses
  }

}
