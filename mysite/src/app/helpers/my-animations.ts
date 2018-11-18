import {
  animate,
  animation,
  keyframes,
  query, stagger, state,
  style,
  transition,
  trigger
} from "@angular/animations";

export const routerAnimation = trigger('routerAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'scale(.8)' })
    ], { optional: true }),
    query(':leave', [
      style({ opacity: 1, transform: 'scale(1)' }),
      animate('1s ease-in-out', keyframes([
        style({ opacity: 1, transform: 'scale(1)' }),
        style({ opacity: .5, transform: 'scale(.8)' }),
        style({ opacity: 0, transform: 'scale(.8)' })
      ]))
    ], { optional: true }),
    query(':enter', [
      animate('1s 3.5s ease-in-out', keyframes([
        style({ opacity: 0, transform: 'scale(.8)' }),
        style({ opacity: .5, transform: 'scale(.8)' }),
        style({ opacity: 1, transform: 'scale(1)' })
      ]))
    ], { optional: true })
  ])
]);

export const bubbleAnimation = trigger('bubbleAnimation', [
  transition('* => run, void => run', [
    query('.bubble-letter', style({ transform: 'scale(.5)', opacity: 0 })),
    query('.bubble-letter', stagger('.05s', [
      animate('.6s ease-in-out', keyframes([
        style({ transform: 'scale(.5)', opacity: .3 }),
        style({ transform: 'scale(1.3)', opacity: .8 }),
        style({ transform: 'scale(.8)', opacity: 1 }),
        style({ transform: 'scale(1)', opacity: 1 }),
      ]))
    ]))
  ])
]);

export const drawAnimation = trigger('drawAnimation', [
  transition('* => run, void => run', [
    query('svg', style({ 'stroke-dashoffset': 1500, opacity: 0 })),
    query('svg', stagger('.2s', [
      animate('4.5s ease-in-out', keyframes([
        style([{ 'stroke-dashoffset': 1500, opacity: .4 }]),
        style({ 'stroke-dashoffset': 1300, opacity: .75 }),
        style({ 'stroke-dashoffset': 1000, opacity: 1 }),
        style({ 'stroke-dashoffset': 500, opacity: .75 }),
        style([{ 'stroke-dashoffset': 0, opacity: 0 }]),
      ]))
    ]))
  ])
]);

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    query('.color-letter', style({ opacity: 0 })),
    query('.color-letter', stagger('.2s', [
      animate('.65s linear', style({ opacity: 1 }))
    ]))
  ])
]);

