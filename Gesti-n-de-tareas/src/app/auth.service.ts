import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private apiUrl = 'http://localhost:3000/api'; // Asegúrate de que esta URL apunte a tu backend

  constructor(private http: HttpClient) {}

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(correoInstitucional: string, contrasena: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<any>(url, { correoInstitucional, contrasena }).pipe(
      tap(response => {
        if (response.success) {
          this.loggedIn.next(true); // Actualiza el estado de autenticación
        }
      })
    );
  }

  logout(): void {
    this.loggedIn.next(false);
  }

  getTareas(): Observable<any[]> {
    const url = `${this.apiUrl}/tareas`;
    return this.http.get<any[]>(url);
  }

  getProyectos(): Observable<any[]> {
    const url = `${this.apiUrl}/proyectos`;
    return this.http.get<any[]>(url);
  }
}


