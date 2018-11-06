import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {
  socials: any[] = [
      {
          'title': 'Facebook',
          'class': 'fa-facebook-f',
          'url': 'https://www.facebook.com/dashaags',
      },
      {
          'title': 'LinkedIn',
          'class': 'fa-linkedin-in',
          'url': 'https://www.linkedin.com/in/dasha-hoshurenko'
      },
      {
          'title': 'GitHub',
          'class': 'fa-github',
          'url': 'https://github.com/dashaHsh/dashaHsh.github.io'
      }
  ];

  constructor() { }

  ngOnInit() {
  }
}
