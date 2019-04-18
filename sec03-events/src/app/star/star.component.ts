import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  classValue = "icon-star";

  constructor() { }

  ngOnInit() {
  }

  onClickStar() {
    this.classValue = 
      this.classValue === "icon-star-empty" ? "icon-star" : "icon-star-empty";
  }
}
