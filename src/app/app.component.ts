import { Component, OnInit } from '@angular/core';
import { CourseService } from '@services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private courseService:CourseService){}

  ngOnInit(): void {
    this.courseService.getAllCoursesApi().subscribe({
      next:data=>{
        this.courseService.setCourses(data)
      }
    })
  }
}
