import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { BackgroundImageComponent } from '../components/background-image/background-image.component';
import { AuthService } from "../services/auth.service";
import { LocalStorageService } from "../services/local-storage.service";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BackgroundImageComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnInit {

  isShowStepOne = true;
  isShowStepTwo = false;
  isError: boolean = false;
  errorMessage: string = '';
  userEmail: string = '';

  firstForm: any;
  secondForm: any;

  constructor(
    private service: AuthService,
    private storage: LocalStorageService,
    private router: Router
  ) { }

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
    if (this.firstForm?.valid) {
      this.isError = false;
      this.errorMessage = '';
      this.userEmail = '';
      this.service.verifyRegister(this.firstForm.value).subscribe({
        next: (res) => {
          this.userEmail = this.firstForm?.get('email')?.value;
          this.isShowStepOne = false;
          this.isShowStepTwo = true;
        },
        error: (err) => {
          this.isError = true;
          this.errorMessage = err.error.error;
        }
      })
    }
  }

  registerNewUser() {
    if (this.secondForm?.valid) {
      this.isError = false;
      this.errorMessage = '';
      if (this.validatePasswords()) {
        const newUser = this.buildUserForRegister();
        if (newUser) {
          this.service.register(newUser).subscribe({
            next: (res) => {
              this.service.login({
                email: newUser.email,
                password: newUser.password
              })
                .subscribe({
                  next: (response) => {
                    this.storage.set('accessToken', response.accessToken);
                    this.service.me(response.accessToken)
                      .subscribe({
                        next: (meResponse) => {
                          this.storage.set('me', meResponse.data);
                          this.router.navigate(['/home']);
                        },
                        error: (error) => {
                          this.storage.clear();
                          this.isError = true;
                          this.errorMessage = 'Auto login fail!';
                          setTimeout(() => {
                            this.router.navigate(['/login']);
                          }, 200);
                        }
                      });
                  },
                  error: (error) => {
                    this.storage.clear();
                    this.isError = true;
                    this.errorMessage = 'Auto login fail!';
                    setTimeout(() => {
                      this.router.navigate(['/login']);
                    }, 200);
                  }
                });
            },
            error: (err) => {
              this.isError = true;
              this.errorMessage = err.error.error;
            }
          })
        } else {
          this.isError = true;
          this.errorMessage = "Registration error. Please try again";
        }
      } else {
        this.isError = true;
        this.errorMessage = "Entered passwords are not matching";
      }
    }
  }

  validatePasswords(): boolean {
    if (this.secondForm?.valid) {
      this.isError = false;
      this.errorMessage = '';
      const password = this.secondForm?.get('password')?.value;
      const confirmPassword = this.secondForm?.get('confirmPassword')?.value;
      return password === confirmPassword;
    }
    return false;
  }

  buildUserForRegister(): any {
    if (this.secondForm?.valid && !this.isError) {
      return {
        email: this.userEmail,
        name: this.secondForm?.get('name')?.value,
        password: this.secondForm?.get('confirmPassword')?.value
      };
    }
    return null;
  }

}
