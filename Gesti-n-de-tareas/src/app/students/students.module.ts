import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StudentsModule { }
