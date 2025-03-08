import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { BackgroundImageComponent } from '../components/background-image/background-image.component';

import { AuthService } from "../services/auth.service";
import { LocalStorageService } from "../services/local-storage.service";

import { environment } from "../../environments/environment";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, BackgroundImageComponent, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private storage: LocalStorageService) { }

  ngOnInit(): void {
    this.loginForm = new FormBuilder().group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginFormSubmit() {
    if (this.loginForm?.valid) {
      this.service.login(this.loginForm.value)
        .subscribe(
          (response) => {
            this.storage.set('accessToken', response.accessToken);
            this.service.me(response.accessToken)
              .subscribe(
                async (newResponse) => {
                  this.storage.set('me', newResponse.data);
                  this.router.navigate(['/home']);
                },
                async (error) => {
                  this.storage.clear();
                }
              );
          },
          async (error) => {
            this.storage.clear();
          }
        );
    }
  }

}
