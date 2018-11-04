import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  animations: [
    trigger('progressLoadAnimation', [
      transition(':enter', [
        style({'flex-basis': '0%'}),
        animate('1s ease-in-out',
          style({'flex-basis': '100%'}))
      ])
    ])
  ]
})
export class ProgressComponent implements OnInit {
  isLoading: boolean = false;

  @Output() isComplete: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.isLoading = true, 200);
    setTimeout(() => this.emitComplete(true), 1800);
    setTimeout(() => this.isLoading = false, 3000);
  }

  emitComplete(state: boolean): void {
    this.isComplete.emit(state);
  }
}
