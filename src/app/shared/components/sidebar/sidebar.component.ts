import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

type MenuItem = { icon: string; label: string; link: string; exact?: boolean };

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() open = false;
  @Output() closed = new EventEmitter<void>();

  constructor(private router: Router) {
    this.router.events.subscribe(() => this.closed.emit());
  }

  @HostListener('document:keydown.escape') onEsc() { if (this.open) this.closed.emit(); }
  onBackdropClick() { this.closed.emit(); }
  onLinkClick() { this.closed.emit(); }

  // Secciones (Material Symbols Outlined)
  cursos: MenuItem[] = [
    { icon: 'home',             label: 'Inicio',     link: '/',               exact: true },
    { icon: 'piano',            label: 'Piano',      link: '/cursos/piano' },
    { icon: 'music_note',       label: 'Guitarra',   link: '/cursos/guitarra' },
    { icon: 'audiotrack',       label: 'Bajo',       link: '/cursos/bajo' },
    { icon: 'travel_explore',   label: 'Explorar',   link: '/explorar' },
  ];

  cuenta: MenuItem[] = [
    { icon: 'folder_open',          label: 'Proyectos',     link: '/proyectos' }, // ojo: '/proyectos'
    { icon: 'workspace_premium',    label: 'Certificados',  link: '/certificados' },
    { icon: 'newspaper',            label: 'Noticias',      link: '/noticias' },
    { icon: 'person',               label: 'Perfil',        link: '/perfil' },
    { icon: 'settings',             label: 'Configuración', link: '/configuracion' },
  ];
}
