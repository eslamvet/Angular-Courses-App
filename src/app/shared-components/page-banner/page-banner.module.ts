import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from './page-banner.component';



@NgModule({
  declarations: [PageBannerComponent],
  imports: [
    CommonModule
  ],
  exports:[PageBannerComponent]
})
export class PageBannerModule { }
