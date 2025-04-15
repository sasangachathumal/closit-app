import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TopNavBarComponent } from "../components/top-nav-bar/top-nav-bar.component";

import { CasualShoesComponent } from '../components/clothing-items/casual-shoes/casual-shoes.component';
import { HoodieComponent } from '../components/clothing-items/hoodie/hoodie.component';
import { JeansComponent } from '../components/clothing-items/jeans/jeans.component';
import { LeatherShoesComponent } from '../components/clothing-items/leather-shoes/leather-shoes.component';
import { ShirtLongSleeveComponent } from '../components/clothing-items/shirt-long-sleeve/shirt-long-sleeve.component';
import { ShirtShortSleeveComponent } from '../components/clothing-items/shirt-short-sleeve/shirt-short-sleeve.component';
import { ShortsComponent } from '../components/clothing-items/shorts/shorts.component';
import { TShirtLongSleeveComponent } from '../components/clothing-items/t-shirt-long-sleeve/t-shirt-long-sleeve.component';
import { TShirtShortSleeveComponent } from '../components/clothing-items/t-shirt-short-sleeve/t-shirt-short-sleeve.component';
import { TrouserComponent } from '../components/clothing-items/trouser/trouser.component';

import { categories, category, fixedColors } from '../../data/static-app-data';

import { WardrobeService } from '../services/wardrobe.service';

@Component({
  selector: 'app-customizer-page',
  standalone: true,
  imports: [
    TopNavBarComponent,
    CommonModule,
    FormsModule,
    HoodieComponent,
    JeansComponent,
    ShortsComponent,
    TShirtLongSleeveComponent,
    TShirtShortSleeveComponent,
    TrouserComponent,
    CasualShoesComponent,
    LeatherShoesComponent,
    ShirtLongSleeveComponent,
    ShirtShortSleeveComponent
  ],
  templateUrl: './customizer-page.component.html',
  styleUrl: './customizer-page.component.scss'
})
export class CustomizerPageComponent implements OnInit {

  categoryList: category[] = categories;
  fixedColorList = fixedColors;
  selectedCategory: category = {
    category: '',
    img: '',
    sub: [],
    materials: []
  };
  selectedSubCategory: string = '';
  materialList: string[] = [];
  selectedMaterial: string = '';
  selectedColor: string = 'white';
  selectedInputColor: string = '';
  isSuccess:boolean = false;
  isError:boolean = false;
  message:string = '';

  constructor(private wardrobeService: WardrobeService) {

  }

  ngOnInit(): void {
    this.categoryList = categories;
    this.fixedColorList = fixedColors;
    this.selectedCategory = {
      category: '',
      img: '',
      sub: [],
      materials: []
    };
    this.selectedSubCategory = '';
    this.materialList = [];
    this.selectedMaterial = '';
    this.selectedColor = 'white';
    this.selectedInputColor = '';
    this.isSuccess = false;
    this.isError = false;
    this.message = '';
  }

  categorySelect(category: category) {
    this.selectedCategory = category;
    if (category.sub) {
      this.selectedSubCategory = '';
    } else {
      this.selectedSubCategory = category.category;
    }
    this.materialList = category.materials ? category.materials : [];
    this.selectedMaterial = '';
    this.selectedColor = 'white';
    this.selectedInputColor = '';
    this.isSuccess = false;
    this.isError = false;
    this.message = '';
  }

  subCategorySelect(subCategory: any) {
    this.selectedSubCategory = subCategory;
  }

  selectFixedColors(color?: string) {
    if (color) {
      this.selectedColor = color;
    }
    else if (this.selectedInputColor) {
      this.selectedColor = this.selectedInputColor;
    }
  }

  saveClothingItem() {
    const item = {
      category: this.selectedSubCategory,
      colorCode: this.selectedColor,
      material: this.getMaterial()
    }
    this.isSuccess = false;
    this.isError = false;
    this.wardrobeService.saveNewClothingItem(item).subscribe({
      next: (res) => {
        this.isSuccess = true;
        this.isError = false;
        this.message = 'New clothing item successfully save to wardrobe';
      },
      error: (err) => {
        this.isSuccess = false;
        this.isError = true;
        if (err.status == 400) {
          this.message = err.error.error;
        } else {
          this.message = 'Clothing item save fail';
        }
      }
    });
  }

  getMaterial() {
    if (this.materialList.length == 0 && this.selectedCategory.category === 'Shoes') {
      if (this.selectedSubCategory === 'Leather Shoes') {
        return 'Leather';
      } else {
        return 'Canvas';
      }
    } else {
      return this.selectedMaterial;
    }
  }

}
