import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: any[] = [];
  loading = false;
  error = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loading = true;
    this.authService.getTareas()
      .subscribe(
        (data: any[]) => {
          this.tareas = data;
          this.loading = false;
        },
        error => {
          console.error('Error obteniendo tareas:', error);
          this.error = 'Error obteniendo tareas';
          this.loading = false;
        }
      );
  }

}
