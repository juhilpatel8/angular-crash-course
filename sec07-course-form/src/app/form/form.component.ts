import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user = {
    name: ""
  }  

  categories = [
    {
      id: "1",
      title: "Development"
    },
    {
      id: "2",
      title: "Design"
    },
    {
      id: "3",
      title: "Business"
    }
  ];

  data: {}

  constructor() { }

  ngOnInit() {
  }

}
