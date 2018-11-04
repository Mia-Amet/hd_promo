import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { state: 'home' }},
  { path: 'about', component: AboutComponent, data: { state: 'about' }},
  { path: 'skills', component: SkillsComponent, data: { state: 'skills' }},
  { path: 'works', component: PortfolioComponent, data: { state: 'works' }},
  { path: 'contact', component: ContactComponent, data: { state: 'contact' }}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
