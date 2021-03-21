import { Injectable } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Injectable()
export class ExamService {

    constructor(private dataService: DataService) {};
    
getQuestions(data)
{
    debugger;
  return this.dataService.post('/api/ELearnExamQuest',data); 
}
saveAnswer(data)
{
  return this.dataService.post('/api/ELearnExamAns ',data); 
}

}
