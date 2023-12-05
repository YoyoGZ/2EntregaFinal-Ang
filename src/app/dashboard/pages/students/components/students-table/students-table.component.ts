import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styles: [
  ]
})
export class StudentsTableComponent {
  @Input()
  dataSource: Student[] = [];

  @Output()
  addStudent = new EventEmitter();

  @Output()
  deleteStudent = new EventEmitter<number>();
  
  @Output()
  editStudent = new EventEmitter()
  
  displayedColumns = ['id', 'name','course','email', 'actions'];

  constructor(private router: Router) {}

  viewDetail(studentId : number): void {
    this.router.navigate( ['dashboard', 'students', 'detail', studentId]);
  }

}
