import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { StudentsComponent } from "./pages/students/students.component";
import { TeachersComponent } from "./pages/teachers/teachers.component";
import { EnrollmentsComponent } from "./pages/enrollments/enrollments.component";
import { DashboardComponent } from "./dashboard.component";
import { adminGuard } from "../core/guards/admin.guard";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: DashboardComponent,
                children:[
                        { path: 'home',component: HomeComponent,},
                        
                        { path: 'users',
                            canActivate: [adminGuard], 
                            loadChildren: () => import ('./pages/users/users.module')
                            .then((m) => m.UsersModule),},
                        
                        { path: 'courses',
                            loadChildren: () => import ('./pages/courses/courses.module')
                            .then((m) => m.CoursesModule),},
                        
                        { path: 'students',
                            loadChildren: () => import ('./pages/students/students.module')
                            .then((m) => m.StudentsModule),},
                        
                        { path: 'teachers',  
                            loadChildren: () => import ('./pages/teachers/teachers.module')
                            .then((m) => m.TeachersModule),},
                        
                        { path: 'enrollments',
                            loadChildren: () => import ('./pages/enrollments/enrollments.module')
                            .then((m) => m.EnrollmentsModule),},
                        
                        { path: '**',redirectTo: 'home',},
                ]
            }            
        ]),
    ],
exports: [RouterModule],
})

export class DashboardRoutingModule {}