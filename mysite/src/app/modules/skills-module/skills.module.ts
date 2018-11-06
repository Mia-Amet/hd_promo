import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from "../../routing.module";
import { SkillsComponent } from "./components/skills.component";

@NgModule({
  declarations: [
    SkillsComponent
  ],
  exports: [SkillsComponent],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class SkillsModule { }
