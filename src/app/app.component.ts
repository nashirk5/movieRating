import { Component } from '@angular/core';
import { AuthService } from './_services/_auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private _authSrv: AuthService, private _router: Router) {}

	onLogoutClick(){
		sessionStorage.removeItem('auth');
		this._router.navigate(['/login']);
	}

}
