import { Component } from '@angular/core';
import { BackgroundImageComponent } from '../components/background-image/background-image.component';
import { LandingPageFeaturesComponent } from '../components/landing-page-features/landing-page-features.component';
import { LandingPageHeroComponent } from '../components/landing-page-hero/landing-page-hero.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LandingPageHeroComponent, LandingPageFeaturesComponent, BackgroundImageComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
