import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from "../../routing.module";
import { HomeComponent } from "./components/home.component";
import { OutlineComponent } from './components/outline/outline.component';
import { ColorComponent } from './components/color/color.component';

@NgModule({
  declarations: [
    HomeComponent,
    OutlineComponent,
    ColorComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    HomeComponent,
    OutlineComponent,
    ColorComponent
  ],
  providers: []
})
export class HomeModule { }
