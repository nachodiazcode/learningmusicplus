# 🎵 LearningMusicPlus

Aplicación moderna en Angular para aprender piano, guitarra y bajo con cursos de alta calidad a tu propio ritmo.  
Construida con **Angular**, **Tailwind CSS** y **Angular Material** para una interfaz moderna, profesional y adaptable.

## 🚀 Características

- 🎨 **Personalización de temas**  
  - Modo claro y modo oscuro  
  - Fondo degradado azul suave en modo claro  
  - Paleta índigo (primario) + cian (acento) con alto contraste

- ⚡ **Angular moderno**  
  - **Componentes standalone** para un enrutado modular  
  - Comunicación entre padre e hijo con **EventEmitter** y **@Input / @Output**  
  - Router con lazy loading

- 🖌 **UI y Estilos**  
  - Tailwind CSS para un diseño rápido y responsivo  
  - Componentes de Angular Material personalizados con SCSS  
  - Variables CSS para fácil ajuste de diseño

- 📚 **Estructura de cursos**  
  - Categorías: Piano, Guitarra, Bajo  
  - Seguimiento de progreso  
  - Secciones de Certificados, Proyectos y Noticias

---

## 🛠 Stack Tecnológico

- **Angular** (vX.X)  
- **Tailwind CSS**  
- **Angular Material**  
- **TypeScript**  
- **SCSS**

---

## 📂 Estructura del Proyecto

```
src/
  app/
    pages/           # Componentes de página (home, explorar, perfil, etc.)
    courses/         # Secciones de cursos (piano, guitarra, bajo)
    layouts/         # Layout principal
    shared/          # Componentes reutilizables (botones, tarjetas, sidebar, toolbar)
    material.module.ts
  styles.scss        # Estilos globales + imports de Tailwind
```

---

## 🖥 Desarrollo

### Instalar dependencias
```bash
npm install
```

### Ejecutar en local
```bash
ng serve
```

### Compilar para producción
```bash
ng build
```

---

## 🔌 Comunicación entre Componentes

Ejemplo con **@Input() y @Output()**:

```ts
// child.component.ts
@Input() curso!: Curso;
@Output() inscribir = new EventEmitter<string>();

inscribirCurso() {
  this.inscribir.emit(this.curso.id);
}
```

```ts
// parent.component.html
<app-course-card
  [curso]="cursoSeleccionado"
  (inscribir)="onInscribir($event)">
</app-course-card>
```

---

## 🗺 Enrutado con Componentes Standalone

Ejemplo:
```ts
export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: '**', redirectTo: 'home' }
];
```

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
