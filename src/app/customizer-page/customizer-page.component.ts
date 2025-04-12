import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TopNavBarComponent } from "../components/top-nav-bar/top-nav-bar.component";

import { categories, fixedColors } from '../../data/static-app-data';

@Component({
  selector: 'app-customizer-page',
  standalone: true,
  imports: [TopNavBarComponent, CommonModule],
  templateUrl: './customizer-page.component.html',
  styleUrl: './customizer-page.component.scss'
})
export class CustomizerPageComponent implements OnInit {

  categoryList = categories;
  fixedColorList = fixedColors;
  selectedCategory: any;
  selectedSubCategory: string = '';

  constructor() {

  }

  ngOnInit(): void {
    this.categoryList = categories;
    this.fixedColorList = fixedColors;
    this.selectedCategory = null;
    this.selectedSubCategory = '';
  }

  categorySelect(category: any) {
    this.selectedCategory = category;
    if (category.sub) {
      this.selectedSubCategory = '';
    } else {
      this.selectedSubCategory = category.category;
    }
  }

  subCategorySelect(subCategory: any) {
    this.selectedSubCategory = subCategory;
  }

}
