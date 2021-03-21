import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ExamService } from './exam.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  form: FormGroup;
  questionform: FormGroup;
  classList: any[] =[];
  mediumList: any[]=[];
  subjectList: any[]=[];
  multipleQuestions: any[]=[];
  answerList: any[] =[]; 
  isShowQuestions: boolean = false;
  testCompletion: boolean = false;

  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private examService: ExamService,
    private messageService: MessageService,
    ) { }

  ngOnInit() {
    this.sampleData();
    this.initialValidators();
  }
  initialValidators() {
    this.form = this.fb.group({
      student_id: new FormControl('', Validators.required),
      classId: new FormControl('', Validators.required),
      mediumId: new FormControl('', Validators.required),
      subjectId: new FormControl('', Validators.required)
    });
    this.questionform = this.fb.group({
      multipleQuestions: this.fb.array([]),
      // options: this.fb.array([]),
    });
  }
  setQuestions(x) {
    let arr = new FormArray([])
    x.forEach(y => {
      arr.push(this.fb.group({
        q_id: [y.q_id, null],
        q_text: [y.q_text, null],
        q_img: [y.q_img, null],
      }))
    })
    return arr;
  }
  setOptions(x) {
    let arr = new FormArray([])
    x.forEach(y => {
      arr.push(this.fb.group({
        choice_correct_yn: [y.choice_correct_yn, null],
        choice_img: [y.choice_img,null],
        choice_text: [y.choice_text,null],
        q_id: [y.q_id,null],
        choice_id: ['',null],
        choice_weight: [y.choice_weight,null]
      }))
    })
   
    return arr;
  
  }
  sampleData() {
    this.classList = [
      { "value": "1", "label": "I" },
      { "value": "2", "label": "II" },
      { "value": "3", "label": "III" },
      { "value": "4", "label": "IV" },
      { "value": "5", "label": "V" },
      { "value": "6", "label": "VI" },
      { "value": "7", "label": "VII" },
      { "value": "8", "label": "VIII" },
      { "value": "9", "label": "IX" },
      { "value": "10", "label": "X" },
      { "value": "11", "label": "XI" },
      { "value": "12", "label": "XII" },
      // { "value": "13", "label": "LKG" },
      // { "value": "14", "label": "UKG" },
      // { "value": "15", "label": "PRE-KG" },

    ];
    this.mediumList = [
      { "value": "16", "label": "English" },
      { "value": "17", "label": "Tamil" },
    ];
  }
  getSelectedAnswer(data,i) {
    debugger;
    var multipleQuestionsFormArray = (<FormArray>this.questionform.controls['multipleQuestions']).at(i) as FormArray
    (<FormArray>this.questionform.controls['multipleQuestions']).at(i).patchValue({ 
        choice_id: data.value.choice_id,
        choice_weight:data.value.choice_weight,
        q_id:data.value.q_id

    });
  }
  getQuestions() {
    debugger;
    if(this.form.valid) {
      this.multipleQuestions =[];
      var records =    {"records":
{
"class":"6",
"medium":"19",
"subject":"3"
}
}

      this.examService.getQuestions(records).subscribe(res => {
        if (res.result.length > 0) {
          debugger;
          this.isShowQuestions = true;
          this.multipleQuestions = res.result;
          const multipleQuestionsFormArray = this.questionform.controls.multipleQuestions as FormArray;
          while (multipleQuestionsFormArray.length !== 0) {
            multipleQuestionsFormArray.removeAt(0)
          }
          for (let i = 0; i < this.multipleQuestions.length; i++) {
            multipleQuestionsFormArray.push(this.fb.group({
              serial_no: [i+1, null],
              q_id: ['', null],
              choice_id:['',Validators.required],
              choice_weight: ['', null],
              duration: ['', null],
              questions: this.setQuestions(this.multipleQuestions[i].quest),
              options: this.setOptions(this.multipleQuestions[i].choice)
      }));
    }
  }
})
    }
  }
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
        { "value": "3", "label": "English"},
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
        { "value": "Advanced Tamil", "label": "Advanced Tamil"},
        { "value": "Bio Chemistry", "label": "Bio Chemistry"},
        { "value": "Bio-Botany", "label": "Bio-Botany" },
        { "value": "Botany", "label": "Botany" },
        { "value": "Business Maths", "label": "Business Maths" },
        { "value": "Chemistry", "label": "Chemistry" },
        { "value": "Commerce", "label": "Commerce" }, 
        { "value": "Communicative English", "label": "Communicative English" },
        { "value": "Computer Application", "label": "Computer Application" },
        { "value": "Computer Application", "label": "Computer Applications" },
        { "value": "Computer Science", "label": "Computer Science" },
        { "value": "English", "label": "English"},
        { "value": "Ethics and Indian Culture", "label": "Ethics and Indian Culture"},
        { "value": "General Nursing", "label": "General Nursing" },
        { "value": "Geography", "label": "Geography"},
        { "value": "History", "label": "History" },
        { "value": "Home Science", "label": "Home Science" },
        { "value": "Maths", "label": "Maths" },
        { "value": "MicroBiology", "label": "MicroBiology" },
        { "value": "Nutrition and Dietics", "label": "Nutrition and Dietics" },
        { "value": "Physics", "label": "Physics" },       
        { "value": "Political Science", "label": "Political Science" },
        { "value": "Statistics", "label": "Statistics" },
        { "value": "Tamil", "label": "Tamil" },
        { "value": "Zoology", "label": "Zoology" }]
    }
  }
  getData() {

  }
  onSave() {
    debugger;
    if (this.questionform.valid) {
      this.answerList = [];
        debugger;
        this.answerList = this.questionform.value.multipleQuestions.map(item => { return { 
            serial_no: item.serial_no, 
            q_id: item.q_id, 
            choice_id:item.choice_id,
            choice_weight:item.choice_weight,
            duration:item.duration,
          }});
      console.log(this.answerList);
      var records =    {"records":this.answerList
      }
      this.examService.saveAnswer(records).subscribe((result) => {
        if (result.dataStatus == true) {
          debugger;
          this.messageService.add({severity:'success', summary: 'Test Completed Successfully', detail:''});
          this.testCompletion = true;
          this.form.reset();
          const multipleQuestionsFormArray = this.questionform.controls.multipleQuestions as FormArray;
          while (multipleQuestionsFormArray.length !== 0) {
            multipleQuestionsFormArray.removeAt(0);
          }
          this.isShowQuestions = false;
        }
         else {
          this.messageService.add({severity:'warn', summary: 'Error in Test Completion please try again', detail:''});
        }
      });
      }
      else {
        this.messageService.add({severity:'warn', summary: 'Please Answer for All the Questions', detail:''});
        this.validateAllFields(this.questionform);
      }
    }
    close() {
      this.testCompletion = false;
    }
    validateAllFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormArray) {
          for (const control1 of control.controls) {
            if (control1 instanceof FormControl) {
              control1.markAsTouched({
                onlySelf: true
              });
            }
            if (control1 instanceof FormGroup) {
              this.validateAllFields(control1);
            }
          }
          // control.markAsTouched();
        }
        if (control instanceof FormControl) {
          control.markAsTouched({
            onlySelf: true
          });
        } else if (control instanceof FormGroup) {
          this.validateAllFields(control);
        }
      });
    }
}
