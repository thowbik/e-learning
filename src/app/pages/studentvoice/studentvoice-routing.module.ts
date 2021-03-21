import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentvoiceComponent } from './studentvoice.component';
const routes: Routes = [
    {
        path: '',
        component: StudentvoiceComponent,
        data: {
            title: 'Student Voice'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudentVoiceRoutingModule { }
