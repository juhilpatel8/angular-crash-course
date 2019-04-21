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
    this.sReturn = this.translateToTitleCase($event.target.value);
  }

  // Into unmerciful the entreating stronger to of word guessing.
  // the OLD MAN aND THE sEa  =>  The Old Man and the Sea 
  translateToTitleCase(str) {
    const translateWord = (sWord) => {
      return sWord.slice(0, 1).toUpperCase() + sWord.slice(1).toLowerCase();
    }

    const parts = str.split(" ");
   
    parts[0] = translateWord(parts[0]);

    for (let i = 1; i < parts.length; i++) {
      if (!["of", "and", "the", "to"].includes(parts[i].toLowerCase())) {
        parts[i] = translateWord(parts[i]);;
      } else {
        parts[i] = parts[i].toLowerCase();  // Make sure is's the correct case, when the sentence (or parts of it) is given in uppercase.
      }
    }

    return parts.join(" ");
  }
}
