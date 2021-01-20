import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  movies;

  constructor() { }

  ngOnInit(): void {

    fetch('https://ghibliapi.herokuapp.com/films/?limit=10')
      .then((response) => response.json())
      .then((json) => {
        this.movies = json;
      });
  }

}
