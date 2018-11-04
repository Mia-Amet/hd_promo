import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  animations: [
    trigger('progressLoadAnimation', [
      transition(':enter', [
        style({'flex-basis': '0%'}),
        animate('2s ease-in-out',
          style({'flex-basis': '100%'}))
      ])
    ])
  ]
})
export class ProgressComponent implements OnInit {
  isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 200);
  }
}
