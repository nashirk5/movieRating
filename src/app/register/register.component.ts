import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/_auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const toast = (Swal as any).mixin({
	toast: true,
	position: 'top',
	showConfirmButton: false,
	timer: 3500
});

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup;

	constructor(private _fb: FormBuilder, private _authSrv: AuthService, private _router: Router) { }

	ngOnInit() {
		this.registerForm = this._fb.group({
			'fullname': ['', Validators.required],
			'email': ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
			'password': ['', Validators.required]
		});
	}

	onRegisterSubmit(){
		let registerData = this.registerForm.value;
		if(this.registerForm.valid){
			this._authSrv.registerUser(registerData);
			toast({
				type: 'success',
				text: 'User has been added successfully.'
			});
			this._router.navigate(['/login']);
		} else {
			toast({
				type: 'error',
				text: 'Please enter valid details'
			});
		}
	}

}
