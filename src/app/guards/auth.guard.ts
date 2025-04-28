import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storage: LocalStorageService) {}

  canActivate(): boolean {
    const isLogin = this.storage.get('isLogin') === true;
    if (!isLogin) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
