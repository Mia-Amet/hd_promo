import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from "../../routing.module";
import { AboutComponent } from "./components/about.component";

@NgModule({
  declarations: [
    AboutComponent
  ],
  exports: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class AboutModule { }
