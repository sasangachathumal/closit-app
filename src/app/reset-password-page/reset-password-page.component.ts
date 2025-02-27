import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { BackgroundImageComponent } from '../components/background-image/background-image.component';

@Component({
  selector: 'app-reset-password-page',
  standalone: true,
  imports: [BackgroundImageComponent, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './reset-password-page.component.html',
  styleUrl: './reset-password-page.component.scss'
})
export class ResetPasswordPageComponent implements OnInit {
  resetPassForm: any;

  ngOnInit(): void {
    this.resetPassForm = new FormBuilder().group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }
}
