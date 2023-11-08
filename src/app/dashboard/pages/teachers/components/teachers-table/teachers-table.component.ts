import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teacher } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
  styleUrls: []
})
export class TeachersTableComponent {

  @Input()
  dataSource: Teacher[] = [];

  @Output()
  addCourse = new EventEmitter();

  @Output()
  deleteCourse = new EventEmitter<number>();
  
  @Output()
  editCourse = new EventEmitter<Teacher>()
  
  displayedColumns = ['id', 'fullname','course','email','actions'];

  constructor(private router: Router) {}

  viewDetail(teacherId : number): void {
    this.router.navigate( ['dashboard', 'teachers', 'detail', teacherId]);
  }

}
