import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from '../../shared/shared.module';
import { DashboardService } from './dashboard.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CardModule,
        CarouselModule,
        FlexLayoutModule,
        DialogModule,
        SharedModule,
        MessagesModule,
        MessageModule,
        ToastModule
    ],
    declarations: [
        DashboardComponent,
    ],
    providers: [DashboardService,MessageService],
})
export class DashboardModule { }
