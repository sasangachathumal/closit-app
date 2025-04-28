import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";

export interface CategoryCounts {
  TShirt: number;
  Shirt: number;
  Jean: number;
  Trouser: number;
  Hoodie: number;
  Short: number;
  Shoes: number;
  Total: number;
}

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  generateRequestHeader() {
    // API request headers
    return new HttpHeaders({
      Authorization: `Bearer ${this.localStorageService.get('accessToken')}`,
      "ngrok-skip-browser-warning": "69420",
    });
  }

}
