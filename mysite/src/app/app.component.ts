import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from "@angular/router";
import { LoaderService } from "./modules/loader-module/services/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'mysite';

  constructor(
    private router: Router,
    private loader: LoaderService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loader.start();
      }
    })
  }

  ngOnInit() {
    // this.loader.start();
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
