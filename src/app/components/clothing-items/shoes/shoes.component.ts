import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss'
})
export class ShoesComponent {
  clothColor = input('');
}
