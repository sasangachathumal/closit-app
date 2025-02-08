import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hoodie',
  standalone: true,
  imports: [],
  templateUrl: './hoodie.component.html',
  styleUrl: './hoodie.component.scss'
})
export class HoodieComponent {
  clothColor = input('');
}
