import { Component, EventEmitter, Output, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSlideToggleModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  notificationsCount = 3; // Simulación, luego se puede conectar a un servicio
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Revisar si el usuario ya tenía un tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      this.renderer.addClass(document.body, 'dark-theme'); // Angular Material
      document.documentElement.classList.add('dark'); // Tailwind
    }
  }

  toggleTheme(isDark: boolean) {
    this.isDarkMode = isDark;
    if (isDark) {
      this.renderer.addClass(document.body, 'dark-theme');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
