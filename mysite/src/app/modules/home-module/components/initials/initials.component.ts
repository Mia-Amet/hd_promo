import { OnInit, Component } from '@angular/core';
import { TweenMax, TimelineMax, TimelineLite, TweenLite } from 'gsap';
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [
    trigger('initialsAnimationFull', [
      state('completed', style({ 'stroke-dashoffset': '0' })),
      state('vanish', style({ 'opacity': 0 })),
      transition('* => completed', [
        style({'opacity': 1 }),
        animate('2.5s ease-in-out',
          style({ 'stroke-dashoffset': '0', opacity: .75 }))
      ]),
      transition('completed => *', [
        query('*', stagger(200, [
          animate('1s ease', style({ opacity: 0 }))
        ]))
      ])
    ]),
    trigger('fadeIn', [
      transition('* => *', [
        query(':self', stagger(-200, [
          style({ opacity: 0 }),
          animate('1.5s ease', style({ opacity: 1 }))
        ]))
      ])
    ])
  ]
})
export class IntroComponent implements OnInit {
  animationStateExp: string = 'none';
  transitionTrigger: boolean = false;
  private transitionObserver: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public transitionListener = this.transitionObserver.asObservable();

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.animationStateExp = 'completed', 1000);
    setTimeout(() => {
      this.animationStateExp = 'vanish';
      this.emitTransition(true);
    }, 3500);

    this.transitionListener.subscribe((res: boolean) => this.transitionTrigger = res);
  }

  emitTransition(value: boolean): void {
    this.transitionObserver.next(value);
  }
}
