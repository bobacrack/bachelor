import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  currentLocation: string;
  breadcrumbLocation: MenuItem[] = [];
  isRegister: boolean = false;

  constructor() { }


  appendMenu(menuItem: MenuItem) {
    this.breadcrumbLocation.push(menuItem);
    return;
  }

  removeMenu() {
    this.breadcrumbLocation.pop();
    return;
  }

}
