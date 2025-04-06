import { Component } from '@angular/core';
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

@Component({
  selector: 'app-prompt-page',
  standalone: true,
  imports: [
    TopNavBarComponent,
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
  templateUrl: './prompt-page.component.html',
  styleUrl: './prompt-page.component.scss'
})
export class PromptPageComponent {

}
