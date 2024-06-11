import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: any[] = []; // Aquí deberías definir el tipo correcto

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    // Lógica para cargar los proyectos
  }
}