import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myinput',
  templateUrl: './myinput.component.html',
  styleUrls: ['./myinput.component.css']
})
export class MyinputComponent implements OnInit {

  @Input() placeholder: String;
  @Input() type: String;

  constructor() { }

  ngOnInit() {
  }

}
