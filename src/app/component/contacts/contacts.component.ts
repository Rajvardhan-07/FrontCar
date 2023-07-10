import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  
  name!: string;
  email!: string;
  message!: string;

  submitForm() {
    // Here you can implement your desired logic, such as sending the form data to a backend server
    console.log('Form submitted!');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
  }

}
