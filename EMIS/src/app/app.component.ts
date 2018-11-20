import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMIS';
  
  login(user, pass) {
	user = (<HTMLInputElement>document.getElementById('username')).value;
    pass = (<HTMLInputElement>document.getElementById('password')).value;
	if(user == 'admin' && pass == 'admin') {
		alert('validated')
	}else{
		alert('invalid login')
	}
  }
}


