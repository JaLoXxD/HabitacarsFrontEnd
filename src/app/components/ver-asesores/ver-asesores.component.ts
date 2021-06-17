import { Component, OnInit } from '@angular/core';
import { empleadoService } from '../../services/empleado.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ver-asesores',
  templateUrl: './ver-asesores.component.html',
  styleUrls: ['./ver-asesores.component.css'],
})
export class VerAsesoresComponent implements OnInit {
  asesores: any[];
  page: number = 1;
  rol: string = localStorage.getItem('rol');
  constructor(private _empleadoService: empleadoService) {
    _empleadoService.getEmpleados().subscribe((data: any) => {
      this.asesores = data;
      this.asesores.sort(function (a, b) {
        if (a.ID_EMP > b.ID_EMP) {
          return 1;
        }
        if (a.ID_EMP < b.ID_EMP) {
          return -1;
        }
        return 0;
      });
      console.log(this.asesores);
    });
  }

  ngOnInit(): void {}

  eliminar(id: string, nombre: String, apellido: String) {
    Swal.fire({
      icon: 'warning',
      title:
        '¿Seguro desea eliminar el empleado ' + nombre + ' ' + apellido + '?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
      customClass: {
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this._empleadoService.deleteEmpleado(id).subscribe(
          (resp) => {
            Swal.fire('Empleado eliminado exitosamente', '', 'success');
          },
          (err) => {
            Swal.fire({
              title: 'Error',
              text:
                'Ocurrio un error al eliminar el empleado, por favor contactar a soporte técnico',
              icon: 'error',
            });
          }
        );
      } else if (result.isDenied) {
        Swal.fire('El empleado no se eliminó', '', 'info');
      }
    });
  }
}
