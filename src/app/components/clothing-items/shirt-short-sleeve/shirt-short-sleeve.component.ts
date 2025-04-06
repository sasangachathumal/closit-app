import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shirt-short-sleeve',
  standalone: true,
  imports: [],
  templateUrl: './shirt-short-sleeve.component.html',
  styleUrl: './shirt-short-sleeve.component.scss'
})
export class ShirtShortSleeveComponent {
  clothColor = input('');
  isSize100 = input();
}
