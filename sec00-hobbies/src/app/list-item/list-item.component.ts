import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() hobbyTitle: string;
  @Input() i: BigInteger;
  @Output() hobbyItemClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClickedHobbyItem($event) {
    this.hobbyItemClicked.emit($event.target.id);
  }

}
