import { Component, OnInit } from '@angular/core';
import { bubbleAnimation } from "../../../helpers/my-animations";
import { environment } from "../../../../environments/environment";
import { HomePageService } from "../../../services/home-page.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    bubbleAnimation
  ]
})
export class HomeComponent implements OnInit {
  outlineComplete: boolean = false;
  bubbleStateExp: string = '';
  private _txt: string = environment.homeText;
  private _sub: string = environment.homeSub;
  public txt: any[];
  public sub: any[];

  constructor(
    private hpService: HomePageService
  ) { }

  ngOnInit() {
    this.txt = this._txt.split('');
    this.sub = this._sub.split('');

    setTimeout(() => this.bubbleStateExp = 'run', 4000);
    setTimeout(() => this.outlineComplete = true, 7000);
  }

  onClick() {
    this.hpService.emitFlag(false);
  }
}
