import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Course } from '@interfaces/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private allCoursesSubject = new BehaviorSubject<Course[]|null>(null)
  readonly allCoursesObs$:Observable<Course[]|null>

  constructor(private http:HttpClient) {
    this.allCoursesObs$ = this.allCoursesSubject.asObservable()
   }

  getAllCoursesApi(){
    return this.http.get<Course[]>('/assets/data.json').pipe(map(courses=>{
      return courses.map(c=>{
        if(c.discountPercentage == "0") c.discountPrice = c.actualPrice
        else{
          const price = parseInt(c.actualPrice.slice(1))
          const percent = parseInt(c.discountPercentage.replace('%',''))
          const discountPrice = price - (price*percent/100)
          c.discountPrice = `${c.actualPrice[0]}${Math.floor(discountPrice) !== discountPrice ? discountPrice.toFixed(2) : discountPrice}`
        }
        return c
      })
    }))
  }

  getCourses(){
    return this.allCoursesSubject.value
  }

  setCourses(data:Course[]){
    this.allCoursesSubject.next(data)
  }
}
