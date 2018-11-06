import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from "../../routing.module";
import { PortfolioComponent } from "./components/portfolio.component";

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  exports: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class PortfolioModule { }
