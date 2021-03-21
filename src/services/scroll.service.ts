import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class ScrollService {

 

  @Output() change: EventEmitter<any> = new EventEmitter();
  scrollTarget: any;

  Scroll(scrollTarget) {
    this.scrollTarget = scrollTarget;
    this.change.emit(this.scrollTarget);
  }

}