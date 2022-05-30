import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss']
})
export class GallerySliderComponent implements OnInit {
  images: string[] = [
    'assets/img/gallery/1.jpg',
    'assets/img/gallery/2.jpg',
    'assets/img/gallery/3.jpg',
    'assets/img/gallery/4.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
