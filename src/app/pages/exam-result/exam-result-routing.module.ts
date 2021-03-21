import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamResultComponent } from './exam-result.component';


const routes: Routes = [
    {
        path: '',
        component: ExamResultComponent,
        data: {
            title: 'Exam Result'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExamResultRoutingModule { }
