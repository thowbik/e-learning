import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeetupalliComponent } from './veetupalli.component';

const routes: Routes = [
    {
        path: '',
        component: VeetupalliComponent,
        data: {
            title: 'Exam Result'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VeetupalliRoutingModule { }
