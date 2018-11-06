import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    navs: any[] = [
        {
            'title': 'Home',
            'imageUrl': ''
        },
        {
            'title': 'About',
            'imageUrl': ''
        },
        {
            'title': 'Skills',
            'imageUrl': ''
        },
        {
            'title': 'Works',
            'imageUrl': ''
        },
        {
            'title': 'Contact',
            'imageUrl': ''
        }
    ];

    constructor() { }

    ngOnInit() {
        this.navs.forEach(nav => {
            nav.imageUrl = this.handleNavsIcons(nav.title.toLowerCase());
        });
    }

    handleNavsIcons(str) {
        return window.devicePixelRatio < 1.5 ? `./assets/img/icons/${ str }.png` : `./assets/img/icons/${ str }@2x.png`;
    }
}
