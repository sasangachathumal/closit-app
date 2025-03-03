import { Routes } from '@angular/router';
import { ForgetPasswordPageComponent } from './forget-password-page/forget-password-page.component';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PromptPageComponent } from './prompt-page/prompt-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { WardrobePageComponent } from './wardrobe-page/wardrobe-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'forget', component: ForgetPasswordPageComponent },
  { path: 'reset', component: ResetPasswordPageComponent },
  { path: 'home', component: LangingPageComponent },
  { path: 'prompt', component: PromptPageComponent },
  { path: 'wardrobe', component: WardrobePageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
