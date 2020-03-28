import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from "../../services/auth/auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  submitted: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  async onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    const email = this.loginForm.value['email'];
    const password = this.loginForm.value['password'];
    const auth = await this.authService.login(email, password);
    if (auth.isAuth) {
      this.router.navigate(['/home']);
    } else {
      this.submitted = false;
      this.errorMessage = auth.errorCode === 'auth/wrong-password' ?
        '¡Contraseña incorrecta!' : '¡El usuario no existe!';
    }
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }
}
