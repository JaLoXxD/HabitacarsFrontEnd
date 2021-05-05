import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clientService } from '../../services/cliente.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-clientes2',
  templateUrl: './ver-clientes2.component.html',
  styleUrls: ['./ver-clientes2.component.css'],
})
export class VerClientes2Component implements OnInit {
  Clients: any[] = [];
  filterPost: string = '';
  page: number = 1;
  rol: string = localStorage.getItem('rol');
  constructor(private _router: Router, private _clientService: clientService) {
    this._clientService.getClients2().subscribe((data: any) => {
      this.Clients = data;
    });
  }

  ngOnInit(): void {}

  verCliente(id: number, socio: number) {
    this._router.navigate(['/verCliente', id, socio]);
  }

  actualizarCliente(id: number, socio: number) {
    this._router.navigate(['/actualizarCliente', id, socio]);
  }

  eliminar(id: string, nombre: String, apellido: String) {
    Swal.fire({
      icon: 'warning',
      title:
        '¿Seguro desea eliminar el cliente ' + nombre + ' ' + apellido + '?',
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
      customClass: {
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this._clientService.deleteClient(id).subscribe(
          (resp) => {
            Swal.fire('Cliente eliminado exitosamente', '', 'success');
          },
          (err) => {
            Swal.fire({
              title: 'Error',
              text:
                'Ocurrio un error al eliminar el usuario, por favor contactar a soporte técnico',
              icon: 'error',
            });
          }
        );
      } else if (result.isDenied) {
        Swal.fire('El cliente no se eliminó', '', 'info');
      }
    });
  }
}
