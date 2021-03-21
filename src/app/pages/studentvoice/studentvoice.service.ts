import { Injectable } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Injectable()
export class StudentVoiceService {

    constructor(private dataService: DataService) {};
    
saveFeedback(data)
{
    debugger;
  return this.dataService.post('FeedbackElearnContent',data); 
}
getStudentName(userId,userTypeId) {
  // api/RetreiveStudTeacher/?user_id=330205008192013580&user_type_id=17
  return this.dataService.getData('RetreiveStudTeacher/?user_id='+userId+'&user_type_id='+userTypeId,true);
}
getUploadedFiles(userId) {
  return this.dataService.getData('/eapi/GetFileDetails/?user_id='+userId,true);
}
}
