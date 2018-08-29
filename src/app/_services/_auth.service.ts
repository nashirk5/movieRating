import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const toast = (Swal as any).mixin({
	toast: true,
	position: 'top',
	showConfirmButton: false,
	timer: 3500
});

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private _router: Router) { }

	login(data){
		var userData = JSON.parse(sessionStorage.getItem('userData'));
		if(userData != null){
			if(userData['email'] != data['email']){
				toast({
					type: 'error',
					text: 'Invalid email address'
				});
			} else if(userData['password'] != data['password']){
				toast({
					type: 'error',
					text: 'Invalid password'
				});
			} else {
				this.createMovie();
				sessionStorage.setItem('auth', '0');
				toast({
					type: 'success',
					text: 'Logged in succesfuuly'
				});
				this._router.navigate(['/home']);
			}
		} else {
			toast({
				type: 'warning',
				text: 'Please register a user'
			});
			this._router.navigate(['/register']);
		}
	}

	registerUser(data){
		sessionStorage.setItem('userData', JSON.stringify(data));
	}

	loginCheck(){
		return !!sessionStorage.getItem('userData');
	}

	loginStatus(){
		return !!sessionStorage.getItem('auth');
	}

	createMovie(){
		var data = [
			{'id': '1', 'name': 'SATYAMEVA JAYATE', 'release': 'SEP 07, 2018', 'rate': '3,432'},
			{'id': '2', 'name': 'GOLD', 'release': 'SEP 07, 2018', 'rate': '4,326'},
			{'id': '3', 'name': 'RACE 3', 'release': 'SEP 07, 2018', 'rate': '2,765'},
			{'id': '4', 'name': 'GENIUS', 'release': 'SEP 14, 2018', 'rate': '4,222'},
			{'id': '5', 'name': 'DANGAL', 'release': 'SEP 14, 2018', 'rate': '5,489'},
			{'id': '6', 'name': 'SULTAN', 'release': 'SEP 14, 2018', 'rate': '4,118'},
			{'id': '7', 'name': 'DHADAK', 'release': 'OCT 21, 2018', 'rate': '2,789'},
			{'id': '8', 'name': 'MULK', 'release': 'OCT 21, 2018', 'rate': '3,678'},
			{'id': '9', 'name': 'RAZI', 'release': 'OCT 21, 2018', 'rate': '1,098'},
			{'id': '10', 'name': 'OCTOBER', 'release': 'OCT 21, 2018', 'rate': '2,095'},
		]

		sessionStorage.setItem('movie_list', JSON.stringify(data));
	}

}