import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-landing-page-hero',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './landing-page-hero.component.html',
  styleUrl: './landing-page-hero.component.scss'
})
export class LandingPageHeroComponent {

}
