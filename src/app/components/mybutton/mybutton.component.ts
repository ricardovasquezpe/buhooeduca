import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mybutton',
  templateUrl: './mybutton.component.html',
  styleUrls: ['./mybutton.component.css']
})
export class MybuttonComponent implements OnInit {

  @Input() title: String;

  constructor() { }

  ngOnInit() {
  }

}
