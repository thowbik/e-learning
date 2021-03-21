import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from 'src/services/navigation.service';
import { AlertService } from 'src/services/alert.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';
import { UserSessionService } from 'src/services/usersession.service';
import { NavBarService } from 'src/services/navbar.service';
import { ScrollService } from 'src/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  schoolName: any;
  userName: string;
  userType: string;
  instDistrict: string;
  isOpen: boolean = false;
  toggleTitle: string;
  isShowDropdown: boolean =false;
  studentName: any;
  classId: any;
  className: any;
  section: any;
  class_in_roman:any = ["0","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","LKG","UKG","PREKG"];
  display: boolean = false;
  scrollTarget: HTMLElement;
  constructor(
    private navigationService: NavigationService,
    private alertService: AlertService, private router: Router,
    private authService : AuthenticationService,private userSessionService : UserSessionService,private navBarService:NavBarService,
    private scrollService :ScrollService) {
      this.schoolName = this.userSessionService.schoolName();
      this.studentName = this.userSessionService.studentName();
      this.schoolName = this.userSessionService.schoolName();
      this.classId = this.userSessionService.classStudingId();
      this.className = this.class_in_roman[this.classId];
      this.section = this.userSessionService.section();
     }

  ngOnInit() {
  }
  toggleDropdown()
  {
    this.isShowDropdown = !this.isShowDropdown;
  }
  // toggleSidebar()
  // {
  //   this.navBarService.toggle();
  //   this.isOpen = !this.isOpen;
  //   this.toggleTitle = this.isOpen ? 'Close' : 'Expand';
  // }

  onLogout()
  {
    this.authService.logOut();
    this.navigationService.goToLogin();
    localStorage.removeItem("schoolName");
    localStorage.removeItem('schoolTypeId');
    localStorage.clear();
  }
  cancel()
  {
this.display = false;
  }
  goToChannel()
  {
    this.router.navigate(['/e-learning']);
  }
  scroll(target) {
    this.scrollTarget = target;
    this.scrollService.Scroll(this.scrollTarget);
  }
  goToStudentVoice() {
    debugger;
    let currentUrl = '/yourvoice';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/yourvoice']);
    });
  }

}
