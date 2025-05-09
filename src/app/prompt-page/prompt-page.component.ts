import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RecommendClothingListComponent } from "../components/recommend-clothing-list/recommend-clothing-list.component";
import { TopNavBarComponent } from "../components/top-nav-bar/top-nav-bar.component";

import { Actions } from '../../data/static-app-data';
import { MissingItem, PromptReselt, PromptService } from "../services/prompt.service";
import { WardrobeItem } from "../services/wardrobe.service";

@Component({
  selector: 'app-prompt-page',
  standalone: true,
  imports: [
    TopNavBarComponent,
    FormsModule,
    RecommendClothingListComponent
  ],
  templateUrl: './prompt-page.component.html',
  styleUrl: './prompt-page.component.scss'
})
export class PromptPageComponent implements OnInit {

  conversations: PromptReselt[] = [];
  prompt: string = '';
  quickActions = Actions;
  loading: boolean = false;
  isError: boolean = false;

    constructor(
      private promptService: PromptService
    ) { }

  ngOnInit(): void {
    this.conversations = [];
    this.prompt = '';
    this.quickActions = Actions;
    this.loading = false;
    this.isError = false;
  }

  getRecommendations(quickPrompt?: string) {
    this.loading = true;
    this.isError = false;
    let newPromptReselt:PromptReselt = {
      prompt: '',
      matched: [],
      missing: []
    };
    let promptToSend = quickPrompt ? quickPrompt : this.prompt;
    if (promptToSend === '' || promptToSend === undefined || promptToSend === null) {
      return;
    }
    newPromptReselt.prompt = promptToSend;
    this.promptService.getRecommendations({prompt: promptToSend}).subscribe({
      next: (res) => {
        if (res && res.data) {
          newPromptReselt.matched = res.data.matched;
          newPromptReselt.missing = res.data.missing;
          this.conversations.push(newPromptReselt);
        } else if (res && res.message) {
          newPromptReselt.message = res.message;
          this.conversations.push(newPromptReselt);
        }
        this.loading = false;
        this.isError = false;
        this.prompt = '';
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
        this.isError = true;
      }
    });
  }

}
