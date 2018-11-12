import { animate, animation, query, stagger, style, transition, trigger } from "@angular/animations";

export const fadeInOutAnimation = animation([
  style({ opacity: '{{ opacityStart }}' }),
  animate('{{ time }}',
    style({ opacity: '{{ opacityEnd }}' }))
]);

export const drawLinesAnimation = animation([
  style({ 'stroke-dashoffset': '{{ offsetFrom }}' }),
  animate('{{ time }}',
    style({ 'stroke-dashoffset': 0 }))
]);
