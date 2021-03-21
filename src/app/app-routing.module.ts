import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ELearningComponent } from './pages/e-learning/e-learning.component';
import { ChannelScheduleComponent } from './pages/channel-schedule/channel-schedule.component';
import { ExamComponent } from './pages/exam/exam.component';
import { ExamResultComponent } from './pages/exam-result/exam-result.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentvoiceComponent } from './pages/studentvoice/studentvoice.component';
import { VeetupalliComponent } from './pages/veetupalli/veetupalli.component';
import { StorybookComponent} from './pages/e-learning/storybook/storybook.component';
import { TextbookComponent } from './pages/e-learning/textbook/textbook.component';
const appRoutes: Routes = [

 {path: 'welcome', component: DashboardComponent },
 {path: '', redirectTo: 'welcome', pathMatch: 'full'},
 {path: 'e-learning', component: ELearningComponent},
 { path: 'e-learning',
   children: [
     { path: 'textbook', component:  TextbookComponent},
     { path: 'storybook', component:  StorybookComponent},
 ]},
 {path: 'channel', component: ChannelScheduleComponent},
 {path: 'exam', component: ExamComponent},
 {path: 'examresult', component: ExamResultComponent},
 {path: 'studentdetails', component: StudentDetailsComponent},
 {path: 'yourvoice', component: StudentvoiceComponent},
 {path: 'veetupalli', component: VeetupalliComponent},
//  {path: '**', component: PageNotFoundComponent}
  // {
  //   path: '',
  //   loadChildren: () => import('../app/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  // },
  // {
  //   path: 'e-learning',
  //   loadChildren: () => import('../app/pages/e-learning/e-learning.module').then(m => m.ElearningModule)
  // }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
