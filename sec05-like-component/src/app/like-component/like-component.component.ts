import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like-component',
  templateUrl: './like-component.component.html',
  styleUrls: ['./like-component.component.css']
})
export class LikeComponentComponent implements OnInit {
  @Input() likesCount: String;
  @Input() isActive: Boolean;
  @Output() iconClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onIconClicked() {
    this.iconClicked.emit("liked");
  }
}
