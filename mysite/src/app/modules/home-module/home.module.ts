import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from "../../routing.module";
import { HomeComponent } from "./components/home.component";
import { InitialsComponent } from "./components/initials/initials.component";

@NgModule({
  declarations: [
    HomeComponent,
    InitialsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    HomeComponent,
    InitialsComponent
  ]
})
export class HomeModule { }
