import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import { LoaderService } from "./modules/loader-module/services/loader.service";
import { routerAnimation } from "./helpers/my-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routerAnimation
  ]
})
export class AppComponent implements OnInit {
  title: string = 'mysite';

  constructor(
    private router: Router,
    private loader: LoaderService
  ) {
    this.router.events.subscribe((event): void => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {
  }
  private navigationInterceptor(event): void {
    if (event instanceof NavigationStart) {
      setTimeout(() => {
        this.loader.start();
      }, 800);
    }
  }
}
