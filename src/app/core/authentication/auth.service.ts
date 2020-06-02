import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Employee } from 'src/app/shared/models/employee.model';
import { EmployeesService } from '../services/employees.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private employeeService: EmployeesService
  ) {}

  async login(email: string, password: string) {
    try {
      const authUser = await this.afAuth.auth.signInWithEmailAndPassword(
        email,
        password
      );
      const token = await authUser.user.getIdToken();
      this.saveToken(token);
      this.employeeService
        .getEmployeeByEmail(email)
        .subscribe((userData: User) => {
          this.saveUserData(userData);
        });
      return {
        isAuth: true,
      };
    } catch (error) {
      return {
        isAuth: false,
        errorCode: error.code,
      };
    }
  }

  getCurrentToken(): string {
    const token = localStorage.getItem('id_token') || '';
    return token;
  }

  saveToken(token: string): void {
    localStorage.setItem('id_token', token);
    const expiresAt = moment().add(3600, 'second');
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  logout(): void {
    this.afAuth.auth.signOut();
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('name');
    localStorage.removeItem('jobName');
    localStorage.removeItem('posName');
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  saveUserData(employeeData: User): void {
    const { name, job, pointOfSale } = employeeData;
    const { id, name: jobName } = job;
    const { name: posName } = pointOfSale;
    localStorage.setItem('name', name);
    localStorage.setItem('jobName', jobName);
    localStorage.setItem('jobId', String(id));
    localStorage.setItem('posName', posName);
  }
}
