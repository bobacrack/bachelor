import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  menuItems: MenuItem[];
  menuHome: MenuItem;
  value: any;
  birthday: Date;
  size: string;

  constructor(private data: DataService, private router: Router) {
  }


  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.size = message)
    this.menuHome = { icon: "pi pi-home" }
    this.menuItems = [
      { label: "register", url: "/register/A" },
      { label: "ReactJS" },
      { label: "HTML" },
      { label: "JavaScript" },
      { label: "PrimeNG" },
    ];
  }

  handleClick(link: string) {
    this.redirectToAnotherPage(link);
  }

  handleKeyDown(event: KeyboardEvent, link: string) {
    if (event.key === 'Enter') {
      this.redirectToAnotherPage(link);
    }
  }

  redirectToAnotherPage(link: string) {
    this.router.navigate(['/register/A']);
  }


}
