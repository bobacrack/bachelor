import { Component } from '@angular/core';

@Component({
  selector: 'app-register-aaa',
  templateUrl: './register-aaa.component.html',
  styleUrls: ['./register-aaa.component.css', "../../../src/styles.css"]
})
export class RegisterAAAComponent {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  birthday: Date;
  validated: boolean;
  readonly emailRegex: RegExp = /^.*@hft.de$/;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.validated = false;
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
