import {Component, ElementRef, OnInit, ViewChild, ViewChildren, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  @ViewChild('wrapper') _wrapper: ElementRef;
  @ViewChildren('firstLoad') _tags;
  @ViewChildren('secondLoad') _elems;

  img: object = {
    'alt': 'D',
    'url': ''
  };
  imageUrl: 'assets/img/logo-letter@2x.png';
  currentStyles = {};

  constructor() { }

  ngOnInit() {
    this.setStyles();
    this.img['url'] = window.devicePixelRatio < 1.5 ? 'assets/img/logo-letter.png' : 'assets/img/logo-letter@2x.png';
  }

  ngAfterViewInit() {
    this._tags._results.forEach(tag => {
      tag.nativeElement.style.opacity = 0;
    });
    this._elems._results.forEach(elem => {
      elem.nativeElement.style.opacity = 0;
    });

    this.showElements(this._tags._results);
    setTimeout(() => {
        this.showElements(this._elems._results);
    }, 1500);
  }

  setStyles() {
    this.currentStyles = {
      'width': '94vw',
      'height': `100vh`,
      'padding': '3% 5%',
      'position': 'fixed',
      'top': 0,
      'left': `${this._wrapper.nativeElement.closest('.main_container').offsetLeft}px`,
      'display': 'flex',
      'flex-direction': 'column',
      'justify-content': 'space-between',
      'align-items': 'left'
    }
  }

  showElements(arr) {
    let timeout = 0;

    arr.forEach(item => {
      setTimeout(() => {
        this.animateElement(item.nativeElement);
      }, timeout);

      timeout += 500;
    });
  }

  animateElement(elem) {
    let step = 0;

    function animate() {
      step += 0.05;
      elem.style.opacity = step;
      const raf = requestAnimationFrame(animate);

      if (parseFloat(elem.style.opacity) >= 1) {
        cancelAnimationFrame(raf);
      }
    }

    animate();
  }
}
