import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public movieList;

	constructor() { }

	ngOnInit() {
		this.movieList = JSON.parse(sessionStorage.getItem('movie_list'));
	}

}
