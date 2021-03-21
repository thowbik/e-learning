import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ElearningService } from '../e-learning.service';


export interface videos {
  chapter:string;
  file_type:string;
  name:string;
  video_url:string; 
}

@Component({
  selector: 'app-storybook',
  templateUrl: './storybook.component.html',
  styleUrls: ['./storybook.component.scss']
})

export class StorybookComponent implements OnInit {
  
  
    classList: any[] =[];
    mediumList: any[]=[];
    @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
    form: FormGroup;
    
    
    isShowVideo: boolean = false;
    isNoData: boolean = false;
    
    videos: videos[];
    
    responsiveOptions:any;
    isVideo: boolean = false;
    videoLabel: any;
    Url: any;
    bulidSta: any;
    linkLabel: any;
    isLink: boolean = false;
    Link: any;
    imgs = ["assets/img/features-1.png","assets/img/features-2.png", "assets/img/features-3.png","assets/img/features-4.png"];

    constructor(private sanitizer: DomSanitizer,
      private fb: FormBuilder,
      private eService: ElearningService) { }
  
    ngOnInit() {
      this.sampleData();
      this.handleClass(0);
      this.handleMedium('Tamil');
    }
  
    sampleData() {
      this.mediumList = [
        { "value": "Tamil", "label": "Tamil" },
        { "value": "English", "label": "English" },
      ];
      
        this.classList = [
          { "value": 1, "label": " Level 1 - Beginning to read" },
          { "value": 2, "label": " Level 2 - Learning to read" },
          { "value": 3, "label": " Level 3 - Reading independently" },
          { "value": 4, "label": " Level 4 - Reading proficiently" },
        ];
      
    }
    fillArray(pattern, count) {
      let result = [];
      if (["number", "string"].includes(typeof pattern)) {
          result = new Array(4);
          result.fill(pattern);
      }
      else if (pattern instanceof Array) {
          for (let i = 0; i < count; i++) {
              result = result.concat(pattern);
          }
          result = result.slice(0, count);
      }
      return result;
  }
  
    toggleVideo() {
      this.videoplayer.nativeElement.play();
    }
    mappedSubjectList: any=[];
    
    
    
    isStyBkLink(details){
      this.videoLabel = details.Label;
      this.isVideo = true;
      let urbef = details.ContentName.slice(1, -1);
      console.log(urbef);
      this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(urbef);
      console.log(this.Url);
    }
    
    close() {
      this.isVideo = false;
    }
    
    SelectedMedium: any = '';
    SelectedClass: any = '';
    SelectedTerm: any = '';
    loadDetails: any = false;
  
    handleMedium(med){
      this.SelectedMedium = med;
      this.mapDetails();
    }
    
    handleClass(id) {
      this.SelectedClass = id+1;
      this.mapDetails();
    }
  

  
    mapDetails(){
    
    
    
    this.loadDetails = false;
    let path = ''
      if(this.SelectedClass){
        path = 'storybook?Level_ID='+this.SelectedClass;
      }else{
        path = 'storybook';
      }
    
    this.eService.getBookdetails(path).subscribe((result) => {
      const merged = this.fillArray(this.imgs,result.elearn_details.length);
      for(let i= 0;i<result.elearn_details.length;i++){
        result.elearn_details[i]['LocalImage'] = merged[i];
        // let urbef = result.elearn_details[i]['ContentName'].replace(/^"|"$/g, '');
        // result.elearn_details[i]['Url'] =this.sanitizer.bypassSecurityTrustResourceUrl(urbef);
      }
      var newArray = result.elearn_details;
          if(result.dataStatus){
            this.mappedSubjectList = newArray.filter(element => element.Medium == this.SelectedMedium);
            console.log(this.mappedSubjectList);
          }
          else{
            this.mappedSubjectList = [];
          }
    this.loadDetails = true;
   });
  }
  }