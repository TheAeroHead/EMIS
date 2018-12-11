import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

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
      this.auth.sendToken(this.loginForm.value.username);
      if (this.loginForm.get('username').value === 'receptionist' &&
      this.loginForm.get('password').value === 'correct') {
        this.myRoute.navigate(['dashboard']);
      } else if (this.loginForm.get('username').value === 'patient' &&
        this.loginForm.get('password').value === 'correct') {
        this.myRoute.navigate(['patient']);
      } else if (this.loginForm.get('username').value === 'nurse' &&
        this.loginForm.get('password').value === 'correct') {
        this.myRoute.navigate(['nurse']);
      } else if (this.loginForm.get('username').value === 'doctor' &&
        this.loginForm.get('password').value === 'correct') {
        this.myRoute.navigate(['doctor']);
      } else {
        alert('incorrect username or password');
      }
  }

  constructor(private fb: FormBuilder, private myRoute: Router,
              private auth: AuthServiceService) { }

  ngOnInit() {
  }
}


