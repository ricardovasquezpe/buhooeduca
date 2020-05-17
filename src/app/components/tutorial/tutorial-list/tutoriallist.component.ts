import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'tutoriallist',
  templateUrl: './tutoriallist.component.html',
  styleUrls: ['./tutoriallist.component.css']
})
export class TutorialListComponent implements OnInit {
  @Input() list: any;
  @Output() tutorialListEvent = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  sendItemListSelected(item) {
    this.tutorialListEvent.emit(item)
  }
}
