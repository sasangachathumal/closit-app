import { Component, input } from '@angular/core';

@Component({
  selector: 'app-t-shirt-long-sleeve',
  standalone: true,
  imports: [],
  templateUrl: './t-shirt-long-sleeve.component.html',
  styleUrl: './t-shirt-long-sleeve.component.scss'
})
export class TShirtLongSleeveComponent {
  clothColor = input('');
  isSize100 = input();
}
