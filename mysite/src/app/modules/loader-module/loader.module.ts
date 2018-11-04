import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "./components/loader.component";
import { ProgressComponent } from "./components/progress/progress.component";
import { BrandComponent } from "./components/brand/brand.component";
import { LoaderService } from "./services/loader.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    ProgressComponent,
    BrandComponent
  ],
  entryComponents: [LoaderComponent],
  declarations: [
    LoaderComponent,
    ProgressComponent,
    BrandComponent
  ],
  providers: [LoaderService]
})
export class LoaderModule { }
