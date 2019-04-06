import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  sReturn = "";

  constructor() { }

  ngOnInit() {
  }

  handleKeyUp($event) {
    this.sReturn = this.correctCase($event.target.value);
  }

  correctCase(str) {
    const correctWord = (sWord) => {
      return sWord.slice(0, 1).toUpperCase() + sWord.slice(1).toLowerCase();
    }

    const parts = str.split(" ");
   
    parts[0] = correctWord(parts[0]);

    for (let i = 1; i < parts.length; i++) {
      if (!["of", "and", "the"].includes(parts[i].toLowerCase())) {
        parts[i] = correctWord(parts[i]);;
      }
    }

    return parts.join(" ");
  }
}
