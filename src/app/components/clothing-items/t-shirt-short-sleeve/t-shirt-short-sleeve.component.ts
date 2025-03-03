import { Component, input } from '@angular/core';

@Component({
  selector: 'app-t-shirt-short-sleeve',
  standalone: true,
  imports: [],
  templateUrl: './t-shirt-short-sleeve.component.html',
  styleUrl: './t-shirt-short-sleeve.component.scss'
})
export class TShirtShortSleeveComponent {
  clothColor = input('');
  isSize100 = input();
}
