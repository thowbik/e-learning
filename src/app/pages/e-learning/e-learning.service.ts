import { Injectable } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Injectable()
export class ElearningService {

    constructor(private dataService: DataService) {};
    
getVideoPdfChapter(data)
{
    debugger;
  return this.dataService.post('ELearnChapter',data); 
}
getVideoPdf(data)
{
  return this.dataService.post('ELearnVideo',data); 
}
getBookdetails(route){
  return this.dataService.getRecord(route);
}

getVideoUrl(data){
  return this.dataService.getJSON('https://d8omnqcdi1.execute-api.ap-south-1.amazonaws.com/staging-resource-collection-mgmt/resource-collection-mgmt/resource-listurl?'+data);
}

}
