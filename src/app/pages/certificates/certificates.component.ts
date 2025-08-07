import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  standalone: true,
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  certificados = [
    {
      titulo: 'Piano Básico',
      fecha: '03 agosto 2025',
      codigo: 'LMP-PIANO-001',
      archivo: 'piano-certificado.pdf'
    },
    {
      titulo: 'Guitarra Intermedio',
      fecha: '25 julio 2025',
      codigo: 'LMP-GUIT-002',
      archivo: 'guitarra-certificado.pdf'
    },
    {
      titulo: 'Bajo Avanzado',
      fecha: '15 julio 2025',
      codigo: 'LMP-BAJO-003',
      archivo: 'bajo-certificado.pdf'
    }
  ];

  descargar(nombreArchivo: string) {
    window.open(`/assets/certificates/${nombreArchivo}`, '_blank');
  }
}
