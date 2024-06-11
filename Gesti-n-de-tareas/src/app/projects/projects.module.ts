import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProjectsModule { }
