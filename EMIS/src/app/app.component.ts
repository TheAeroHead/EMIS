import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EMIS';
  users: User[];
  error = '';
  success = '';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  	this.getUsers();
  }

  getUsers(): void {
  	this.userService.getAll().subscribe(
		(res: User[]) => {
			this.users = res;
		},
		(err) => {
			this.error = err;
		}
	);
  }
  
}


