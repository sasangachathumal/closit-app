import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { Carousel, initFlowbite } from 'flowbite';

import { RouterOutlet } from '@angular/router';
import { categories } from '../data/clothing-category-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'closit-app';
  selectedColor: string | undefined;
  backgroundColor: string | undefined;
  imageList: any;

  categoriyList: any[];
  subCategoriyList: any[];
  subCategoriyImageList: any[];
  selectedCategory: any;
  selectedSubCategory: any;
  selectedSubCategoryImage: any;

  isShowSubCategories: boolean;
  isShowSubCategoryImage: boolean;
  visibleImageIndex: number;

  @ViewChild('colorDiv') colordiv!: ElementRef;

  constructor() {
    this.categoriyList = [];
    this.subCategoriyList = [];
    this.subCategoriyImageList = [];

    this.isShowSubCategories = false;
    this.isShowSubCategoryImage = false;
    this.visibleImageIndex = 0;
  }

  ngOnInit(): void {
    // initFlowbite();
    this.extractCategoryData();
  }

  extractCategoryData() {
    this.categoriyList = categories.map(({ id, category }) => ({ id, category }));
  }

  onCategorySelect(categoryId: number) {
    this.selectedCategory = categories.find((cat: any) => cat.id === categoryId);

    if (!this.selectedCategory) {
      this.isShowSubCategories = false;
      throw new Error(`Category with ID ${categoryId} not found`);
    }

    this.isShowSubCategories = true;

    // select the subcategories for the matching category
    this.subCategoriyList = this.selectedCategory.subCategories.map((subCat: any) => ({
      id: subCat.id,
      subCategory: subCat.subCategory,
      displayName: subCat.displayName
    }));
  }

  onSubCategorySelect(subCategoryId: number) {
    this.selectedSubCategory = this.selectedCategory.subCategories.find((sub: any) => sub.id === subCategoryId);

    if (!this.selectedSubCategory) {
      this.isShowSubCategoryImage = false;
      throw new Error(`Category with ID ${subCategoryId} not found`);
    }

    this.isShowSubCategoryImage = true;

    // select the images for the matching subcategory
    this.subCategoriyImageList = this.selectedSubCategory.images.map((images: any, index: any) => ({
      name: images.name,
      url1: images.url1,
      url2: images.url2,
      isvisible: index === 0 ? true : false
    }));
    this.visibleImageIndex = 0;
  }

  nextVisibleImage() {
    this.subCategoriyImageList.find((image, index) => {
        if (index === (this.visibleImageIndex + 1)) {
          image.isvisible = true;
        } else {
          image.isvisible = false;
        }
    });
  }

  changeColor() {
    if (this.selectedColor) {
      this.backgroundColor = this.selectedColor;
    }
  }

}
