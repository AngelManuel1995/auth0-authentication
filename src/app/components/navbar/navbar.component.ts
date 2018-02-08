import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../services/auth.service';

@Component({
	selector:'navbar-component',
	templateUrl:'./navbar.component.html'
})

export class NavbarComponent implements OnInit{

	constructor( private auth:AuthService ){
		this.auth.handleAuthentication();
	}

	ngOnInit(){
			
	}

	login(){
		this.auth.login();
	}

	public logout(){
		this.auth.logout();	
	}
}