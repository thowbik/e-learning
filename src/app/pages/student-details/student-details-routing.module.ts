import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details.component';


const routes: Routes = [
    {
        path: '',
        component: StudentDetailsComponent,
        data: {
            title: 'Student Details'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudentDetailsRoutingModule { }
