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
  selector: 'app-textbook',
  templateUrl: './textbook.component.html',
  styleUrls: ['./textbook.component.scss']
})
export class TextbookComponent implements OnInit {

  classList: any[] =[];
  termList: any[]=[];
  mediumList: any[]=[];
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  subjectList: any[]=[];
  form: FormGroup;
  isTermShown:boolean = false;
  isShowVideo: boolean = false;
  isNoData: boolean = false;
  videos: videos[];
  isShowVideos: boolean = false;
  isShowYoutubeVideos : boolean = false;

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
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    this.sampleData();
    this.handleClass(0);
    this.handleMedium('Tamil');
    this.handleTerm(1);
  }

  sampleData() {
    this.mediumList = [
      { "value": "Tamil", "label": "Tamil" },
      { "value": "English", "label": "English" },
    ];
      this.classList = [
        { "value": 1, "label": " Class I" },
        { "value": 2, "label": " Class II" },
        { "value": 3, "label": " Class III" },
        { "value": 4, "label": " Class IV" },
        { "value": 5, "label": " Class V" },
        { "value": 6, "label": " Class VI" },
        { "value": 7, "label": " Class VII" },
        { "value": 8, "label": " Class VIII" },
        { "value": 9, "label": " Class IX" },
        { "value": 10, "label": " Class X" },
        { "value": 11, "label": " Class XI" },
        { "value": 12, "label": " Class XII" },
      ];
      this.termList = [
        { "value": 1, "label": "Term 1" },
        { "value": 2, "label": "Term 2" },
        { "value": 3, "label": "Term 3" },
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
  getSubjects(classId) {
    debugger;
    var value = parseInt(classId);
    if (value == 1 || value == 2) {
      this.subjectList = [
        { "value": "English", "label": "English"},
        { "value": "Tamil", "label": "Tamil" },
        { "value": "Maths", "label": "Maths" },
        { "value": "EVS", "label": "EVS" }
      ];
    } else if(value == 3 || value == 4 || value == 5 || value == 6 || value == 7 || value == 8) {
      this.subjectList = [
        { "value": "English", "label": "English"},
        { "value": "Tamil", "label": "Tamil" },
        { "value": "Maths", "label": "Maths" },
        { "value": "Science", "label": "Science" },
        { "value": "Social Science", "label": "Social Science"}
      ];
    } else if(value == 9 || value == 10) {
      this.subjectList = [
        { "value": "English", "label": "English"},
        { "value": "Tamil", "label": "Tamil" },
        { "value": "Maths", "label": "Maths" },
        { "value": "Science", "label": "Science" },
        { "value": "Social", "label": "Social" }
      ];
    } else if(value == 11 || value == 12) {
      this.subjectList = [
        { "value": "Chemistry", "label": "Chemistry"},
        { "value": "Physics", "label": "Physics"},
        { "value": "Botany", "label": "Botany"},
        { "value": "English", "label": "English"},
        { "value": "Tamil", "label": "Tamil"},
        { "value": "Microbiology", "label": "Microbiology"},
        { "value": "History", "label": "History"},
        { "value": "Advanced Tamil", "label": "Advanced Tamil"},
        { "value": "General Nursing", "label": "General Nursing"},
        { "value": "Ethics and Indian Culture", "label": "Ethics and Indian Culture"},
        { "value": "Communicative English", "label": "Communicative English"},
        { "value": "Home Science", "label": "Home Science"},
        { "value": "Zoology", "label": "Zoology"},
        { "value": "Geography", "label": "Geography"},
        { "value": "Commerce", "label": "Commerce"},
        { "value": "Bio Chemistry", "label": "Bio Chemistry"},
        { "value": "Nutrition and Dietics", "label": "Nutrition and Dietics"},
        { "value": "Statistics", "label": "Statistics" },
        { "value": "Political Science", "label": "Political Science"},
        { "value": "Computer Applications", "label": "Computer Applications"}
     ]
    }
  }
  
  isVideoLink(details) {
    debugger
    
    // this.bulidSta = this.cards.filter(item=> item.id == e);
    
    
    
    // https://d8omnqcdi1.execute-api.ap-south-1.amazonaws.com/staging-resource-collection-mgmt/resource-collection-mgmt/resource-listurl?bcktId=lmes-content&filename=0548a752883285d6060764f6e40720720eee0537.mp4&ext=mp4&expiry=3600
    
    let params = "bcktId=lmes-content&filename="+details.ContentName+"&ext=mp4&expiry=3600";
    this.eService.getVideoUrl(params).subscribe((result) => {if(result['url']){this.isVideo = true;this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(result['url']);}});
    this.videoLabel = "Video Playing - "+details.Label;
    
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
    if(this.SelectedClass < 9){  this.isTermShown = true; }else{ this.isTermShown = false; this.SelectedTerm = ''; } ;
    this.getSubjects(id+1);
    this.mapDetails();
  }

  handleTerm(term){
    this.SelectedTerm = term;
    this.mapDetails();
  }

  mapDetails(){
  
    this.loadDetails = false;
    let path = ''
    this.mappedSubjectList = this.subjectList;
    path = 'textbook?Class_ID='+this.SelectedClass;
  
      this.eService.getBookdetails(path).subscribe((result) => {
        const merged = this.fillArray(this.imgs,result.elearn_details.length);
        for(let i= 0;i<result.elearn_details.length;i++){
          result.elearn_details[i]['LocalImage'] = merged[i];
        }
        var newArray = result.elearn_details;
        
        for(let i= 0;i<this.mappedSubjectList.length;i++){
            if(result.dataStatus){
              if(this.SelectedTerm){
                if(this.mappedSubjectList[i].value == "Tamil" || this.mappedSubjectList[i].value == "English"){
                  this.mappedSubjectList[i].details = newArray.filter(element => element.Subject == this.mappedSubjectList[i].value && element.Term == this.SelectedTerm);  
                }else{
                  this.mappedSubjectList[i].details = newArray.filter(element => element.Subject == this.mappedSubjectList[i].value && element.Medium == this.SelectedMedium && element.Term == this.SelectedTerm);
                }
              }else{
                if(this.mappedSubjectList[i].value == "Tamil" || this.mappedSubjectList[i].value == "English"){
                  this.mappedSubjectList[i].details = newArray.filter(element => element.Subject == this.mappedSubjectList[i].value);
                }else{
                  this.mappedSubjectList[i].details = newArray.filter(element => element.Subject == this.mappedSubjectList[i].value && element.Medium == this.SelectedMedium);
                }
              } 
            }
            else{
              this.mappedSubjectList[i]['details'] = [];
            }
        }
        
      this.loadDetails = true;
      console.log(this.mappedSubjectList);
    });
  }
}