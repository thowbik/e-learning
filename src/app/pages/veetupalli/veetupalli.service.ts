import { Injectable } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class VeetupalliService {
  private readingFileApi = environment.readingFileApi;

    constructor(private dataService: DataService) {};
    

    public getTreeJSON() {
        return this.dataService.getJSON('../../../assets/json/tree.json');
      }
saveAnswer(data)
{
  return this.dataService.post('/api/ELearnExamAns ',data); 
}
getDownloadData() {
  debugger
  return this.dataService.getData('StuContentTrans',true);
}
getVideoUrl(data){
  return this.dataService.getJSON('https://d8omnqcdi1.execute-api.ap-south-1.amazonaws.com/staging-resource-collection-mgmt/resource-collection-mgmt/resource-listurl?'+data);
}
getUploadedFiles(bucketName,fileName,expiry) {
  let params = {"bcktId":bucketName,"filename":fileName,"expiry":expiry};
  return this.dataService.getDataWithParams(this.readingFileApi,params, true)
}
download(url: string) {
  debugger;
  return this.dataService.getReport(url)
}

}
