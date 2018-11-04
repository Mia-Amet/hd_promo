import { Component, ViewChild, AfterViewInit, OnInit, ViewContainerRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'loader',
  template: `
    <ng-template #loaderContainer>
      <div class="l-container">
        <app-brand></app-brand>
        <div class="loader-text">{{ loaderText }}</div>
        <app-progress [ngStyle]="progressContainerStyles"></app-progress>
      </div>
    </ng-template>`,
  styles: [`
    :host {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 5;
      background: #25282c;
    }
    .l-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .loader-text {
      text-align: center;
      font-size: 1em;
      margin: 10px 0 40px;
      letter-spacing: 0.3em;
      z-index: 1001;
      color: #60666e; }
  `]
})
export class LoaderComponent implements OnInit, OnDestroy {
  loaderText: string = 'Dasha is thinking';
  progressContainerStyles = {};
  viewRef;
  outletElement;

  @ViewChild('loaderContainer') portalContainerTmplRef;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.attachView();
    this.progressContainerStyles = {
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'z-index': 9998,
      'transition': 'opacity 0.3s linear'
    };
  }

  ngOnDestroy() {
    // get the index of where our view resides inside the ViewContainer
    const index = this.viewContainerRef.indexOf(this.viewRef);
    if (index !== -1) {
      this.viewContainerRef.remove(index);
    }
  }

  attachView() {
    this.viewRef = this.viewContainerRef.createEmbeddedView(this.portalContainerTmplRef);
    this.viewRef.detectChanges();

    // grab the DOM element
    this.outletElement = document.querySelector('#box');
    console.log(this.outletElement);

    // attach the view to the DOM element that matches our selector
    this.viewRef.rootNodes.forEach(rootNode => this.outletElement.appendChild(rootNode));
  }
}
