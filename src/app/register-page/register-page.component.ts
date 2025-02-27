import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { BackgroundImageComponent } from '../components/background-image/background-image.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BackgroundImageComponent, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnInit {

  isShowStepOne = true;
  isShowStepTwo = false;

  firstForm: any;
  secondForm: any;

  ngOnInit(): void {
    this.firstForm = new FormBuilder().group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.secondForm = new FormBuilder().group({
      name: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]]
    });
  }

  goToNextStep() {
    this.isShowStepOne = false;
    this.isShowStepTwo = true;
  }

}
