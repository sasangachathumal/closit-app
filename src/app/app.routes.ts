import { Routes } from '@angular/router';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PromptPageComponent } from './prompt-page/prompt-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'home', component: LangingPageComponent },
  { path: 'prompt', component: PromptPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
