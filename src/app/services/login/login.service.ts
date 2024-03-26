import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  get logeado(): boolean {
    return localStorage.getItem('logeado') === 'true';
  }

  set logeado(value: boolean) {
    localStorage.setItem('logeado', value ? 'true' : 'false');
  }

  constructor() { }

  login(email: string, password: string) {
    if (email === '20223l001079@utcv.edu.mx' && password === '12345678') {
      this.logeado = true;
    }
    else {
      this.logeado = false;
    }
  }

  logout() {
    this.logeado = false;
  }
}
