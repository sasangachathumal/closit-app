import { Component, input } from '@angular/core';

import { HoodieComponent } from '../clothing-items/hoodie/hoodie.component';
import { JeansComponent } from '../clothing-items/jeans/jeans.component';
import { ShoesComponent } from '../clothing-items/shoes/shoes.component';
import { ShortsComponent } from '../clothing-items/shorts/shorts.component';
import { TShirtLongSleeveComponent } from '../clothing-items/t-shirt-long-sleeve/t-shirt-long-sleeve.component';
import { TShirtShortSleeveComponent } from '../clothing-items/t-shirt-short-sleeve/t-shirt-short-sleeve.component';
import { TrouserComponent } from '../clothing-items/trouser/trouser.component';

import { WardrobeItem } from "../../services/wardrobe.service";

@Component({
  selector: 'app-clothing-item-card',
  standalone: true,
  imports: [HoodieComponent, JeansComponent, ShoesComponent, ShortsComponent, TShirtLongSleeveComponent, TShirtShortSleeveComponent, TrouserComponent],
  templateUrl: './clothing-item-card.component.html',
  styleUrl: './clothing-item-card.component.scss'
})
export class ClothingItemCardComponent {
  WardrobeItem:any = input();
  constructor() {
    // console.log(this.WardrobeItem);
  }
}
