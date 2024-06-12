// proyectos.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  obtenerProyectos(): void {
    this.authService.getProyectos().subscribe(
      (data) => {
        console.log('Datos de proyectos obtenidos:', data); // Para depuración
        this.proyectos = data;
      },
      (error) => {
        console.error('Error al obtener proyectos:', error);
      }
    );
  }
}
