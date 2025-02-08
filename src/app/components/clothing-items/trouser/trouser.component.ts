import { Component, input } from '@angular/core';

@Component({
  selector: 'app-trouser',
  standalone: true,
  imports: [],
  templateUrl: './trouser.component.html',
  styleUrl: './trouser.component.scss'
})
export class TrouserComponent {
  clothColor = input('');
}
