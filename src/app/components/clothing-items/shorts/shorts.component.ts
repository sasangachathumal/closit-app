import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shorts',
  standalone: true,
  imports: [],
  templateUrl: './shorts.component.html',
  styleUrl: './shorts.component.scss'
})
export class ShortsComponent {
  clothColor = input('');
}
