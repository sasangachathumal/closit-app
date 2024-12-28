import { Component } from '@angular/core';
import { LandingPageFeaturesComponent } from '../components/landing-page-features/landing-page-features.component';
import { LandingPageHeroComponent } from '../components/landing-page-hero/landing-page-hero.component';

@Component({
  selector: 'app-langing-page',
  standalone: true,
  imports: [LandingPageHeroComponent, LandingPageFeaturesComponent],
  templateUrl: './langing-page.component.html',
  styleUrl: './langing-page.component.scss'
})
export class LangingPageComponent {

}
