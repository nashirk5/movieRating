import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../_services/_auth.service';

const toast = (Swal as any).mixin({
	toast: true,
	position: 'top',
	showConfirmButton: false,
	timer: 3500
});

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;

	constructor(private _fb: FormBuilder, private _router: Router, private _authSrv: AuthService) { }

	ngOnInit() {
		this.loginForm = this._fb.group({
			'email': ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
			'password': ['', Validators.required]
		});
	}

	onLoginSubmit() {
		if(this.loginForm.valid){
			this._authSrv.login(this.loginForm.value);
		} else {
			toast({
				type: 'error',
				text: 'Please enter valid details'
			});
		}
	}

}
