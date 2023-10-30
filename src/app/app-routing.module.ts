import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { UserDetailComponent } from './dashboard/pages/users/components/user-detail/user-detail.component';
import { TeachersComponent } from './dashboard/pages/teachers/teachers.component';
import { StudentsComponent } from './dashboard/pages/students/students.component';
import { EnrrollmentsComponent } from './dashboard/pages/enrrollments/enrrollments.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
      children: [
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'users',
          component: UsersComponent,
        },
        {
          path: 'users/detail/:id',
          component: UserDetailComponent,
         },
        {
          path: 'courses',
          component: CoursesComponent,
        },
        // {
        //   path: 'courses/detail/:id',
        //   component: CourseDetailComponent,
        // },
        {
          path: 'students',
          component: StudentsComponent,
        },
        // {
        //   path: 'students/detail/:id',
        //   component: StudentDetailComponent,
        // },
        {
          path: 'teachers',
          component: TeachersComponent,
        },
        // {
        //   path: 'teachers/detail/:id',
        //   component: TeacherDetailComponent,
        // },
        {
          path: 'enrrollments',
          component: EnrrollmentsComponent,
        },
        // {
        //   path: 'enrrollments/detail/:id',
        //   component: TeacherDetailComponent,
        // },
        // {
        //   path: 'exit-app',
        //   component: AuthComponent,
        // },

        {
          path: '**',
          redirectTo: 'home',
        }
        ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '**',
    redirectTo: 'auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
