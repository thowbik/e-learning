import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
// declare let L;
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { UserSessionService } from 'src/services/usersession.service';
import { AlertService } from 'src/services/alert.service';
import { DOCUMENT } from '@angular/common';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  loginForm: FormGroup;
  images: any[] = [];
  displayDialog: boolean = false;
  coronaImages: any[] = [];
  display: boolean = false;
  emisUserType: number;
  submitted: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dashboardService: DashboardService,
    private userSessionService: UserSessionService,
    private alertService: AlertService,
    @Inject(DOCUMENT) private document: Document,
    private messageService: MessageService,
    ) {
      this.router = router;
  }

  ngOnInit() {
    this.initializeValidators();
this.getImages();
//  this.displayDialog = true;
  }
  initializeValidators() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  goToLearning()
  {
    this.router.navigate(['/e-learning']);
  }
  getImages()
  {
    this.images = [
      // {"img":"learning1"},
      // {"img":"learning2"},
      // {"img":"learning3"},
      // {"img":"learning4"},
      {img: 'precaution1'},
      {img: 'precaution2'},
      {img: 'precaution3'},
      {img: 'precaution4'},
    ];
    this.displayDialog = false;
     }
     goToYoutube() {
      window.open("https://www.youtube.com/channel/UCTMjO0AVI__8bnjTiK3JyPw/", "_blank");
     }
     onNeetLogin()
     {
       this.display = true;
     }
     onNEETLogin()
     {
      this.submitted = true;
      if (this.loginForm.valid) {
       
              this.dashboardService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((data) => {
                debugger;
                if(data.dataStatus == true) {
              debugger;
                    this.emisUserType = this.userSessionService.userTypeId();
                    if(this.emisUserType == 17) {
                      document.location.href = 'https://neet.tnschools.gov.in/TN-EMIS-PAL/?u='+this.loginForm.value.username;
                      
                   }
                   else {
                    this.messageService.add({severity:'warn', summary: 'Invalid User', detail:''});
                    // this.alertService.error("Invalid Username or Password");
                   }
                }
                else {
                // this.alertService.error(data.message);
                this.messageService.add({severity:'warn', summary: 'Invalid Username or Password', detail:''});
                }
        
              });
            } 
     }
}
