import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showMenu= false;
  menuItems = [
    {
      id: 1,
      name: "Home",
      icon: "hero-home"
    },
    {
      id: 2,
      name: "History",
      icon: "hero-clock"
    },
    {
      id: 3,
      name: "Settings",
      icon: "hero-cog"
    },
    {
      id: 4,
      name: "Privacy",
      icon: "hero-shield-exclamation"
    },
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
