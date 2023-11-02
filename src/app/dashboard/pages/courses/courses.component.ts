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
    ) {
    this.courses$ = this.coursesService.getCourses$();
    console.log(this.coursesService);
    
  }

  addCourse() : void {
    this.matDialog
    .open(CoursesDialogComponent)
    .afterClosed()
     .subscribe({
    next: (v) =>{
      if (!!v) {
          this.courses$ =  this.coursesService.createCourse$({
          id: new Date().getTime(),
          name: v.name,
          iniDate: v.iniDate,
          finalDate: v.finalDate,
        })
      }
    }
    });
  }

  OnDeleteCourse(courseId: number): void {
    this.courses$ = this.coursesService.deleteCourse$(courseId)
  }

  OnEditCourse(courseId: number): void {
    this.matDialog.open(CoursesDialogComponent, {
      data:courseId,
    });
  }


}