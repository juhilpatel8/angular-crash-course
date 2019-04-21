import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    isLiked: false,
    likesCount: 39
  };

  incrementLikes() {
    this.tweet.isLiked = !this.tweet.isLiked;
    this.tweet.likesCount += this.tweet.isLiked ? 1 : -1;
  }
}
