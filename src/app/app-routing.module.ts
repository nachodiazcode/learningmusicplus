import { Routes } from '@angular/router';

export const routes: Routes = [
  // Página principal
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },

  // Páginas principales
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'contacto', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'explorar', loadComponent: () => import('./pages/explorar/explorar.component').then(m => m.ExplorarComponent) },
  { path: 'proyectos', loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'canciones', loadComponent: () => import('./pages/songs/songs.component').then(m => m.SongsComponent) },
  { path: 'perfil', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) },

  // Secciones de usuario
  { path: 'mi-aprendizaje', loadComponent: () => import('./pages/learning/learning.component').then(m => m.LearningComponent) },
  { path: 'certificados', loadComponent: () => import('./pages/certificates/certificates.component').then(m => m.CertificatesComponent) },
  { path: 'noticias', loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent) },
  { path: 'configuracion', loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },

  // Rutas de cursos
  { path: 'cursos/piano', loadComponent: () => import('./courses/piano/piano.component').then(m => m.PianoComponent) },
  { path: 'cursos/guitarra', loadComponent: () => import('./courses/guitarra/guitarra.component').then(m => m.GuitarraComponent) },
  { path: 'cursos/bajo', loadComponent: () => import('./courses/bajo/bajo.component').then(m => m.BajoComponent) },

  // Página no encontrada
  { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) }
];
