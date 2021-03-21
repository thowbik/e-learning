
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from '../../shared/shared.module';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { ChannelScheduleComponent } from './channel-schedule.component';
import { channelScheduleRoutingModule } from './channel-schedule-routing.module';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
@NgModule({
    imports: [
        CommonModule,
        TabViewModule,
        channelScheduleRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CardModule,
        CarouselModule,
        FlexLayoutModule,
        DialogModule,
        SharedModule,
        MessagesModule,
        MessageModule,
        ToastModule,
        TableModule
       
    ],
    declarations: [],
    providers: [],
})
export class ChannelScheduleModule { }
