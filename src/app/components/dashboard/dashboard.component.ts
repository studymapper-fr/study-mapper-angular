import { Component, OnInit } from "@angular/core";
import {
  PRIMARY_MENU_ITEMS,
  SECONDARY_MENU_ITEMS,
} from "./dashboard.constants";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public primaryMenuItems = PRIMARY_MENU_ITEMS;

  public secondaryMenuItems = SECONDARY_MENU_ITEMS;

  public activeTitle: string = PRIMARY_MENU_ITEMS[0].title;

  constructor() {}

  ngOnInit(): void {}

  setActiveTitle(title: string) {
    this.activeTitle = title;
  }
}
