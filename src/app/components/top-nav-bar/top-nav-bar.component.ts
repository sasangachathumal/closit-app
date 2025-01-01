import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.scss'
})
export class TopNavBarComponent {
  isProfileDropdownShow = false;

  profileDropdownToggle() {
    this.isProfileDropdownShow = !this.isProfileDropdownShow;
  }
}
