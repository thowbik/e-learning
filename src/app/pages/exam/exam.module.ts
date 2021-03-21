import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { MessageService } from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MenuModule} from 'primeng/menu';
import { SharedModule } from '../../shared/shared.module';
import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import { ExamService } from './exam.service';
import {KeyFilterModule} from 'primeng/keyfilter';
@NgModule({
    imports: [
        ExamRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        TableModule,
        DropdownModule,
        MultiSelectModule,
        ToastModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        SliderModule,
        CheckboxModule,
        CardModule,
        RadioButtonModule,
        FormsModule,
        FlexLayoutModule,
        NgxExtendedPdfViewerModule,
        MessagesModule,
        MessageModule,
        MenuModule,
        SharedModule,
        KeyFilterModule
    ],
    exports: [],
    declarations: [
        ExamComponent
    ],
    providers: [ExamService],
})
export class ExamModule { }
