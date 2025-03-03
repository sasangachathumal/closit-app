import { Component, input } from '@angular/core';

@Component({
  selector: 'app-jeans',
  standalone: true,
  imports: [],
  templateUrl: './jeans.component.html',
  styleUrl: './jeans.component.scss'
})
export class JeansComponent {
  clothColor = input('');
  isSize100 = input();
  isSizeFit = input();
}
