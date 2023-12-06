import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: []
})
export class CourseDetailComponent implements OnInit {
    @Input()
    description: 'Angular'| 'Javascript' | 'Diseno' | ''  = ''

    public course: Course | null = null;
    public courseId? : number;
    constructor(
      private route: ActivatedRoute,private coursesService: CoursesService
    ) {}
  
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.courseId = +params['id'];
        this.getCourseDetail(this.courseId);
      });
    }
  
    getCourseDetail(id: number): void {
      this.coursesService.getCourseById(id).subscribe(
        (data: any) => {
          this.course = data;
        },
      );
    }
}
