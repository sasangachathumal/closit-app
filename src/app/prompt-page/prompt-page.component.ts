import { Component } from '@angular/core';
import { TopNavBarComponent } from "../components/top-nav-bar/top-nav-bar.component";

import { HoodieComponent } from '../components/clothing-items/hoodie/hoodie.component';
import { JeansComponent } from '../components/clothing-items/jeans/jeans.component';
import { ShoesComponent } from '../components/clothing-items/shoes/shoes.component';
import { ShortsComponent } from '../components/clothing-items/shorts/shorts.component';
import { TShirtLongSleeveComponent } from '../components/clothing-items/t-shirt-long-sleeve/t-shirt-long-sleeve.component';
import { TShirtShortSleeveComponent } from '../components/clothing-items/t-shirt-short-sleeve/t-shirt-short-sleeve.component';
import { TrouserComponent } from '../components/clothing-items/trouser/trouser.component';

@Component({
  selector: 'app-prompt-page',
  standalone: true,
  imports: [TopNavBarComponent, HoodieComponent, JeansComponent, ShoesComponent, ShortsComponent, TShirtLongSleeveComponent, TShirtShortSleeveComponent, TrouserComponent],
  templateUrl: './prompt-page.component.html',
  styleUrl: './prompt-page.component.scss'
})
export class PromptPageComponent {

}
