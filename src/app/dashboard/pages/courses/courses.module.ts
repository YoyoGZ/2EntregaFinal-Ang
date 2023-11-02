import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesTableComponent,
    CoursesDialogComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
  ]
})
export class CoursesModule { }
