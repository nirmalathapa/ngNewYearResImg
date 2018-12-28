import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']

})

export class ImageListComponent implements OnInit {
  images: string[];
  constructor() {
    this.images = [
      'assets/1.jpg',
      'assets/2.jpg',
      'assets/3.jpg',
      'assets/4.jpg',
      'assets/5.jpg',
      'assets/6.jpg',
      'assets/7.jpg',
      'assets/9.jpg',
      'assets/10.jpg',
      'assets/11.jpg',
      'assets/12.jpg',
    ];
  }
  ngOnInit() {
  }
}
