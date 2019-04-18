import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sum = 0;
  colors = ["Red", "Blue", "Green", "Orange", "Yellow", "Pink"];

  setSum(event) {
    if (event.target.value.length > 0) {
      this.sum = parseFloat(event.target.value) + 3.99;
    } else {
      this.sum = 0;
    }
  }
}
