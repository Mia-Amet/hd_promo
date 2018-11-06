import { OnInit, Component } from '@angular/core';
import { drawLinesAnimation, fadeInOutAnimation } from "../../helpers/my-animations";
import { animateChild, query, stagger, transition, trigger, useAnimation } from "@angular/animations";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-initials',
  templateUrl: './initials.component.html',
  styleUrls: ['./initials.component.css'],
  animations: [
    trigger('drawLines', [
      transition('draw-start => draw-end', [
        query('@fadeOut', [
          stagger(100, [
            useAnimation(drawLinesAnimation, {
              params: {
                offsetFrom: 1000,
                time: '2.5s ease-in'
              }
            })
          ])
        ])
      ]),
      transition('draw-end => *', [
        query('@fadeOut, @fadeIn', [
          animateChild()
        ])
      ])
    ]),
    trigger('fadeOut', [
      transition('* => start', [
        query(':self', [
          stagger(100, [
            useAnimation(fadeInOutAnimation, {
              params: {
                opacityStart: 1,
                time: '2s ease-in',
                opacityEnd: 0
              }
            })
          ])
        ])
      ])
    ]),
    trigger('fadeIn', [
      transition('* => start', [
        query(':self', [
          stagger(-100, [
            useAnimation(fadeInOutAnimation, {
              params: {
                opacityStart: 0,
                time: '2s ease-in',
                opacityEnd: 1
              }
            })
          ])
        ])
      ])
    ])
  ]
})
export class InitialsComponent implements OnInit {
  animationStateExp: string = 'draw-start';
  isFading: boolean = false;
  fadeComplete: boolean = false;
  private animationStateEvent: BehaviorSubject<string> = new BehaviorSubject('draw-start');
  public animationStateObserver = this.animationStateEvent.asObservable();

  constructor() { }

  ngOnInit() {
    this.animationStateObserver.subscribe((res: string) => {
      if (res) this.animationStateExp = res;
    });
    setTimeout(() => {
      this.emitState('draw-end');
    }, 1000);
    setTimeout(() => {
      this.emitState('complete');
      this.isFading = true;
    }, 3700);
  }

  emitState(value: string): void {
    this.animationStateEvent.next(value);
  }
}
