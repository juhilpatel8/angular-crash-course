import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input() title;
  isExpanded = false;
  buttonCaption = "Expand";

  constructor() { }

  ngOnInit() {
  }

  onClickButton() {
    this.isExpanded = !this.isExpanded;
    this.buttonCaption = this.isExpanded ? "Collapse" : "Expand";
  }
}
