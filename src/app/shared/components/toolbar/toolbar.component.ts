import { Component, EventEmitter, Output, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSlideToggleModule, ReactiveFormsModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() search = new EventEmitter<string>();

  notificationsCount = 3;
  isDarkMode = false;

  // 💡 control del buscador (reactive forms)
  searchCtrl = new FormControl<string>('', { nonNullable: true });

  // menú usuario por click
  menuOpen = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    this.setTheme(savedTheme === 'dark');

    // emitir búsqueda al teclear (con debounce)
    this.searchCtrl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(q => this.search.emit(q.trim()));
  }

  // usado por (ngSubmit) y por el botón 🔎 en móvil
  submitSearch(): void {
    const q = this.searchCtrl.value.trim();
    if (q) this.search.emit(q);
  }

  onToggleSidebar(): void { this.toggleSidebar.emit(); }
  toggleUserMenu(): void { this.menuOpen = !this.menuOpen; }
  closeUserMenu(): void { this.menuOpen = false; }

  toggleTheme(isDark: boolean): void {
    this.setTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  private setTheme(isDark: boolean): void {
    this.isDarkMode = isDark;
    if (isDark) {
      this.renderer.addClass(document.body, 'dark-theme');
      document.documentElement.classList.add('dark');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      document.documentElement.classList.remove('dark');
    }
  }
}
