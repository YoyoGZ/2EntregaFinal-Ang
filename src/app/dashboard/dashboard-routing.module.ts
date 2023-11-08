import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { StudentsComponent } from "./pages/students/students.component";
import { TeachersComponent } from "./pages/teachers/teachers.component";
import { EnrollmentsComponent } from "./pages/enrollments/enrollments.component";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: DashboardComponent,
            children: [
                    { path: 'home',component: HomeComponent,},
                    
                    { path: 'users', 
                        loadChildren: () => import ('./pages/users/users.module')
                        .then((m) => m.UsersModule),},
                    
                    { path: 'courses',
                        loadChildren: () => import ('./pages/courses/courses.module')
                        .then((m) => m.CoursesModule),},
                    
                    { path: 'students',component: StudentsComponent,
                        loadChildren: () => import ('./pages/students/students.module')
                        .then((m) => m.StudentsModule)},
                    
                    { path: 'teachers',component: TeachersComponent,
                        loadChildren: () => import ('./pages/teachers/teachers.module')
                        .then((m) => m.TeachersModule),},
                    
                    { path: 'enrollments',component: EnrollmentsComponent,},
                    
                    // { path: 'enrrollments/detail/:id', component: TeacherDetailComponent,},
                    
                    // { path: 'exit-app',component: AuthComponent,},
            
                    { path: '**',redirectTo: 'home',},
                ]
            }            
        ]),
    ],
exports: [RouterModule],
})

export class DashboardRoutingModule {}