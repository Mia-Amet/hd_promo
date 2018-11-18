import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HomePageService } from "../../../../services/home-page.service";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  exportAs: 'logoWrapper'
})
export class LogoComponent implements OnInit {
  name: string = 'Dasha';
  protected _flag: boolean;

  constructor(
    private hpService: HomePageService
  ) { }

  ngOnInit() {
    this.hpService.emitFlag(window.location.pathname === '/home');
    this.hpService.flagEvent.subscribe((res: boolean) => this._flag = res);
  }

  onClick(): void {
    this.hpService.emitFlag(!this._flag);
  }

  skipLocation(): boolean {
    return window.location.pathname === '/home';
  }
}
