import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    });

  onSubmit() {
    console.log('username: ' + this.loginForm.get('username').value);
    console.log('password: ' + this.loginForm.get('password').value);
    if (this.loginForm.valid) {
      this.auth.sendToken(this.loginForm.value.username);
      if (this.auth.getToken() === 'receptionist') {
        this.myRoute.navigate(['dashboard']);
      } else if (this.auth.getToken() === 'patient') {
        this.myRoute.navigate(['patient']);
      } else if (this.auth.getToken() === 'nurse') {
        this.myRoute.navigate(['nurse']);
      } else if (this.auth.getToken() === 'doctor') {
        this.myRoute.navigate(['doctor']);
      }
    }
  }

  constructor(private fb: FormBuilder, private myRoute: Router,
              private auth: AuthServiceService) { }
  
  getUsers(): void {
  	this.userService.getAll().subscribe(
		(res: User[] => {
			this.userService.users = res;
		},
		(err) => {
		this.error = err;
		}
		);
  }

  ngOnInit() {
  	this.getUsers();
  }
}


