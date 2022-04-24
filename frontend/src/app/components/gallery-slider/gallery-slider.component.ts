import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss']
})
export class GallerySliderComponent implements OnInit {
  images: string[] = [
    'assets/img/gallery/1.jpg',
    'assets/img/gallery/1.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
