import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Errors } from 'src/app/shared/enums/errors.enum';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  submitted: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.createLoginForm();
  }

  createLoginForm(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  async onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    const { email, password } = this.loginForm.value;
    const auth = await this.authService.login(email, password);
    if (auth.isAuth) {
      this.router.navigateByUrl('/inventario');
      this.submitted = false;
    } else {
      this.submitted = false;
      this.errorMessage = Errors.INCORRECT_USER_AND_PASSWORD;
    }
  }

  logout(): void {
    this.authService.logout();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
