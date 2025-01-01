import { Component } from '@angular/core';
import { TopNavBarComponent } from "../components/top-nav-bar/top-nav-bar.component";

@Component({
  selector: 'app-prompt-page',
  standalone: true,
  imports: [TopNavBarComponent],
  templateUrl: './prompt-page.component.html',
  styleUrl: './prompt-page.component.scss'
})
export class PromptPageComponent {

}
