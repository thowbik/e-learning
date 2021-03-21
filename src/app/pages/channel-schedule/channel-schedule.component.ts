import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-schedule',
  templateUrl: './channel-schedule.component.html',
  styleUrls: ['./channel-schedule.component.scss']
})
export class ChannelScheduleComponent implements OnInit {
  public schedule: any[] = [];
  public augSchedule: any[] = [];
  isJulyMonth: boolean = true;
  constructor() { }
  cols: Array<{ 'field': string, 'header': string, 'widthstyle': string }> =
    [{ field: 'day_time', header: 'DAY/ TIME', widthstyle: '8em' }, { field: 'mon', header: 'MONDAY', widthstyle: '8em' }, { field: 'tue', header: 'TUESDAY', widthstyle: '8em' }, { field: 'wed', header: 'WEDNESDAY', widthstyle: '8em' }, { field: 'thurs', header: 'THURSDAY', widthstyle: '8em' }, { field: 'fri', header: 'FRIDAY', widthstyle: '8em' }, { field: 'sat', header: 'SATURDAY', widthstyle: '8em' }, { field: 'sun', header: 'SUNDAY', widthstyle: '8em' }];
  ngOnInit() {
    this.schedule = [{
      "day_time":"6:00 – 7.00 AM",
      "mon":"NEET / JEE - PHYSICS",
      "tue":"NEET / JEE – CHEMISTRY",
      "wed":"NEET / JEE – BOTANY",
      "thurs":"NEET / JEE – ZOOLOGY",
      "fri":"NEET / JEE – MATHS",
      "sat":"NEET / JEE – PHYSICS",
      "sun":"NEET / JEE - CHEMISTRY"
   },
   {
      "day_time":"7:00 – 8.00 AM",
      "mon":"NEET / JEE – BOTANY",
      "tue":"NEET / JEE – ZOOLOGY",
      "wed":"NEET / JEE – PHYSICS",
      "thurs":"NEET / JEE – MATHS",
      "fri":"NEET / JEE – BOTANY",
      "sat":"NEET / JEE – ZOOLOGY",
      "sun":"NEET / JEE - BOTANY"
   },
   {
      "day_time":"8:00 – 8.30 AM",
      "mon":"X - TAMIL",
      "tue":"X - TAMIL",
      "wed":"X - TAMIL",
      "thurs":"X - TAMIL",
      "fri":"X - TAMIL",
      "sat":"NEET / JEE – MATHS",
      "sun":"NEET / JEE - MATHS"
   },
   {
      "day_time":"8:30- 9.00 AM",
      "mon":"X - ENGLISH",
      "tue":"X - ENGLISH",
      "wed":"X - ENGLISH",
      "thurs":"X - ENGLISH",
      "fri":"X - ENGLISH",
      "sat":"NEET / JEE – MATHS",
      "sun":"NEET / JEE - MATHS"
   },
   {
      "day_time":"9:00 – 9.30 AM",
      "mon":"IX - TAMIL",
      "tue":"IX - TAMIL",
      "wed":"IX - TAMIL",
      "thurs":"IX - TAMIL",
      "fri":"IX - TAMIL",
      "sat":"NEET / JEE – BOTANY",
      "sun":"NEET / JEE - ZOOLOGY"
   },
   {
      "day_time":"9:30 – 10.00 AM",
      "mon":"IX - ENGLISH",
      "tue":"IX - ENGLISH",
      "wed":"IX - ENGLISH",
      "thurs":"IX - ENGLISH",
      "fri":"IX - ENGLISH",
      "sat":"NEET / JEE – BOTANY",
      "sun":"NEET / JEE - ZOOLOGY"
   },
   {
      "day_time":"10.00 – 10.30 AM",
      "mon":"X - MATHS",
      "tue":"X - MATHS",
      "wed":"X - MATHS",
      "thurs":"X - MATHS",
      "fri":"X - MATHS",
      "sat":"NEET / JEE – CHEMISTRY",
      "sun":"NEET / JEE – PHYSICS"
   },
   {
      "day_time":"10:30 – 11.00 AM",
      "mon":"X - SCIENCE",
      "tue":"X - SCIENCE",
      "wed":"X - SCIENCE",
      "thurs":"X - SCIENCE",
      "fri":"X - SCIENCE",
      "sat":"NEET / JEE – CHEMISTRY",
      "sun":"NEET / JEE – PHYSICS"
   },
   {
      "day_time":"11:00 – 11.30 AM",
      "mon":"IX –MATHS",
      "tue":"IX –MATHS",
      "wed":"IX –MATHS",
      "thurs":"IX –MATHS",
      "fri":"IX –MATHS",
      "sat":"NEET / JEE – ZOOLOGY",
      "sun":"NEET / JEE - CHEMISTRY"
   },
   {
      "day_time":"11.30 – 12.00 PM",
      "mon":"IX – SCIENCE",
      "tue":"IX – SCIENCE",
      "wed":"IX – SCIENCE",
      "thurs":"IX – SCIENCE",
      "fri":"IX – SCIENCE",
      "sat":"NEET / JEE – ZOOLOGY",
      "sun":"NEET / JEE - CHEMISTRY"
   },
   {
      "day_time":"12:00 – 12.30 PM",
      "mon":"X – SOCIAL SCIENCE",
      "tue":"X – SOCIAL SCIENCE",
      "wed":"X – SOCIAL SCIENCE",
      "thurs":"X – SOCIAL SCIENCE",
      "fri":"X – SOCIAL SCIENCE",
      "sat":"NEET / JEE – PHYSICS (R)",
      "sun":"NEET / JEE – CHEMISTRY (R)"
   },
   {
      "day_time":"1.00 – 1.30 PM",
      "mon":"INTERVAL",
      "tue":"",
      "wed":"",
      "thurs":"",
      "fri":"",
      "sat":"NEET / JEE – ZOOLOGY (R)",
      "sun":"NEET / JEE – BOTANY (R)"
   },
   {
      "day_time":"1.30 – 2.00 PM",
      "mon":"VIII - TAMIL",
      "tue":"VIII - TAMIL",
      "wed":"VIII - TAMIL",
      "thurs":"VIII - TAMIL",
      "fri":"VIII - TAMIL",
      "sat":"NEET / JEE – ZOOLOGY (R)",
      "sun":"NEET / JEE – BOTANY (R)"
   },
   {
      "day_time":"2.00 – 2.30 PM",
      "mon":"VIII - ENGLISH",
      "tue":"VIII - ENGLISH",
      "wed":"VIII - ENGLISH",
      "thurs":"VIII - ENGLISH",
      "fri":"VIII - ENGLISH",
      "sat":"NEET / JEE – MATHS (R)",
      "sun":"NEET / JEE – MATHS (R)"
   },
   {
      "day_time":"2.30 – 3.00 PM",
      "mon":"VII - TAMIL",
      "tue":"VII - ENGLISH",
      "wed":"VII - MATHS",
      "thurs":"VII - SCIENCE",
      "fri":"VII – SOCIAL SCIENCE",
      "sat":"NEET / JEE – MATHS (R)",
      "sun":"NEET / JEE – MATHS (R)"
   },
   {
      "day_time":"3.00 – 3.30 PM",
      "mon":"VIII - MATHS",
      "tue":"VIII - MATHS",
      "wed":"VIII - MATHS",
      "thurs":"VIII - MATHS",
      "fri":"VIII - MATHS",
      "sat":"NEET / JEE – BOTANY (R)",
      "sun":"NEET / JEE ZOOLOGY (R)"
   },
   {
      "day_time":"3.30 – 4.00 PM",
      "mon":"VIII - SCIENCE",
      "tue":"VIII - SCIENCE",
      "wed":"VIII - SCIENCE",
      "thurs":"VIII - SCIENCE",
      "fri":"VIII - SCIENCE",
      "sat":"NEET / JEE – BOTANY (R)",
      "sun":"NEET / JEE ZOOLOGY (R)"
   },
   {
      "day_time":"4.00 – 4.30 PM",
      "mon":"VI – TAMIL",
      "tue":"VI – ENGLISH",
      "wed":"VI – MATHS",
      "thurs":"VI – SCIENCE",
      "fri":"VI – SOCIAL SCIENCE",
      "sat":"NEET / JEE – CHEMISTRY (R)",
      "sun":"NEET / JEE – PHYSICS (R)"
   },
   {
      "day_time":"4.30 – 5.00 PM",
      "mon":"VIII – SOCIAL SCIENCE",
      "tue":"VIII – SOCIAL SCIENCE",
      "wed":"VIII – SOCIAL SCIENCE",
      "thurs":"VIII – SOCIAL SCIENCE",
      "fri":"VIII – SOCIAL SCIENCE",
      "sat":"NEET / JEE – CHEMISTRY (R)",
      "sun":"NEET / JEE – PHYSICS (R)"
   },
   {
      "day_time":"5.00 – 5.30 PM",
      "mon":"II – TAMIL",
      "tue":"II – ENGLISH",
      "wed":"II – MATHS",
      "thurs":"II – EVS",
      "fri":"PESUM OVIYAM",
      "sat":"NEET / JEE – ZOOLOGY (R)",
      "sun":"NEET / JEE – CHEMISTRY (R)"
   },
   {
      "day_time":"5.30 – 6.00 PM",
      "mon":"III – TAMIL",
      "tue":"III – ENGLISH",
      "wed":"III – MATHS",
      "thurs":"III – SCIENCE",
      "fri":"III – SOCIALSCIENCE",
      "sat":"NEET / JEE – ZOOLOGY (R)",
      "sun":"NEET / JEE – CHEMISTRY (R)"
   },
   {
      "day_time":"6.00 – 6.30 PM",
      "mon":"IV – TAMIL",
      "tue":"IV – ENGLISH",
      "wed":"IV – MATHS",
      "thurs":"IV – SCIENCE",
      "fri":"IV – SOCIAL SCIENCE",
      "sat":"NEET / JEE – PHYSICS",
      "sun":"NEET / JEE - ZOOLOGY"
   },
   {
      "day_time":"6.30 – 7.00 PM",
      "mon":"V – TAMIL",
      "tue":"V – ENGLISH",
      "wed":"V – MATHS",
      "thurs":"V – SCIENCE",
      "fri":"V – SOCIAL SCIENCE",
      "sat":"NEET / JEE – BOTANY",
      "sun":"NEET / JEE - MATHS"
   },
   {
      "day_time":"7.00 – 8.00 PM",
      "mon":"NEET / JEE – MATHS",
      "tue":"NEET / JEE – BOTANY",
      "wed":"NEET / JEE – CHEMISTRY",
      "thurs":"NEET / JEE – PHYSICS",
      "fri":"NEET / JEE – CHEMISTRY",
      "sat":"NEET / JEE – CHEMISTRY",
      "sun":"NEET / JEE – PHYSICS"
   },
   {
      "day_time":"8.00 – 9.00 PM",
      "mon":"NEET / JEE – CHEMISTRY",
      "tue":"NEET / JEE – MATHS",
      "wed":"NEET / JEE – ZOOLOGY",
      "thurs":"NEET / JEE – BOTANY",
      "fri":"NEET / JEE – ZOOLOGY",
      "sat":"NEET / JEE - ZOOLOGY",
      "sun":"NEET / JEE - BOTANY"
   },
   {
      "day_time":"9.00 – 10.00 PM",
      "mon":"NEET / JEE -ZOOLOGY",
      "tue":"NEET / JEE - PHYSICS",
      "wed":"NEET / JEE - MATHS",
      "thurs":"NEET / JEE - CHEMISTRY",
      "fri":"NEET / JEE - PHYSICS",
      "sat":"NEET / JEE - MATHS",
      "sun":"NEET / JEE – CHEMISTRY"
   },
   {
      "day_time":"10.00 – 11.00 PM",
      "mon":"NEET / JEE - PHYSICS",
      "tue":"NEET / JEE - ZOOLOGY",
      "wed":"NEET / JEE - BOTANY",
      "thurs":"NEET / JEE - ZOOLOGY",
      "fri":"NEET / JEE - BOTANY",
      "sat":"NEET / JEE – BIO BOTANY",
      "sun":"NEET / JEE – BIO ZOOLOGY"
   }
    ]
    this.augSchedule = [
      {
            "day_time":"5:30 – 6.00 AM",
            "mon":"XI – COMPUTER.SCI",
            "tue":"XI – HOME.SCI",
            "wed":"XI – BASIC ELECTRICAL ENGINEERING",
            "thurs":"XI – COMPUTER.SCI",
            "fri":"XI – HOME.SCI",
            "sat":"XI – BASIC ELECTRICAL",
            "sun":"XI - FOOD SERVICE MANAGEMENT"
         },
      {
            "day_time":"6:00 – 6.30 AM",
            "mon":"XI – CHEMISTRY",
            "tue":"XI – NUTRITION & DIETETICS",
            "wed":"XI – BASIC ELECTRONICS ENGINEERING",
            "thurs":"XI – CHEMISTRY",
            "fri":"XI – NUTRITION & DIETETICS",
            "sat":"XI – BASIC ELECTRONICS",
            "sun":""
         },
      {
            "day_time":"6:30 – 7.00 AM",
            "mon":"XI – PHYSICS",
            "tue":"XI – GENERAL NURSING",
            "wed":"XI – BASIC AUTO MOBILE ENGINEERING",
            "thurs":"XI – PHYSICS",
            "fri":"XI – GENERAL NURSING",
            "sat":"XI – BASIC AUTO MOBILE ENGINEERING",
            "sun":"XI – TAMIL"
         },
      {
            "day_time":"7:00 – 7.30 AM",
            "mon":"XI – MATHS",
            "tue":"XI – BIO CHEMISTRY ",
            "wed":"XI – BASIC MECHANICAL ENGINEERING",
            "thurs":"XI – MATHS",
            "fri":"XI – BIO CHEMISTRY",
            "sat":"XI – BASIC MECHANICAL ENGINEERING",
            "sun":"XI – TAMIL"
         },
      {
            "day_time":"7:30 – 8.00 AM",
            "mon":"XI – STATISTICS",
            "tue":"XI – MICRO BIOLOGY",
            "wed":"XI – BASIC CIVIL ENGINEERING",
            "thurs":"XI – STATISTICS",
            "fri":"XI – MICRO BIOLOGY",
            "sat":""
         },
      {
            "day_time":"8:00 – 8.30 AM",
            "mon":"X - TAMIL",
            "tue":"X - TAMIL",
            "wed":"X - TAMIL",
            "thurs":"X - TAMIL",
            "fri":"X - TAMIL",
            "sat":"X – Q & A TAMIL ENGLISH MATHS SCIENCE SOCIAL SCIENCE",
            "sun":"XI – TAMIL"
         },
      {
            "day_time":"8:30 – 9.00 AM",
            "mon":"X - ENGLISH",
            "tue":"X - ENGLISH",
            "wed":"X - ENGLISH",
            "thurs":"X - ENGLISH",
            "fri":"X - ENGLISH",
            "sat":"X – Q & A TAMIL ENGLISH MATHS SCIENCE SOCIAL SCIENCE",
            "sun":"XI - ADVANCED TAMIL"
         },
      {
            "day_time":"9:00- 9.30 AM",
            "mon":"IX - TAMIL",
            "tue":"IX - TAMIL",
            "wed":"IX - TAMIL",
            "thurs":"IX - TAMIL",
            "fri":"IX - TAMIL",
            "sat":"X – Q & A TAMIL ENGLISH MATHS SCIENCE SOCIAL SCIENCE",
            "sun":"CO CURRICULAR"
         },
      {
            "day_time":"9:30- 10.00 AM",
            "mon":"IX - ENGLISH",
            "tue":"IX - ENGLISH",
            "wed":"IX - ENGLISH",
            "thurs":"IX - ENGLISH",
            "fri":"IX - ENGLISH",
            "sat":"XII – Q & A COMPUTER SCIENCE CHEMISTRY PHYSICS MATHS STATISTICS",
            "sun":"EXTRA CURRICULAR"
         },
      {
            "day_time":"10:00 – 10.30 AM",
            "mon":"X - MATHS",
            "tue":"X - MATHS",
            "wed":"X - MATHS",
            "thurs":"X - MATHS",
            "fri":"X - MATHS",
            "sat":"XII – Q & A COMPUTER SCIENCE CHEMISTRY PHYSICS MATHS STATISTICS",
            "sun":"CO CURRICULAR"
         },
      {
            "day_time":"10:30 – 11.00 AM",
            "mon":"X - SCIENCE",
            "tue":"X - SCIENCE",
            "wed":"X - SCIENCE",
            "thurs":"X - SCIENCE",
            "fri":"X - SCIENCE",
            "sat":"XII – Q & A COMPUTER SCIENCE CHEMISTRY PHYSICS MATHS STATISTICS",
            "sun":"EXTRA CURRICULAR"
         },
      {
            "day_time":"11:00 – 11.30 AM",
            "mon":"IX –MATHS",
            "tue":"IX –MATHS",
            "wed":"IX –MATHS",
            "thurs":"IX –MATHS",
            "fri":"IX –MATHS",
            "sat":"XII – Q & A COMPUTER SCIENCE CHEMISTRY PHYSICS MATHS STATISTICS",
            "sun":"CO CURRICULAR"
         },
      {
            "day_time":"11:30 – 12.00 PM",
            "mon":"IX – SCIENCE",
            "tue":"IX – SCIENCE",
            "wed":"IX – SCIENCE",
            "thurs":"IX – SCIENCE",
            "fri":"IX – SCIENCE",
            "sat":"XII – Q & A BM & STATISTICS ECONOMICS COMMERCE ACCOUNTANCY AUDITING OFFICE MANG. & SECRETARYSHIP",
            "sun":"EXTRA CURRICULAR"
         },
      {
            "day_time":"12.00 – 12.30 PM",
            "mon":"X – SOCIAL SCIENCE",
            "tue":"X – SOCIAL SCIENCE",
            "wed":"X – SOCIAL SCIENCE",
            "thurs":"X – SOCIAL SCIENCE",
            "fri":"X – SOCIAL SCIENCE",
            "sat":"XII – Q & A BM & STATISTICS ECONOMICS COMMERCE ACCOUNTANCY AUDITING OFFICE MANG. & SECRETARYSHIP",
            "sun":"CO CURRICULAR"
         },
      {
            "day_time":"12:30 – 1.00 PM",
            "mon":"IX – SOCIAL SCIENCE",
            "tue":"IX – SOCIAL SCIENCE",
            "wed":"IX – SOCIAL SCIENCE",
            "thurs":"IX – SOCIAL SCIENCE",
            "fri":"IX – SOCIAL SCIENCE",
            "sat":"XII – Q & A BM & STATISTICS ECONOMICS COMMERCE ACCOUNTANCY AUDITING OFFICE MANG. & SECRETARYSHIP",
            "sun":"EXTRA CURRICULAR"
         },
      {
            "day_time":"1:00 – 1.30 PM",
            "mon":"INTERVAL",
            "tue":"INTERVAL",
            "wed":"INTERVAL",
            "thurs":"INTERVAL",
            "fri":"INTERVAL",
            "sat":"XII – Q & A BM & STATISTICS ECONOMICS COMMERCE ACCOUNTANCY AUDITING OFFICE MANG. & SECRETARYSHIP",
            "sun":"CO CURRICULAR"
         },
         {
          "day_time":"1:30 – 2.00 PM",
          "mon":"VIII - TAMIL",
          "tue":"VIII - TAMIL",
          "wed":"VIII - TAMIL",
          "thurs":"VIII - TAMIL",
          "fri":"VIII - TAMIL",
          "sat":"XII – Q & A HISTORY GEOGRAPHY POLITICAL SCIENCE ETHICS & INDIAN CULTURE",
          "sun":"EXTRA CURRICULAR"
       },
       {
          "day_time":"2.00 – 2.30 PM",
          "mon":"VIII - ENGLISH",
          "tue":"VIII - ENGLISH",
          "wed":"VIII - ENGLISH",
          "thurs":"VIII - ENGLISH",
          "fri":"VIII - ENGLISH",
          "sat":"XII – Q & A HISTORY GEOGRAPHY POLITICAL SCIENCE ETHICS & INDIAN CULTURE",
          "sun":"CO CURRICULAR"
       },
       {
          "day_time":"2.30 – 3.00 PM",
          "mon":"VII – TAMIL",
          "tue":"VII - ENGLISH",
          "wed":"VII – MATHS",
          "thurs":"VII - SCIENCE",
          "fri":"VII – SOCIAL SCIENCE",
          "sat":"XII – Q & A HISTORY GEOGRAPHY POLITICAL SCIENCE ETHICS & INDIAN CULTURE",
          "sun":"EXTRA CURRICULAR"
       },
       {
          "day_time":"3:30 – 4.00 PM",
          "mon":"VIII - MATHS",
          "tue":"VIII - MATHS",
          "wed":"VIII - MATHS",
          "thurs":"VIII - MATHS",
          "fri":"VIII - MATHS",
          "sat":"XII – Q & A HISTORY GEOGRAPHY POLITICAL SCIENCE ETHICS & INDIAN CULTURE",
          "sun":"CO CURRICULAR"
       },
       {
          "day_time":"4:00 – 4.30 PM",
          "mon":"VIII - SCIENCE",
          "tue":"VIII - SCIENCE",
          "wed":"VIII - SCIENCE",
          "thurs":"VIII - SCIENCE",
          "fri":"VIII - SCIENCE",
          "sat":"X II– Q & A HOME SCIENCE NUTRITION & DIETETICS GENERAL NURSING BIO CHEMISTRY MICRO BIOLOGY BIOLOGY BOTANY ZOOLOGY",
          "sun":"EXTRA CURRICULAR"
       },
       {
          "day_time":"4:30 – 5.00 PM",
          "mon":"VI – TAMIL",
          "tue":"VI – ENGLISH",
          "wed":"VI – MATHS",
          "thurs":"VI – SCIENCE",
          "fri":"VI – SOCIAL SCIENCE",
          "sat":"X II– Q & A HOME SCIENCE NUTRITION & DIETETICS GENERAL NURSING BIO CHEMISTRY MICRO BIOLOGY BIOLOGY BOTANY ZOOLOGY",
          "sun":"CO CURRICULAR"
       },
       {
          "day_time":"5.00 – 5.30PM",
          "mon":"VIII – SOCIAL SCIENCE",
          "tue":"VIII – SOCIAL SCIENCE",
          "wed":"VIII – SOCIAL SCIENCE",
          "thurs":"VIII – SOCIAL SCIENCE",
          "fri":"VIII – SOCIAL SCIENCE",
          "sat":"X II– Q & A HOME SCIENCE NUTRITION & DIETETICS GENERAL NURSING BIO CHEMISTRY MICRO BIOLOGY BIOLOGY BOTANY ZOOLOGY",
          "sun":"EXTRA CURRICULAR"
       },
       {
          "day_time":"5.30 – 6.00PM",
          "mon":"II – TAMIL",
          "tue":"II – ENGLISH",
          "wed":"II – MATHS",
          "thurs":"II – EVS",
          "fri":"PESUM OVIYAM",
          "sat":"X II– Q & A HOME SCIENCE NUTRITION & DIETETICS GENERAL NURSING BIO CHEMISTRY MICRO BIOLOGY BIOLOGY BOTANY ZOOLOGY",
          "sun":"CO CURRICULAR"
       },
       {
          "day_time":"6.00 – 6.30PM",
          "mon":"III – TAMIL",
          "tue":"III – ENGLISH",
          "wed":"III – MATHS",
          "thurs":"III – SCIENCE",
          "fri":"III – SOCIAL SCIENCE",
          "sat":"XII – Q & A TAMIL ADVANCE TAMIL ENGLISH COMMUNICATIVE ENGLISH",
          "sun":"EXTRA CURRICULAR"
       },
       {
          "day_time":"6.30 – 7.00PM",
          "mon":"IV – TAMIL",
          "tue":"IV – ENGLISH",
          "wed":"IV – MATHS",
          "thurs":"IV – SCIENCE",
          "fri":"IV – SOCIAL SCIENCE",
          "sat":"XII – Q & A TAMIL ADVANCE TAMIL ENGLISH COMMUNICATIVE ENGLISH",
          "sun":"CO CURRICULAR"
       },
       {
          "day_time":"7.00 – 7.30PM",
          "mon":"V – TAMIL",
          "tue":"V – ENGLISH",
          "wed":"V – MATHS",
          "thurs":"V – SCIENCE",
          "fri":"V – SOCIAL SCIENCE",
          "sat":"XII – Q & A TAMIL ADVANCE TAMIL ENGLISH COMMUNICATIVE ENGLISH",
          "sun":"EXTRA CURRICULAR"
       },
       {
          "day_time":"7.30 – 8.00PM",
          "mon":"XI – BIO BOTANY",
          "tue":"XI - BOTANY",
          "wed":"XI – COMPUTER TECHNOLOGY",
          "thurs":"XI – BIO ZOOLOGY",
          "fri":"XI - BOTANY",
          "sat":"XI – COMPUTER TECHNOLOGY",
          "sun":"XI - ENGLISH"
       },
       {
          "day_time":"8.00 – 8.30PM",
          "mon":"XI – BM & STATISTICS",
          "tue":"XI - ZOOLOGY",
          "wed":"XI – TEXTILE & DRESS DESIGNING",
          "thurs":"XI – BM & STATISTICS",
          "fri":"XI - ZOOLOGY",
          "sat":"XI – TEXTILE & DRESS",
          "sun":"XI - ENGLISH"
       },
       {
          "day_time":"8.30 – 9.00PM",
          "mon":"XI – ECONOMICS",
          "tue":"XI - HISTORY",
          "wed":"XI – TEXTILE TECHNOLOGY",
          "thurs":"XI – ECONOMICS",
          "fri":"XI - HISTORY",
          "sat":"XI – TEXTILE TECHNOLOGY",
          "sun":"XI - ENGLISH"
       },
       {
          "day_time":"9.00 – 9.30PM",
          "mon":"XI – COMMERCE",
          "tue":"XI - GEOGRAPHY",
          "wed":"XI – AUDITING",
          "thurs":"XI – COMMERCE",
          "fri":"XI - GEOGRAPHY",
          "sat":"XI – AUDITING",
          "sun":"XI - ENGLISH"
       },
       {
          "day_time":"9.30 – 10.00PM",
          "mon":"XI – ACCOUNTANCY",
          "tue":"XI – POLITICAL SCIENCE",
          "wed":"XI – OFFICE MANAGEMENT & SECRETARY SHIP",
          "thurs":"XI – ACCOUNTANCY",
          "fri":"XI – POLITICAL SCIENCE",
          "sat":"XI – OFFICE MANAGEMENT & SECRETARY SHIP",
          "sun":"COMMUNICATIVE ENGLISH"
       },
       {
          "day_time":"10.00 – 10.30PM",
          "mon":"XI – COMPUTER APPLICATIONS",
          "tue":"XI – ETHICS AND INDIAN CULTURE",
          "wed":"XI – AGRICULTURE SCIENCE",
          "thurs":"XI – COMPUTER APPLICATIONS",
          "fri":"XI – ETHICS AND INDIAN CULTURE",
          "sat":"XI – XI – AGRICULTURE SCIENCE",
          "sun":""
       },
        ];
  }
  tabChange(event) {
debugger;
if(event.index == 0)
{
  this.isJulyMonth = true;
}
else {
  this.isJulyMonth = false;
}
  }
}
