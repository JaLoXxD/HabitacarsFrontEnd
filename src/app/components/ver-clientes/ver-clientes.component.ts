import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clientService } from '../../services/cliente.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css'],
})
export class VerClientesComponent implements OnInit {
  Clients: any[] = [];
  rol: string = localStorage.getItem('rol');
  constructor(private _router: Router, private _clientService: clientService) {
    this._clientService.getClients().subscribe((data: any) => {
      this.Clients = data;
      console.log('data');
      console.log(this.Clients);
    });
  }

  ngOnInit(): void {}

  filterPost: string = '';
  page: number = 1;
  verCliente(id: number, socio: number) {
    this._router.navigate(['/verCliente', id, socio]);
  }

  actualizarCliente(id: number, socio: number) {
    this._router.navigate(['/actualizarCliente', id, socio]);
  }

  verFacturas(id: number) {
    this._router.navigate(['/verFacturas', id]);
  }

  llamada(id: number) {
    this._router.navigate(['/crearLlamada', id]);
  }

  eliminar(id: string, nombre: String, apellido: String) {
    Swal.fire({
      icon: 'warning',
      title:
        '¿Seguro desea eliminar el cliente ' + nombre + ' ' + apellido + '?',
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
        this._clientService.deleteContract(id).subscribe(
          (resp) => {
            Swal.fire('Cliente eliminado exitosamente', '', 'success');
          },
          (err) => {
            Swal.fire({
              title: 'Error',
              text: 'Ocurrio un error al eliminar el usuario, por favor contactar a soporte técnico',
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
