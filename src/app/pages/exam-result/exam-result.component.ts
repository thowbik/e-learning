import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.scss']
})
export class ExamResultComponent implements OnInit {
  resultform: FormGroup;

  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private messageService: MessageService, ) { }

  ngOnInit() {
    this.initialValidator();
    this.marklist();
  }

  initialValidator() {
    debugger;
    this.resultform = this.fb.group({
      schoolnew_schoollist_details: this.fb.array([]),
    });
  }

  marklist() {
    const data = {
      "maths_marklist": [
        {
          "mathsmark": "10",
        },
        {
          "mathsmark": "9",
        },
        {
          "mathsmark": "9",
        },
        {
          "mathsmark": "9",
        },
        {
          "mathsmark": "9",
        },
        {
          "mathsmark": "9",
        },
        {
          "mathsmark": "9",
        },
        {
          "mathsmark": "9",
        },
        {
          "mathsmark": "7",
        },
        {
          "mathsmark": "7",
        }
      ]
    }
    this.getSchoolList(data.maths_marklist);
    console.log(data.maths_marklist)
  }

  getSchoolList(item) {
    const schoollist = this.resultform.controls.schoolnew_schoollist_details as FormArray;
    for (let i = 0; i < item.length; i++) {
      schoollist.push(this.fb.group({
        mathsmark: item[i].mathsmark,

      })
      )
    }
  }

}
