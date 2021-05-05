import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { clientService } from '../../services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css'],
})
export class CrearFacturaComponent implements OnInit {
  factura: string;
  date: any = new Date();
  fecPag: string;
  encargado: string = localStorage.getItem('name');
  formaPago: string = '0';
  valor: number;
  adelanto: number;
  faltante: number;
  observacion: string;
  cedula: string;
  idFac: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    public datepipe: DatePipe,
    private _clientService: clientService
  ) {
    this.fecPag = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this._activatedRoute.params.subscribe((params) => {
      this.cedula = params['ced'];
    });
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log('entró');
    this._clientService
      .postInvoice(
        this.cedula,
        this.factura,
        this.fecPag,
        this.fecPag,
        this.encargado,
        this.formaPago,
        0,
        this.valor,
        this.adelanto,
        this.faltante,
        this.observacion
      )
      .subscribe(
        (resp) => {
          Swal.fire({
            title: 'Exito',
            text: 'Factura creada correctamente',
            icon: 'success',
            allowOutsideClick: false,
            showConfirmButton: true,
          });
        },
        (err) => {
          Swal.fire({
            title: 'Error',
            text: 'Revise los campos por favor',
            icon: 'error',
          });
        }
      );
  }
}
