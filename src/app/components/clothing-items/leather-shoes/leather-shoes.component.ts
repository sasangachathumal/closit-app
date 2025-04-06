import { Component, input } from '@angular/core';

@Component({
  selector: 'app-leather-shoes',
  standalone: true,
  imports: [],
  templateUrl: './leather-shoes.component.html',
  styleUrl: './leather-shoes.component.scss'
})
export class LeatherShoesComponent {
  clothColor = input('');
  isSize100 = input();
}
