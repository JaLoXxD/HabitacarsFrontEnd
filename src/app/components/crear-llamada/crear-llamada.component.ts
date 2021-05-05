import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { clientService } from '../../services/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-llamada',
  templateUrl: './crear-llamada.component.html',
  styleUrls: ['./crear-llamada.component.css'],
})
export class CrearLlamadaComponent implements OnInit {
  cedula: string;
  fecha: string;
  date: any = new Date();
  hora: string;
  grabacion: string;
  seguimiento: string;
  observacion: string;
  encargado: string = localStorage.getItem('name');

  constructor(
    public datepipe: DatePipe,
    private _clientService: clientService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.fecha = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.hora = this.datepipe.transform(this.date, 'HH:mm');
    this._activatedRoute.params.subscribe((params: any) => {
      this.cedula = params['ced'];
    });
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this._clientService
      .postCall(
        this.cedula,
        this.fecha,
        this.hora,
        this.grabacion,
        this.seguimiento,
        this.observacion,
        this.encargado
      )
      .subscribe(
        (resp) => {
          Swal.fire({
            title: 'Exito',
            text: 'Llamada creada correctamente',
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
