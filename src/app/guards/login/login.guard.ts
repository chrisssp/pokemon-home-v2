import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private sesion: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (!this.sesion.logeado) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}