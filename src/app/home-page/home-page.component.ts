import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { BackgroundImageComponent } from '../components/background-image/background-image.component';
import { TopNavBarComponent } from "../components/top-nav-bar/top-nav-bar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BackgroundImageComponent, TopNavBarComponent, RouterLink, RouterLinkActive],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
