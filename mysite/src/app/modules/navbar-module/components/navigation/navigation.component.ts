import { Component, OnInit } from '@angular/core';
import { HomePageService } from "../../../../services/home-page.service";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  protected _flag: boolean;

  constructor(
    private hpService: HomePageService
  ) { }

  ngOnInit() {
    this.hpService.emitFlag(window.location.pathname === '/home');
    this.hpService.flagEvent.subscribe((res: boolean) => this._flag = res);
  }

  onClick(value: boolean): void {
    this.hpService.emitFlag(value);
  }

  skipLocation(): boolean {
    return window.location.pathname === '/home';
  }
}
