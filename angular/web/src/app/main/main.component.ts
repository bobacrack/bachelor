import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  menuItems: MenuItem[];
  menuHome: MenuItem;
  value: any;

  ngOnInit(): void {
    this.menuHome = { icon: "pi pi-home" }
    this.menuItems = [
      { label: "AngularJS" },
      { label: "ReactJS" },
      { label: "HTML" },
      { label: "JavaScript" },
      { label: "PrimeNG" },
    ];
  }


}
