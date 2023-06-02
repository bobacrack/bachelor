import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-register-aaa',
  templateUrl: './register-aaa.component.html',
  styleUrls: ['./register-aaa.component.css', "../../../src/styles.css"]
})
export class RegisterAAAComponent implements OnInit {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  birthday: Date;
  validated: boolean;
  readonly emailRegex: RegExp = /^.*@hft.de$/;

  constructor(private location: LocationService) {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.validated = false;
  }
  ngOnInit(): void {
    this.location.currentLocation = 'register';
  }

  checkEmailValid(mail: string): boolean {
    return this.emailRegex.test(mail);
  }

  onSubmit() {
    // Hier kannst du die Registrierungslogik implementieren
    // Zum Beispiel: Senden der Daten an einen Server
    console.log('Form submitted!');
    console.log('Vorname:', this.firstName);
    console.log('Nachname:', this.lastName);
    console.log('E-Mail:', this.email);
    console.log('Geburtstag:', this.birthday);
  }

}
