import { Injectable } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Injectable()
export class StudentDetailsService {
  confirm(arg0: { message: string; header: string; icon: string; accept: () => void; reject: () => void; }) {
    throw new Error("Method not implemented.");
  }

    constructor(private dataService: DataService) {};
    
getStudentDetails(data)
{
    debugger;
  return this.dataService.post('StuExamAbsChk',data); 
}
saveStudentAdditionalDetails(data)
{
  return this.dataService.post('StuExamAbsRes ',data); 
}

}
