import { Component, OnInit } from '@angular/core';

import { Category } from './category.model';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [
      new Category("Hair", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/stocksy-txp447ec32bkxc200-medium-853695-1547235421.jpg?crop=1.00xw:0.335xh;0,0.284xh&resize=980:*"),
      new Category("Facial", "https://dontmesswithmama.com/wp-content/uploads/2014/08/honey-face-masks.jpg"),
      new Category("Brows and Lashes", "https://premiermassage.net/images/services/brows_lashes_380x280.jpg"),
      new Category("Makeup", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrQhJhlLCsnwAny3O-rybF3zb2nXBdr08fJUSN4okeCvY6bvJ"),
      new Category("Nails", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ01rivjeK1iVbQWkroYFghXJxgVEF1Tby43wCcljD5v0fgvupD"),

  ];

  constructor() { }

  ngOnInit() {
  }

}
