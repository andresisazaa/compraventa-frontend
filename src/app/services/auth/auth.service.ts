import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const authenticated = await this.afAuth.auth
        .signInWithEmailAndPassword(email, password);
      return {
        isAuth: true,
        uid: authenticated.user.uid,
        token: authenticated.user.refreshToken
      };
    } catch (error) {
      return {
        isAuth: false,
        errorCode: error.code
      };
    }
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
