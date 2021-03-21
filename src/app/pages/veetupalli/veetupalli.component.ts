import { Component, OnInit } from '@angular/core';
import { VeetupalliService } from './veetupalli.service';
import { TreeNode } from 'primeng/api';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-veetupalli',
    templateUrl: './veetupalli.component.html',
    styleUrls: ['./veetupalli.component.scss'],
})
export class VeetupalliComponent implements OnInit {

    tree: TreeNode[];
    selectedFiles: TreeNode[];
    nodes: any;
    fileUrl;
    selectedColumns1: any[] = [];
    dataHeader1: any[] = [];
    Url: any;
    videoLabel: any;
    isVideo: boolean = false;
    subjectList: any;
    image: any;
    subjects: any[];
    data: any;
    videoUrl: any;
    appendedHtml: string;
    thumbnail: any;
    totalSub: any;
    constructor(private veetupalliService: VeetupalliService,
        private http: HttpClient,
        private messageService: MessageService,
        private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.veetupalliService.getDownloadData().subscribe((res) => {
            if (res) {
                this.subjectList = res.result;
            }
        });
        this.getColumn();
        this.getSubjectData();

    }

    onSubjectData(e) {
        debugger
        console.log(e);
        this.data = this.subjectList.filter(item => item.Sub == e);
        console.log(this.data.length)
        this.totalSub = this.data.length
        // this.veetupalliService.getDownloadData().subscribe((res) => {
        //     if (res) {
        //         this.subjectList = res.result;
        //         this.data = this.subjectList.filter(item => item.Sub == e);
        //     }
        //     });
    }

    getColumn() {
        this.dataHeader1 = [
            { field: 'Unit', header: 'Unit' },
            { field: 'Episode', header: 'Episode' },
            { field: 'Page', header: 'Page' },
            { field: 'Label', header: 'File Name' },
            { field: '', header: 'Actions' },
        ];
        this.selectedColumns1 = this.dataHeader1;
    }
    getSubjectData() {
        this.subjects = [
            { Sub: "Accountancy" },
            { Sub: "Advanced Tamil" },
            { Sub: "Agricultural Science" },
            { Sub: "Basic Automobile Engineering" },
            { Sub: "Basic Civil Engineering" },
            { Sub: "Basic Electronics and Communication Engineering" },
            { Sub: "Basic Electrical Engineering" },
            { Sub: "Basic Mechanical Engineering" },
            { Sub: "Bio Botany" },
            { Sub: "Bio Chemistry" },
            { Sub: "Botany" },
            { Sub: "Bio Zoology" },
            { Sub: "Business Mathematics" },
            { Sub: "Computer Applications" },
            { Sub: "Chemistry" },
            { Sub: "Communicative English" },
            { Sub: "Commerce" },
            { Sub: "Computer Science" },
            { Sub: "Computer Technology" },
            { Sub: "Economics" },
            { Sub: "Ethics and Indian Culture" },
            { Sub: "English" },
            { Sub: "Food Safety & Management" },
            { Sub: "Geography" },
            { Sub: "History" },
            { Sub: "Home Science" },
            { Sub: "Mathematics" },
            { Sub: "Microbiology" },
            { Sub: "Nutrition and Dietics" },
            { Sub: "Nursing (General)" },
            { Sub: "Nursing(Vocational)" },
            { Sub: "Office Management & Secretaryship" },
            { Sub: "Physics" },
            { Sub: "Political Science" },
            { Sub: "Statistics" },
            { Sub: "Tamil" },
            { Sub: "Textile & Dress Design" },
            { Sub: "Textile Technology" },
            { Sub: "Zoology" }
        ];
    }




    // isVideoLink(data) {
    //     let params = "bcktId=lmes-content&filename=" + data.ContntNam + "&ext=mp4&expiry=3600";
    //     this.veetupalliService.getVideoUrl(params).subscribe((result) => { if (result['url']) { this.isVideo = true; this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(result['url']); } });
    //     this.videoLabel = data.Label;
    // }

    onDownload() {

    }

    playVideo(filename) {
        debugger;
        this.isVideo = true;
        // this.videoLabel = data.Label;
        var bucketName = "lmes-content";
        var filename = filename;
        let expiry: number = 1800;
        this.veetupalliService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => {
            if (result) {
                debugger;
                this.videoUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(result.url);
            }
            else {
                this.messageService.add({ severity: 'warn', summary: 'Error in Uploading File please try again', detail: '' });
            }
        });
    }
    downloadVideo(filename) {
        debugger;
        var bucketName = "lmes-content";
        var filename = filename;
        let expiry: number = 1800;
        this.veetupalliService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => {
            if (result) {
                debugger;
                this.veetupalliService.download(result.url)
                .subscribe(blob => {
                  debugger;
                  const a = document.createElement('a')
                  const objectUrl = URL.createObjectURL(blob)
                  a.href = objectUrl
                  a.download = filename+'.mp4';
                  a.click();
                  URL.revokeObjectURL(objectUrl);
                })
            }
            else {
                this.messageService.add({ severity: 'warn', summary: 'Error in Uploading File please try again', detail: '' });
            }
        });
    }

    close() {
        this.isVideo = false;
    }

}
