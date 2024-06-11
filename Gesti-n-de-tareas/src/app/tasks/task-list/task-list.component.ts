import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = []; // Aquí deberías definir el tipo correcto

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    // Lógica para cargar las tareas
  }
}
