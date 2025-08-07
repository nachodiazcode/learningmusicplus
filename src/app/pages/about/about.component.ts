import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  nombre = 'Nacho';
  descripcion = 'Soy desarrollador full-stack y músico apasionado por crear soluciones innovadoras.';
}
