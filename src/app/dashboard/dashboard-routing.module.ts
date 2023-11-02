import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { StudentsComponent } from "./pages/students/students.component";
import { TeachersComponent } from "./pages/teachers/teachers.component";
import { EnrrollmentsComponent } from "./pages/enrrollments/enrrollments.component";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: DashboardComponent,
            children: [
                    { path: 'home',component: HomeComponent,},
                    
                    { path: 'users', 
                        loadChildren: () => import ('./pages/users/users.module').then((m) => m.UsersModule),},
                    
                    { path: 'courses',
                        loadChildren: () => import ('./pages/courses/courses.module').then((m) => m.CoursesModule),},
                    
                    { path: 'students',component: StudentsComponent,},
                    
                    // { path: 'students/detail/:id',component: StudentDetailComponent,},
                    
                    { path: 'teachers',component: TeachersComponent,},
                    
                    // { path: 'teachers/detail/:id',component: TeacherDetailComponent,},
                    
                    { path: 'enrrollments',component: EnrrollmentsComponent,},
                    
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