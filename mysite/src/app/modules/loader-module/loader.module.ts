import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "./components/loader.component";
import { LoaderService } from "./services/loader.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent],
  entryComponents: [LoaderComponent],
  declarations: [LoaderComponent],
  providers: [LoaderService]
})
export class LoaderModule { }
