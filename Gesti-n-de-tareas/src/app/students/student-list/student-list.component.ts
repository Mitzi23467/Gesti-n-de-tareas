import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any[] = []; // Aquí deberías definir el tipo correcto

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    // Lógica para cargar los estudiantes
  }
}
