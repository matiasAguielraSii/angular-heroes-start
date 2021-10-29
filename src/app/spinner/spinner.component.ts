import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})

export class SpinnerComponent implements OnInit {
  @Input()show_spinner: boolean = true;


  @Output() spinner: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


}