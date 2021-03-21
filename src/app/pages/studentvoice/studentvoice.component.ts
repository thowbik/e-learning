import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { StudentVoiceService } from './studentvoice.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-studentvoice',
  templateUrl: './studentvoice.component.html',
  styleUrls: ['./studentvoice.component.scss']
})
export class StudentvoiceComponent implements OnInit {
  form: FormGroup;
  userTypes: any[] = [];
  feedbackTypes: any[] = [];
  feedbackTypesTamil: any[] = [];
  language: any[] = [];
  submitted: boolean = false;
  userType: string = "Student";
  feedbackType:number;
  text: any;
  showText: boolean = false;
  pageIndex: number;
  name: string;
  userTypeTamil: string;
  constructor(private fb: FormBuilder,
    private svService: StudentVoiceService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.pageIndex = 1;
    this.initialValidator();
    this.getDropdownValues();
  }
  initialValidator() {
    this.form = this.fb.group({
      'lang_id': new FormControl('', Validators.required),
      'user_type_id': new FormControl('', Validators.required),
      'user_id': new FormControl('', Validators.required),
      'feedback_type': new FormControl('', Validators.required),
      'feedback': new FormControl('', Validators.required),
      'reponse': new FormControl('', null)
      
    });
  }
  getDropdownValues()
{
  this.language = [
  { "value": "1", "label": "Tamil"},
  { "value": "2", "label": "English"}
  ];
  this.userTypes = [
  { "value": "14", "label": "Teacher"},
  { "value": "17", "label": "Student"}
];
  this.feedbackTypes = [
  { "value": "1", "label": "Ask a doubt about subject / topic"},
  {"value": "2", "label": "Give Feedback about Kalvi TV program"},
  {"value": "3", "label": "Give Feedback about e-Learn"},
  {"value": "4", "label": "Give Suggestions for imrpoving Kalvi TV Programs"},
  {"value": "5", "label": "Give Suggestions for improving e-Learn Website"},
  {"value": "6", "label": "Give Other feedback / Ask other questions"},
];
this.feedbackTypesTamil = [
  { "value": "1", "label": "பாடம் சம்மந்தப்பட்ட கேள்விகள் மற்றும் சந்தேகங்கள் கேட்க  விரும்புகிறேன்"},
  {"value": "2", "label": "கல்வி தொலைக்காட்சி பற்றி கருத்துக்கள் பகிர விரும்புகிறேன்"},
  {"value": "3", "label": "e-learn இணையதளம்  பற்றி கருத்துக்கள் பகிர விரும்புகிறேன்"},
  {"value": "4", "label": "கல்வி தொலைக்காட்சி நிகழ்ச்சிகளை மேம்படுத்த என் கருத்துக்களை பகிர விரும்புகிறேன்"},
  {"value": "5", "label": "e-learn இணையதளம் மேம்படுத்த என் கருத்துக்களை பகிர விரும்புகிறேன் "},
  {"value": "6", "label": "வேறு கேள்விகள் அல்லது கருத்துக்களை பகிர விரும்புகிறேன் "},
]; 
}
getUserType(usertype) {
if(usertype == '14') {
this.userType = "Teacher";
this.userTypeTamil = "Teacher";
}
else {
  this.userType = "Student";
  this.userTypeTamil = "மாணவர்";
}
}
save() {
  debugger;
  this.submitted = true;
  if(this.form.valid) {
    var records =    {"records":{
      "user_type_id":this.form.value.user_type_id,
      "user_id":this.form.value.user_id,
      "feedback_type":this.form.value.feedback_type,
      "feedback":this.form.value.feedback,
      "reponse":this.form.value.reponse}};
  this.svService.saveFeedback(records).subscribe((result) => {
    if (result.dataStatus == true) {
      debugger;
      this.pageIndex++;
    }
  });
}
else {
  this.messageService.add({severity:'warn', summary: 'Please Fill all the required fields', detail:''});
}
}

close() {
  this.showText = false;
  window.location.reload();
}
prev() {
  this.pageIndex--
}
next() {
  debugger;
  this.submitted = false;
  switch(this.pageIndex){
    case 1:
      if(this.form.value.lang_id) {
      this.pageIndex++;
      }
      else {
        this.submitted = true;
      }
            break;
    case 2:
if(this.form.value.user_type_id) {
this.pageIndex++;
}
else {
  this.submitted = true;
}
      break;
    case 3:
      if(this.form.value.user_id) {
        this.svService.getStudentName(this.form.value.user_id,this.form.value.user_type_id).subscribe((result) => {
          if (result.result.Retreive_stud_teacher && result.result.Retreive_stud_teacher.length > 0) {
            debugger;
            this.name = this.form.value.user_type_id == "14" ? result.result.Retreive_stud_teacher[0].teacher_name : result.result.Retreive_stud_teacher[0].name;
            this.pageIndex++;
          }
          else {
            this.messageService.add({severity:'warn', summary: 'Invalid User Id', detail:''});
          }  
        });
        } 
        else {
          this.submitted = true;
        }
      break;
      case 4:
        if(this.form.value.feedback_type) {
          this.pageIndex++;
          }
          else {
            this.submitted = true;
          }
     
        break;
        case 5:
          if(this.form.value.feedback) {
            this.pageIndex++;
            }
            else {
              this.submitted = true;
            }
          break;
    default:
      break;
  }

}
getFeedbackType(value) {
  if(value == '1') {
    this.feedbackType = 1;
    }
    else {
      this.feedbackType = 2;
    }
}
}

