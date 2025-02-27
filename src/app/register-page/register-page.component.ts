import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { BackgroundImageComponent } from '../components/background-image/background-image.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BackgroundImageComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  isShowStepOne = true;
  isShowStepTwo = false;

  goToNextStep() {
    this.isShowStepOne = false;
    this.isShowStepTwo = true;
  }

}
