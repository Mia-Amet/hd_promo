import { NgModule } from '@angular/core';
// Package modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Components
import { AppComponent } from './app.component';
// My modules
import { RoutingModule } from "./routing.module";
import { LoaderModule } from "./modules/loader-module/loader.module";
import { NavbarModule } from "./modules/navbar-module/navbar.module";
import { HomeModule } from "./modules/home-module/home.module";
import { AboutModule } from "./modules/about-module/about.module";
import { SkillsModule } from "./modules/skills-module/skills.module";
import { PortfolioModule } from "./modules/portfolio-module/portfolio.module";
import { ContactModule } from "./modules/contact-module/contact.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
  // my modules
    LoaderModule,
    NavbarModule,
    HomeModule,
    AboutModule,
    SkillsModule,
    PortfolioModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
