import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GallerySliderModule } from '../../components/gallery-slider/gallery-slider.module';

import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent}
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    GallerySliderModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}