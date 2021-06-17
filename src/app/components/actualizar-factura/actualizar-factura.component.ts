import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { clientService } from '../../services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-factura',
  templateUrl: './actualizar-factura.component.html',
  styleUrls: ['./actualizar-factura.component.css'],
})
export class ActualizarFacturaComponent implements OnInit {
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
  numTran: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    public datepipe: DatePipe,
    private _clientService: clientService
  ) {
    this.fecPag = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this._activatedRoute.params.subscribe((params) => {
      console.log('Params');

      this.cedula = params['ced'];
      this.idFac = params['id'];
      console.log('cedula: ' + this.cedula);
      console.log('idFac: ' + this.idFac);
      this._clientService.getOneInvoice(this.idFac).subscribe((data) => {
        console.log('data');
        console.log(data);
        if(data['EST_FAC'] == 0){

          this.factura = data['NUM_FAC'];
          this.fecPag = data['FEC_FAC'];
          this.encargado = data['ENC_FAC'];
          this.formaPago = data['FPA_FAC'];
          this.valor = data['TOT_FAC'];
          this.adelanto = data['ADE_FAC'];
          this.faltante = data['FAL_FAC'];
          this.observacion = data['OBS_FAC'];
        }
      });
    });
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this._clientService
      .updateInvoice(
        this.idFac,
        this.factura,
        this.fecPag,
        this.encargado,
        this.formaPago,
        this.valor,
        this.adelanto,
        this.faltante,
        this.observacion,
        this.numTran
      )
      .subscribe(
        (resp) => {
          Swal.fire({
            title: 'Exito',
            text: 'Factura actualizada correctamente',
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
