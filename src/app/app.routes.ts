import { Routes } from '@angular/router';
import { LangingPageComponent } from './langing-page/langing-page.component';

export const routes: Routes = [
  { path: 'home', component: LangingPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
