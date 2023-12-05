import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: []
})
export class CoursesTableComponent {
  @Input()
  dataSource: Course[] = [];

  @Output()
  addCourse = new EventEmitter();

  @Output()
  deleteCourse = new EventEmitter<number>();
  
  @Output()
  editCourse = new EventEmitter()
  
  displayedColumns = ['id', 'name', 'iniDate','finalDate','student','actions'];
  constructor(private router: Router) {}

  viewDetail(courseId : number): void {
    this.router.navigate( ['dashboard', 'courses', 'detail', courseId]);
  }
}
