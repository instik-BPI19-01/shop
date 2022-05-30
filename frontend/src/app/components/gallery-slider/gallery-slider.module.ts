import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import { GallerySliderComponent } from './gallery-slider.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [GallerySliderComponent],
  imports: [CommonModule, NgbCarouselModule],
  exports: [GallerySliderComponent],
})
export class GallerySliderModule {}