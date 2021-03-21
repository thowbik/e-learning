import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelScheduleComponent } from './channel-schedule.component';
const routes: Routes = [
    {
        path: '',
        component: ChannelScheduleComponent,
        data: {
            title: 'Channel Schedule'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class channelScheduleRoutingModule { }
