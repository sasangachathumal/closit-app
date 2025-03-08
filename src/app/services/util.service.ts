import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";

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
      Authorization: `Bearer ${this.localStorageService.get('access_token')}`,
      "ngrok-skip-browser-warning": "69420",
    });
  }

}
