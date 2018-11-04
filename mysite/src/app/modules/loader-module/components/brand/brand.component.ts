import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  imageUrl: string = 'assets/img/logo@2x.png';
  name: string = 'Dasha';
  imageStyles = {};
  txtStyles = {};

  constructor() { }

  ngOnInit() {
    this.imageStyles = {
      'width': '40px',
      'height': '33px',
      'z-index': '1001'
    };
    this.txtStyles = {
      'font-size': '1.2em',
      'font-weight': 500,
      'margin-top': '5px',
      'text-indent': '3px',
      'color': 'white',
      'z-index': '1001'
    };
  }

}
