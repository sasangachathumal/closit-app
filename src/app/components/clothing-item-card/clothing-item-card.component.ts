import { Component, input } from '@angular/core';

import { CasualShoesComponent } from '../clothing-items/casual-shoes/casual-shoes.component';
import { HoodieComponent } from '../clothing-items/hoodie/hoodie.component';
import { JeansComponent } from '../clothing-items/jeans/jeans.component';
import { LeatherShoesComponent } from '../clothing-items/leather-shoes/leather-shoes.component';
import { ShirtLongSleeveComponent } from '../clothing-items/shirt-long-sleeve/shirt-long-sleeve.component';
import { ShirtShortSleeveComponent } from '../clothing-items/shirt-short-sleeve/shirt-short-sleeve.component';
import { ShortsComponent } from '../clothing-items/shorts/shorts.component';
import { TShirtLongSleeveComponent } from '../clothing-items/t-shirt-long-sleeve/t-shirt-long-sleeve.component';
import { TShirtShortSleeveComponent } from '../clothing-items/t-shirt-short-sleeve/t-shirt-short-sleeve.component';
import { TrouserComponent } from '../clothing-items/trouser/trouser.component';

import { WardrobeItem } from "../../services/wardrobe.service";

@Component({
  selector: 'app-clothing-item-card',
  standalone: true,
  imports: [
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
  templateUrl: './clothing-item-card.component.html',
  styleUrl: './clothing-item-card.component.scss'
})
export class ClothingItemCardComponent {
  WardrobeItem:any = input();
  constructor() {
    // console.log(this.WardrobeItem);
  }
}
