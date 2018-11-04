import { NgModule } from '@angular/core';
// Package modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntroComponent } from './components/home/intro/intro.component';
// My modules
import { RoutingModule } from "./routing.module";
import { LoaderModule } from "./modules/loader-module/loader.module";
import { NavbarModule } from "./modules/navbar/navbar.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    IntroComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
  // my modules
    LoaderModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
