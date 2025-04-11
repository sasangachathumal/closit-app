import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { LocalStorageService } from "./local-storage.service";
import { UtilService } from "./util.service";
import { WardrobeItem } from "./wardrobe.service";

export interface MissingItem {
  category: string;
  colorCode: string;
  dressCodes: string[];
  occasions: string[];
}

export interface PromptReselt {
  prompt: string;
  matched: WardrobeItem[];
  missing: MissingItem[];
}

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  // API URL
  private endpoints = {
    getRecommendation: '/api/recommendation'
  };

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private utilService: UtilService
  ) { }

  // POST request to get recommendations
  getRecommendations(data: {prompt: string}): Observable<any> {
    return this.http.post(`${environment.apiUrl}${this.endpoints.getRecommendation}`, data, { headers: this.utilService.generateRequestHeader() });
  }
}
