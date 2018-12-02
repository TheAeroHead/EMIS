import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  	
	createForm = this.fb.group({
		firstName: ['', Validators.required],
		lastName: ['', Validators.required],
		password: ['', Validators.required],
		email: ['', Validators.required],
	});
	
	onSubmit() {
		console.log('First Name: ' + this.createForm.get('firstName').value);
		console.log('Last Name: ' + this.createForm.get('lastName').value);
		console.log('Password: ' + this.createForm.get('password').value);
		console.log('Email: ' + this.createForm.get('email').value);
		alert('creating account');
	}
	
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
