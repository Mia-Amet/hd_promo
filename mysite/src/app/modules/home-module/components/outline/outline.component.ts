import { Component, OnInit } from '@angular/core';
import { drawAnimation } from "../../../../helpers/my-animations";

@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.css'],
  animations: [
    drawAnimation
  ]
})
export class OutlineComponent implements OnInit {
  drawStateExp: string = '';

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.drawStateExp = 'run', 3000);
  }

}
