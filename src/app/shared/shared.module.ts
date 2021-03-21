import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DialogModule} from 'primeng/dialog';
// COMPONENTS


// DIRECTIVES
import { ComponentsModule } from './component/components.module';
import { FooterComponent } from './footer/footer.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { HeaderComponent } from './header/header.component';
export const components = [
    LeftmenuComponent,
    HeaderComponent,
    FooterComponent
  ];
@NgModule({
    // exports: [
    //     CommonModule,
    //     NgbModule,
    //     DialogModule
    // ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        ComponentsModule,
        DialogModule
    ],
    exports: [components],
    declarations: [components],


})
export class SharedModule { }
