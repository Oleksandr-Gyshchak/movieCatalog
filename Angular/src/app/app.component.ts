import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userName: string;

  links: object[] = [
    {
      path: '/movies',
      label: 'Movies',
      active: 'button-active',
      icon: 'list_alt'
    }
  ];

  constructor(

  ) {
  }


  ngOnInit() {

  }


}
