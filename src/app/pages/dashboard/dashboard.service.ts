
  import { Injectable } from '@angular/core';
  import { DataService } from 'src/services/data.service';
  
import * as jwtDecode from 'jwt-decode';
import * as momenttz from 'moment-timezone';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserSession } from 'src/models/usersession';
import { UserSessionService } from 'src/services/usersession.service';
  @Injectable()
  export class DashboardService {
    sessionData = new UserSession();
    private loginbaseUrl = environment.loginApiBaseUrl;
    private baseUrl = environment.apiBaseUrl;
    timeZones: any[];
      constructor(private dataService: DataService,
        private http: HttpClient,
        private sessionService: UserSessionService) {};
  login(username: string, password: string) {
    debugger;
   
      
    // const data = 'emis_username=' + username + 'emis_password=' + password;
 const data =   {"records":{"emis_username": username,"emis_password": password
}}
    return this.http.post<any>(this.loginbaseUrl, data)
      .map(user => {
debugger;
        if (user && user.dataStatus) {
          // localStorage.setItem('token',user.records.token);
          const decodedToken = jwtDecode(user.records.token);
          // console.log('in auth service',decodedToken);
          debugger;
          this.sessionData.usertypeid = decodedToken['emis_usertype'];
          this.sessionData.authToken = user.records.token;
          this.sessionService.create(this.sessionData);
          
        }
        return user;
      });
  }
}