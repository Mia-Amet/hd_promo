import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from "../../routing.module";
import { NavbarComponent } from "./components/navbar.component";
import { LogoComponent } from "./components/logo/logo.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { SocialsComponent } from "./components/socials/socials.component";

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    NavbarComponent,
    LogoComponent,
    NavigationComponent,
    SocialsComponent
  ],
  declarations: [
    NavbarComponent,
    LogoComponent,
    NavigationComponent,
    SocialsComponent
  ]
})
export class NavbarModule { }
