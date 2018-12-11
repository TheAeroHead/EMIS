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
    return this.getToken() !== null;	// eventually replace with a database query
  }

  logout() {
    localStorage.removeItem('LoggedInUser');
    this.myRoute.navigate(['login']);
  }
}
