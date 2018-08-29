import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/_auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(private _authSrv: AuthService, private _router: Router) { }

	canActivate(): boolean {
		if (this._authSrv.loginStatus()) {
			return true;
		} else {
			this._router.navigate(['/login']);
			return false;
		}
	}
}