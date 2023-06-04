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
  }

  constructor(private data: DataService, private location: LocationService) { }

  title = 'Accessibility possibility of implementation';
  menuItems: MenuItem[] = this.location.breadcrumbLocation;

  isExpanded: boolean = false;
  isSize: boolean = false;
  size: string = "size1";

  path: string = '';
  isRegister = this.location.isRegister;

  size1: boolean = true;
  size150: boolean = false;
  size200: boolean = false;

  items: MenuItem[] = [
    { label: 'Level A' },
    { label: 'Level AA' },
    { label: 'Level AAA' },
  ]

  getCurrentLocation(): void {
    this.items[0].url = this.location.currentLocation + '/A';
    this.items[1].url = this.location.currentLocation + '/AA';
    this.items[2].url = this.location.currentLocation + '/AAA';
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
