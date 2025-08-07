import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  standalone: true,
  templateUrl: './learning.component.html',
styleUrls: ['./learning.component.scss']
})
export class LearningComponent {
  progresoGlobal = 68;
  cursosCompletados = 4;
  horasTotales = 125;

  cursosEnProgreso = [
    { titulo: 'Piano Básico', progreso: 40 },
    { titulo: 'Guitarra Intermedio', progreso: 65 },
    { titulo: 'Bajo Avanzado', progreso: 20 }
  ];
}
