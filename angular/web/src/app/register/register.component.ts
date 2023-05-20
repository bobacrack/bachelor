import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', "../../../src/styles.css"]
})
export class RegisterComponent {
  firstName: string;
  lastName: string;
  email: string;
  birthday: Date;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.birthday = new Date();
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