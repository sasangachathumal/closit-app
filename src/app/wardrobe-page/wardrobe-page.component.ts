import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TopNavBarComponent } from "../components/top-nav-bar/top-nav-bar.component";

import { ClothingItemCardComponent } from '../components/clothing-item-card/clothing-item-card.component';

import { LocalStorageService } from "../services/local-storage.service";
import { CategoryCounts } from "../services/util.service";
import { WardrobeItem, WardrobeService } from "../services/wardrobe.service";

@Component({
  selector: 'app-wardrobe-page',
  standalone: true,
  imports: [TopNavBarComponent, ClothingItemCardComponent, RouterLink, RouterLinkActive],
  templateUrl: './wardrobe-page.component.html',
  styleUrl: './wardrobe-page.component.scss'
})
export class WardrobePageComponent implements OnInit {

  wardrobeItemList: WardrobeItem[] = [];
  originalWardrobeItemList: WardrobeItem[] = [];
  hasError: boolean = false;
  loading: boolean = false;
  categoryCounts: CategoryCounts = {
    TShirt: 0,
    Shirt: 0,
    Jean: 0,
    Trouser: 0,
    Hoodie: 0,
    Short: 0,
    Shoes: 0,
    Total: 0
  }

  constructor(
    private wardrobeService: WardrobeService,
    private storage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initVariables();
    this.loadClothingItems();
  }

  initVariables() {
    this.wardrobeItemList = [];
    this.hasError = false;
    this.loading = false;
  }

  loadClothingItems() {
    this.loading = true;
    this.hasError = false;
    this.wardrobeItemList = [];
    this.originalWardrobeItemList = [];
    this.wardrobeService.getUserClothingItems()
      .subscribe({
        next: (res) => {
          this.countCategories(res.data);
          this.wardrobeItemList = res.data;
          this.originalWardrobeItemList = res.data;
          this.loading = false;
        },
        error: (error) => {
          this.hasError = true;
          this.loading = false;
        }
      })
  }

  countCategories(wardrobeItemList: any[]) {
    this.categoryCounts = wardrobeItemList.reduce(
      (acc, item) => {
        if (item.category.includes("T-Shirt")) {
          acc.TShirt += 1;
          acc.Total += 1;
        } else if (item.category.includes("Shirt")) {
          acc.Shirt += 1;
          acc.Total += 1;
        } else if (item.category.includes("Jean")) {
          acc.Jean += 1;
          acc.Total += 1;
        } else if (item.category.includes("Trouser")) {
          acc.Trouser += 1;
          acc.Total += 1;
        } else if (item.category.includes("Hoodie")) {
          acc.Hoodie += 1;
          acc.Total += 1;
        } else if (item.category.includes("Short")) {
          acc.Short += 1;
          acc.Total += 1;
        } else if (item.category.includes("Shoes")) {
          acc.Shoes += 1;
          acc.Total += 1;
        }
        return acc;
      },
      {
        TShirt: 0,
        Shirt: 0,
        Jean: 0,
        Trouser: 0,
        Hoodie: 0,
        Short: 0,
        Shoes: 0,
        Total: 0
      }
    );
  }

  sortItemsByCategory(category?: string) {
    if (!category) {
      this.wardrobeItemList = this.originalWardrobeItemList;
      return;
    }
    this.wardrobeItemList = this.originalWardrobeItemList.filter(
      (wardrobeItem) => wardrobeItem.category.includes(category)
    );
  }

}
