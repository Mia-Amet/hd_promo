import { Component, OnInit } from '@angular/core';
import { LoaderService } from "../../../loader-module/services/loader.service";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  exportAs: 'logoWrapper'
})
export class LogoComponent implements OnInit {
  imageUrl: string = 'assets/img/logo@2x.png';
  name: string = 'Dasha';
  txtStyles = {};
  imageStyles = {};

  constructor(
    private loader: LoaderService
  ) { }

  ngOnInit() {
    this.imageStyles = {
      'width': '40px',
      'height': '33px'
    };
    this.txtStyles = {
      'font-size': '1.2em',
      'font-weight': 500,
      'margin-top': '5px',
      'text-indent': '3px',
      'color': 'white'
    }
  }

  insertLoader() {
    this.loader.start();
  }
}
