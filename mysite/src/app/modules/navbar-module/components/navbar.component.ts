import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from "@angular/router";
import { LoaderService } from "../../loader-module/services/loader.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoContainerStyles = {};

  constructor(
    private router: Router,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    this.logoContainerStyles = {
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'width': '40px',
      'height': '33px',
      'position': 'relative'
    };
  }
}
