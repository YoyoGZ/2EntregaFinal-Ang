import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentsDetailComponent } from './components/students-detail/students-detail/students-detail.component';



@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: StudentsComponent},

            { path: 'students/:id', component: StudentsDetailComponent},
        ])
    ],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})

export class StudentsRoutingModule{}