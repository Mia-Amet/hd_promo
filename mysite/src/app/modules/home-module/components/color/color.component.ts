import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from "../../../../helpers/my-animations";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class ColorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
