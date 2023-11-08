import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { TeachersDetailComponent } from './components/teachers-detail/teachers-detail.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: TeachersComponent},

            { path: 'teachers/:id', component: TeachersDetailComponent},
        ])
    ],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})

export class TeacherRoutingModule{}