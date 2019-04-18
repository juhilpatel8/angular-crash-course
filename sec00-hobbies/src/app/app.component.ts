import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  hobbies = [
    "Alpha", "Beta",
    "Gamma", "Delta",
    "Epsilon", "Zeta"
  ];
  isHobbiesListComplete = true;
  newHobbyValue = "";

  onClickHobby($id) {
    const index = $id - 1;

    this.hobbies.splice(index, 1);

    if (this.isHobbiesListComplete) {
      this.isHobbiesListComplete = false;
    }
  }

  onKeyUp($event) {
    this.newHobbyValue = $event.target.value;
  }

  onClickInsertNewHobby() {
    this.hobbies.push(this.newHobbyValue);
  }
}
