import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';

import { GallerySliderComponent } from './gallery-slider.component';

@NgModule({
  declarations: [GallerySliderComponent],
  imports: [CommonModule, NzCarouselModule],
  exports: [GallerySliderComponent],
})
export class GallerySliderModule {}