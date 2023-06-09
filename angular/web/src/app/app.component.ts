import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { DataService } from './service/data.service';
import { LocationService } from './service/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.size = message)
    this.data.currentLevel.subscribe(level => this.level = level)
    this.data.currentForeground.subscribe(color => this.foreground = color);
    this.data.currenBackground.subscribe(color => this.background = color);
  }

  constructor(private data: DataService, private location: LocationService) {
    document.getElementById
  }

  title = 'Accessibility possibility of implementation';
  menuItems: MenuItem[] = this.location.breadcrumbLocation;

  isExpanded: boolean = false;
  isSize: boolean = false;
  size: string = "size1";
  foreground: string = "#000000";
  background: string = "#ffffff";
  level: string = "A";

  path: string = '';
  isRegister = this.location.isRegister;

  size1: boolean = true;
  size150: boolean = false;
  size200: boolean = false;


  items: MenuItem[] = [
    { label: 'Level A', tabindex: "0", target: "_self" },
    { label: 'Level AA', tabindex: "0", target: "_self" },
    { label: 'Level AAA', tabindex: "0", target: "_self" },
    { separator: true },
    { label: 'Font size up 50%', command: () => this.upSize(), tabindex: "0" },
    { label: 'Font size down 50%', command: () => this.downSize(), tabindex: "0" },

  ]

  getCurrentLocation(): void {
    this.items[0].url = this.location.currentLocation + '/A';
    this.items[1].url = this.location.currentLocation + '/AA';
    this.items[2].url = this.location.currentLocation + '/AAA';
  }

  changeForeground(): void {
    this.data.changeForegorund(this.foreground);
  }

  changeBackground(): void {
    this.data.changeBackgorund(this.background);
  }

  upSize() {
    if (this.size == "size1") {
      this.data.changeMessage("size15");
      return
    }
    if (this.size == "size15") {
      this.data.changeMessage("size2");
      return
    }
    if (this.size == "size2") {
      this.data.changeMessage("size2");
      return
    }
  }

  downSize() {
    if (this.size == "size1") {
      this.data.changeMessage("size1");
      return
    }
    if (this.size == "size15") {
      this.data.changeMessage("size1");
      return
    }
    if (this.size == "size2") {
      this.data.changeMessage("size15");
      return
    }
  }

  expandLinks() {
    this.isExpanded = true;
  }

  collapseLinks() {
    this.isExpanded = false;
  }

  toggleLinks() {
    this.isExpanded = !this.isExpanded;
  }

  expandSize() {
    this.isSize = true;
  }

  collapseSize() {
    this.isSize = false;
  }

  toggleSize() {
    this.isSize = !this.isSize;
  }



}
