import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { BackgroundImageComponent } from '../components/background-image/background-image.component';

@Component({
  selector: 'app-forget-password-page',
  standalone: true,
  imports: [BackgroundImageComponent, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './forget-password-page.component.html',
  styleUrl: './forget-password-page.component.scss'
})
export class ForgetPasswordPageComponent implements OnInit {
  forgetPassForm: any;

  ngOnInit(): void {
    this.forgetPassForm = new FormBuilder().group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
