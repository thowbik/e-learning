import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StudentDetailsService } from './student-details.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { AlertService } from 'src/services/alert.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
  providers: [MessageService]
})
export class StudentDetailsComponent implements OnInit {
  form: FormGroup;
  studentform: FormGroup;
  addtionalform: FormGroup;
  submitted: boolean;
  submitted1: boolean;
  submitted2: boolean;
  hideVal = 0;
  hideVal1 = 0;
  studentData: any;
  name: any;
  school_name: any;
  subject_name: any;
  center_name: any;

  constructor(private fb: FormBuilder, private studentdetailsService: StudentDetailsService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.initialValidator();
  }
  initialValidator() {
    this.form = this.fb.group({
      register_id: new FormControl('', Validators.required),
    });
    this.studentform = this.fb.group({
      name: new FormControl('', null),
      school_name: new FormControl('', null),
      subject_name: new FormControl('', null),
      center_name: new FormControl('', null)
    });
    this.addtionalform = this.fb.group({
      address: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      landmark: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      mobile1: new FormControl('', Validators.required),
      mobile2: new FormControl('', null),
      mobile3: new FormControl('', null),
      exam_yn: new FormControl('', Validators.required),
      transport_yn: new FormControl('', null)

    });
  }
  onSubmit(e) {
    debugger;
    this.submitted = true;
    if (this.form.valid) {
      this.hideVal = 1;
      var records = {
        "records":
        {
          "reg_no": this.form.value.register_id
        }
      }
      this.studentdetailsService.getStudentDetails(records).subscribe(res => {
        this.studentData = res.result[0];
        this.name=this.studentData.name;
        this.school_name=this.studentData.school_name;
        this.subject_name=this.studentData.subject_name;
        this.center_name=this.studentData.center_name;
        this.studentform.patchValue(this.studentData);
        console.log(this.studentData);
      });
    }
  }


  neetexam(value) {
    debugger;
    if (value == 1) {
      this.addtionalform.controls['transport_yn'].setValidators(Validators.required);
    }
    else {
      this.addtionalform.controls['transport_yn'].setValue("");
      this.addtionalform.controls['transport_yn'].setValidators(null);
    }
    this.addtionalform.controls['transport_yn'].updateValueAndValidity();
  }
  onConfirm() {
    this.submitted1 = true;
    this.hideVal1 = 1;
   // if (this.studentform.valid) {
      //   this.confirmationService.confirm({
      //     message: 'Do you want to take NEET exam?',
      //     header: 'Confirmation',
      //     icon: 'pi pi-exclamation-triangle',
      //     accept: () => {
      //       debugger;
      //       this.transport();
      //     }
      // });

  //  }
  }

  // transport() {
  //   this.confirmationService.confirm({
  //     message: 'Do you want transport?',
  //     header: 'Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //     this.hideVal1=1;
  //     },key: "positionDialog"
  // });
  // }
  onFinalSubmit() {
    debugger;
    this.submitted2 = true;
    if (this.addtionalform.valid) {
      var data = {
        "records":
        {
          "reg_no": this.form.value.register_id,
          "mobile1": this.addtionalform.value.mobile1,
          "mobile2": this.addtionalform.value.mobile2,
          "mobile3": this.addtionalform.value.mobile3,
          "address": this.addtionalform.value.address,
          "pincode": this.addtionalform.value.pincode,
          "landmark": this.addtionalform.value.landmark,
          "district": this.addtionalform.value.district,
          "exam_yn": this.addtionalform.value.exam_yn,
          "transport_yn": this.addtionalform.value.transport_yn
        }
      }
      this.studentdetailsService.saveStudentAdditionalDetails(data).subscribe(res => {
        console.log(res);
        if(res.dataStatus == true) {
          this.alertService.success(res.message);
        }
      });

    }
  }
}
