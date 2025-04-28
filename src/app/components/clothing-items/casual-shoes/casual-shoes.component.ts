import { Component, input } from '@angular/core';

@Component({
  selector: 'app-casual-shoes',
  standalone: true,
  imports: [],
  templateUrl: './casual-shoes.component.html',
  styleUrl: './casual-shoes.component.scss'
})
export class CasualShoesComponent {
  clothColor = input('');
  isSize100 = input();
}
