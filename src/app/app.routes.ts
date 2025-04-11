import { Routes } from '@angular/router';
import { ForgetPasswordPageComponent } from './forget-password-page/forget-password-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PromptPageComponent } from './prompt-page/prompt-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { WardrobePageComponent } from './wardrobe-page/wardrobe-page.component';

import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'forget', component: ForgetPasswordPageComponent },
  { path: 'reset', component: ResetPasswordPageComponent },
  { path: 'landing', component: LandingPageComponent },

  { path: 'prompt', component: PromptPageComponent, canActivate: [AuthGuard] },
  { path: 'wardrobe', component: WardrobePageComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },

  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
];
