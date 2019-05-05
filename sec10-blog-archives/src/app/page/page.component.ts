import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  year;
  month;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get("year"));
    console.log(this.route.snapshot.paramMap.get("month"));

    this.year = this.route.snapshot.paramMap.get("year");
    this.month = this.route.snapshot.paramMap.get("month");
  }

  routeToHome() {
    this.router.navigate(["/"])
  }

}
