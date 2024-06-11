import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor() {}

  login() {
    // Implementa la lógica de inicio de sesión aquí
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
