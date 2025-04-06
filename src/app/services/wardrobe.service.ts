import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { LocalStorageService } from "./local-storage.service";
import { UtilService } from "./util.service";

export interface WardrobeItem {
  id: number;
  userId: number;
  category: string;
  colorCode: string;
  material: string;
  dressCodes: string[];
  occasions: string[];
  weather: string[];
}

@Injectable({
  providedIn: 'root'
})
export class WardrobeService {

  // API URL
  private endpoints = {
    newItem: '/api/clothing-item',
    singleItem: '/api/clothing-item/',
    usersIteams: '/api/clothing-item/user',
  };

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private utilService: UtilService
  ) { }

  // POST request to save clothing item
  saveNewClothingItem(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}${this.endpoints.newItem}`, data, { headers: this.utilService.generateRequestHeader() });
  }

  // POST request to get single clothing item
  getSinleItem(itemId: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}${this.endpoints.singleItem}${itemId}`, { headers: this.utilService.generateRequestHeader() });
  }

  // POST request to get clothing items of login
  getUserClothingItems(): Observable<any> {
    return this.http.get(`${environment.apiUrl}${this.endpoints.usersIteams}`, { headers: this.utilService.generateRequestHeader() });
  }
}
