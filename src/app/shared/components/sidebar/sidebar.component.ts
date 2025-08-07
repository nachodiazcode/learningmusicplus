import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    { icon: '🏠', label: 'Inicio', link: '/', exact: true },
    { icon: '🎹', label: 'Piano', link: '/cursos/piano' },
    { icon: '🎸', label: 'Guitarra', link: '/cursos/guitarra' },
    { icon: '🎵', label: 'Bajo', link: '/cursos/bajo' },
    { icon: '🔍', label: 'Explorar', link: '/explorar' },
  ];
}
