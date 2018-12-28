import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']

})

export class ImageListComponent implements OnInit {
  title = 'List of Images';
  constructor() { }
  ngOnInit() {
  }
}
