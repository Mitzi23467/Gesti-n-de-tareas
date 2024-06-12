import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TareasComponent } from './tareas/tareas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ActividadesComponent } from './actividades/actividades.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'graficas', component: GraficasComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
