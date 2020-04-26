import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const authUser = await this.afAuth.auth
        .signInWithEmailAndPassword(email, password);
      const token = await authUser.user.getIdToken();
      this.saveToken(token);
      return {
        isAuth: true
      };
    } catch (error) {
      return {
        isAuth: false,
        errorCode: error.code
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
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  logout(): void {
    this.afAuth.auth.signOut();
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
