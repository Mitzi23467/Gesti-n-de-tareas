import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent {
  constructor(private router: Router) {}

  redirectTo(view: string): void {
    if (view === 'tareas') {
      this.router.navigate(['/tareas']);
    } else if (view === 'proyecto') {
      this.router.navigate(['/proyecto']);
    }else if (view === 'graficas') {
      this.router.navigate(['/graficas']);
    }
  }
}
