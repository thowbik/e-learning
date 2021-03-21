import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollService } from 'src/services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  scrollTarget: HTMLElement;
  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollToFooter();
  }
  scrollToFooter() {
    this.scrollService.change.subscribe(data => {
      var x = document.getElementById('contact');
x.scrollIntoView();
  });
  }

}
