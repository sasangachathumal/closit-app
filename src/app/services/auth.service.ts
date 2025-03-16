import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { LocalStorageService } from "./local-storage.service";
import { UtilService } from "./util.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    // API URL
    private endpoints = {
      login: '/api/login',
      register: '/api/register',
      verifyRegister: '/api/register/verify',
      logout: '/api/logout',
      forgetPass: '/api/forgot-password',
      resetPass: '/api/reset-password',
      me: '/api/me'
    };

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private utilService: UtilService
  ) { }

    // POST request to log user in
    login(data: any): Observable<any> {
      return this.http.post(`${environment.apiUrl}${this.endpoints.login}`, data);
    }

    // POST request to verify user before register
    verifyRegister(data: any): Observable<any> {
      return this.http.post(`${environment.apiUrl}${this.endpoints.register}`, data);
    }

    // POST request to register user in
    register(data: any): Observable<any> {
      return this.http.post(`${environment.apiUrl}${this.endpoints.register}`, data);
    }

    // GET request to user details
    // need to create HTTP header manualy because this call right after login done. somethings local stroage not updated.
    me(token: any): Observable<any> {
      const newHttpHeaders: HttpHeaders = new HttpHeaders({
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "69420",
      });
      return this.http.get(`${environment.apiUrl}${this.endpoints.me}`, { headers: newHttpHeaders });
    }

    // POST request to logout the user
    logout(): Observable<any> {
      return this.http.post(`${environment.apiUrl}${this.endpoints.logout}`, {}, { headers: this.utilService.generateRequestHeader() });
    }

    // POST request to send reset password link
    forgetPassword(data: any): Observable<any> {
      return this.http.post(`${environment.apiUrl}${this.endpoints.forgetPass}`, data, { headers: this.utilService.generateRequestHeader() });
    }

    // POST request to send reset the password
    resetPassword(data: any): Observable<any> {
      return this.http.post(`${environment.apiUrl}${this.endpoints.resetPass}`, data, { headers: this.utilService.generateRequestHeader() });
    }
}
