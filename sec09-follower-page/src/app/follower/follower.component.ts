import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  followers;
  http;
  url = "https://api.github.com/users/mosh-hamedani/followers";

  constructor(http: HttpClient) { 
    this.http = http;
  }

  ngOnInit() {
    this.http.get(this.url)
        .subscribe(response => {
          this.followers = response;
        });
  }

}
