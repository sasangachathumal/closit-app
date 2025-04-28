import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shirt-long-sleeve',
  standalone: true,
  imports: [],
  templateUrl: './shirt-long-sleeve.component.html',
  styleUrl: './shirt-long-sleeve.component.scss'
})
export class ShirtLongSleeveComponent {
  clothColor = input('');
  isSize100 = input();
}
