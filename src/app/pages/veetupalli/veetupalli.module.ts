
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
import { VeetupalliComponent } from './veetupalli.component';
import { VeetupalliRoutingModule } from './veetupalli-routing.module';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {TreeModule} from 'primeng/tree';
import { VeetupalliService } from './veetupalli.service';
import {TreeNode} from 'primeng/api';
import { TableModule } from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {KeyFilterModule} from 'primeng/keyfilter';

@NgModule({
    imports: [
        CommonModule,
        VeetupalliRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CardModule,
        CarouselModule,
        AccordionModule,
        FlexLayoutModule,
        KeyFilterModule,
        TableModule,
        DialogModule,
        SharedModule,
        MessagesModule,
        MessageModule,
        ToastModule,
        TabViewModule,
        PanelModule,
        ButtonModule,
        TreeModule,
        
        
    ],
    declarations: [
        VeetupalliComponent,
    ],
    providers: [VeetupalliService],
})
export class VeetupalliModule { }
