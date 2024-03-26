import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';
  loginForm: FormGroup;

  constructor(
    private router: Router,
    public loginService: LoginService,
    private formBuilder: FormBuilder,
    private routerOutlet: IonRouterOutlet
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ionViewWillEnter() {
    this.loginService.logout();
    console.log("this.logeado = ", this.loginService.logeado);
  }

  login() {
    this.loginService.login(this.email, this.password);

    this.password = '';
    
    this.router.navigate(['/home']);
    console.log("this.logeado = ", this.loginService.logeado);
  }
}
