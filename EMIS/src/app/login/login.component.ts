import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {AbstractControl} from '@angular/forms';

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
		if((this.loginForm.get('username').value) == 'admin' && (this.loginForm.get('password').value) == 'admin'){
			alert('you fucking did it');
		} else { 
			alert('incorrect login');
		}
  // TODO: Use EventEmitter with form value
   /* passwordMatchValidator(); */
}
	
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
}

/* function passwordMatchValidator(g: FormGroup) {
   if( g.get('password').value === 'admin') {
      alert('passwords match');
   } else {
	   alert('false');
   }
} */

