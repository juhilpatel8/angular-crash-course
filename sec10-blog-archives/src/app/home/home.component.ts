import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dates = [
    {
      year: "2017",
      month: "1"
    },
    {
      year: "2017",
      month: "2"
    },
    {
      year: "2017",
      month: "3"
    },
    {
      year: "2017",
      month: "4"
    },
    {
      year: "2017",
      month: "5"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
