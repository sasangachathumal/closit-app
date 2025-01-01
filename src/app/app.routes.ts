import { Routes } from '@angular/router';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { PromptPageComponent } from './prompt-page/prompt-page.component';

export const routes: Routes = [
  { path: 'home', component: LangingPageComponent },
  { path: 'prompt', component: PromptPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
