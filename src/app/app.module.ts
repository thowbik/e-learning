
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpInterceptorService } from 'src/services/interceptor.service';
import { DataService } from 'src/services/data.service';
import { NavigationService } from 'src/services/navigation.service';
import { UserSessionService } from 'src/services/usersession.service';
import { AlertService } from 'src/services/alert.service';
import { AuthenticationService } from 'src/services/authentication.service';
import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from './shared/component/components.module';
import { Observable } from 'rxjs';
import { SpinnerComponent } from './shared/component/spinnercomponent/spinner.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarService } from 'src/services/navbar.service';
import {ButtonModule} from 'primeng/button';
import { NgHttpLoaderModule } from 'ng-http-loader';
import {CardModule} from 'primeng/card';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DialogModule} from 'primeng/dialog';
import { SharedModule } from './shared/shared.module';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {ElearningModule} from './pages/e-learning/e-learning.module';
import { ChannelScheduleComponent } from './pages/channel-schedule/channel-schedule.component';
import {TableModule} from 'primeng/table';
import { ExamModule } from './pages/exam/exam.module';
import { ExamResultModule } from './pages/exam-result/exam-result.module';
import { StudentDetailsModule } from './pages/student-details/student-details.module';
import { ScrollService } from 'src/services/scroll.service';
import { StudentvoiceComponent } from './pages/studentvoice/studentvoice.component';
import { StudentVoiceModule } from './pages/studentvoice/studentvoice.module';
import {TabViewModule} from 'primeng/tabview';
import { VeetupalliModule } from './pages/veetupalli/veetupalli.module';


// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }
@NgModule({
  declarations: [AppComponent, ChannelScheduleComponent],
  imports: [
    BrowserAnimationsModule,
    CardModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    BrowserModule,
    DashboardModule,
    ElearningModule,
    ExamModule,
    ExamResultModule,
    VeetupalliModule,
    StudentDetailsModule,
    StudentVoiceModule,
    ButtonModule,
    TableModule,
    TabViewModule,
    //NgbModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgHttpLoaderModule.forRoot(),
    DialogModule,
    SharedModule
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: createTranslateLoader,
    //     deps: [HttpClient]
    //   }
    // }),

  ],
  providers: [
    AuthenticationService,
    AlertService,
    UserSessionService,
    NavigationService,
    ScrollService,
    DataService,
    NavBarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
  ],

  bootstrap: [AppComponent],
  entryComponents:
    [
      SpinnerComponent
    ]
})
export class AppModule { }
