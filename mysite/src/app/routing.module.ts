import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/home-module/components/home.component";
import { AboutComponent} from "./modules/about-module/components/about.component";
import { SkillsComponent } from "./modules/skills-module/components/skills.component";
import { PortfolioComponent } from "./modules/portfolio-module/components/portfolio.component";
import { ContactComponent } from "./modules/contact-module/components/contact.component";

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { state: 'home' }},
  { path: 'about-module', component: AboutComponent, data: { state: 'about-module' }},
  { path: 'skills-module', component: SkillsComponent, data: { state: 'skills-module' }},
  { path: 'works', component: PortfolioComponent, data: { state: 'works' }},
  { path: 'contact-module', component: ContactComponent, data: { state: 'contact-module' }}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
