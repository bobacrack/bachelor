import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.size = message)
  }

  constructor(private data: DataService) { }

  title = 'Accessibility possibility of implementation';
  menuItems: MenuItem[];

  isExpanded: boolean = false;
  isSize: boolean = false;

  size: string = "size1";

  size1: boolean = true;
  size150: boolean = false;
  size200: boolean = false;

  upSize() {
    if (this.size == "size1")
      this.data.changeMessage("size2");
  }

  downSize() {
    if (this.size1) {
      this.size1 = true;
      this.size150 = false;
      this.size200 = false;
    }
    if (this.size150) {
      this.size1 = true;
      this.size150 = false;
      this.size200 = false;
    }
    if (this.size200) {
      this.size1 = false;
      this.size150 = true;
      this.size200 = false;
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
