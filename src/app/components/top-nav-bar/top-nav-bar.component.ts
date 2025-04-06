import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.scss'
})
export class TopNavBarComponent {
  isProfileDropdownShow = false;

  profileDropdownToggle() {
    this.isProfileDropdownShow = !this.isProfileDropdownShow;
  }
}
