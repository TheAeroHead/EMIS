import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private myRoute: Router) { }

  sendToken(token: string) {
    localStorage.setItem('LoggedInUser', token);
  }
  getToken() {
    return localStorage.getItem('LoggedInUser');
  }
  isLoggedIn() {
    if (this.getToken() == 'admin') {	// eventually replace with a database query
      return true;
    }
  }

  logout() {
    localStorage.removeItem('LoggedInUser');
    this.myRoute.navigate(['login']);
  }
}
