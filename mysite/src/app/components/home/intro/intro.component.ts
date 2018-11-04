import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TweenMax, TimelineMax, TimelineLite, TweenLite } from 'gsap';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit,AfterViewInit {

  @ViewChild('svgD') _d: ElementRef;
  @ViewChild('svgH') _h: ElementRef;

    timelineMax:any = {};

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.timelineMax = new TimelineMax();

    this.animateSvg();
  }

  animateSvg() {
    this.timelineMax
      .set(this._d.nativeElement, { fillOpacity: 0 })
      .set(this._h.nativeElement, { fillOpacity: 0 })
      .from(this._d.nativeElement, 1, {
        strokeDasharray: '100',})
      .to(this._d.nativeElement, 5, {
          strokeDasharray: '100% 100%',
        strokeDashoffset: '0' })
      .play();

  }
}
