import { Component, OnInit } from '@angular/core';
import { transition, trigger, animate, style, query, group } from "@angular/animations";

@Component({
  selector: 'loader',
  template: `
    <div class="l-container">
      <img [src]="imageUrl" class="loader-img">
      <p class="logo-text">{{ name }}</p>
      <div class="loader-text">{{ loaderText }}</div>
      <div class="progressbar">
        <div class="progress"></div>
      </div>
      <div class="loader-text">{{ currentPercentage }}</div>
    </div>`,
  styles: [`
    :host {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 5;
      background: #1c1e21;
    }

    .l-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 1;
    }

    .l-container, .loader-text, app-brand, app-progress {
      animation: fadeOut 0.3s ease 1.2s forwards;
    }

    .loader-text {
      text-align: center;
      font-size: 1em;
      margin: 10px 0 40px;
      letter-spacing: 0.3em;
      z-index: 1001;
      color: #60666e;
    }

    .progressbar {
      z-index: 1000;
      width: 400px;
      height: 1px;
      background-color: #45494e;
      display: flex;
    }

    .progress {
      height: 100%;
      background-color: #3df7c5;
    }

    .loader-img {
      width: 40px;
      height: 33px;
      z-index: 1001;
    }

    .logo-text {
      font-size: 1.2em;
      font-weight: 500;
      text-indent: 3px;
      margin-top: 5px;
      color: white;
      z-index: 1001;
    }
  `],
  animations: [
    trigger('loaderAnimation', [
      transition(':enter', [
        query(':self', [
          style({ transform: 'translateX(-100%)', position: 'absolute' }),
          animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query('.progress', [
          style({ 'flex-basis': '0%', width: '0%' }),
          animate('1.2s ease-in-out', style({ 'flex-basis': '100%', width: '100%' }))
        ])
      ]),
      transition(':leave', [
        group([
          query('.progress', [
            style({ 'flex-basis': '100%', width: '100%' })
          ]),
          query(':self', [
            style({ transform: 'translateX(0%)' }),
            animate('1s ease-in-out', style({ transform: 'translateX(100%)' }))
          ], { optional: true })
        ])
      ])
    ])
  ],
  host: { '[@loaderAnimation]': '' }
})
export class LoaderComponent implements OnInit {
  loaderText: string = 'Dasha is thinking';
  imageUrl: string = 'assets/img/logo@2x.png';
  name: string = 'Dasha';
  animationStateExp: string = 'stop';
  currentPercentage: number = 0;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      let interval = setInterval(() => {
        this.currentPercentage += 1;
        if (this.currentPercentage >= 100) {
          clearInterval(interval);
        }
      }, 12);
      this.animationStateExp = 'run';
    }, 800);
  }
}
