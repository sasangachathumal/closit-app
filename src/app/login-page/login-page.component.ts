import { Component } from '@angular/core';

import { BackgroundImageComponent } from '../components/background-image/background-image.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [BackgroundImageComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
