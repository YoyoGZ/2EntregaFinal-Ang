import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Course } from './models';
import { CoursesService } from './courses.service';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private matDialog: MatDialog,
    ) {this.courses$ = this.coursesService.getCourses()};

  addCourse() : void {
    this.matDialog
    .open(CoursesDialogComponent)
    .afterClosed()
     .subscribe({
      next: (v) =>{
        if (!!v) {
            this.courses$ =  this.coursesService.createCourse({
              id: v.id,
              name: v.name,
              iniDate: v.iniDate,
              finalDate: v.finalDate,
              student: v.student,
            })
        }
      }
    });
  };

  onDeleteCourse(courseId: number): void {
    if (confirm('Está seguro de ELIMINAR este Curso ?? ')) {
      this.courses$ = this.coursesService.deleteCourse(courseId);
    }
  };

  onEditCourse(courseId: number): void {
    this.matDialog.open(CoursesDialogComponent, {
      data:courseId,
    }).afterClosed().subscribe({
      next: (result) => {if(!!result)
         {this.courses$ = this.coursesService.editCourses(courseId, result)}
      }
    });
  };
}