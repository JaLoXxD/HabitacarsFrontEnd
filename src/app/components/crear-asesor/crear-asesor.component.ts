import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { empleadoService } from '../../services/empleado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-asesor',
  templateUrl: './crear-asesor.component.html',
  styleUrls: ['./crear-asesor.component.css'],
})
export class CrearAsesorComponent implements OnInit {
  cedula: string;
  nombre: string;
  apellido: string;
  correo: string;
  pass: string;
  roles: any;
  rol: string = '0';
  constructor(
    private _empleadoService: empleadoService,
    private _router: Router
  ) {
    this._empleadoService.getRols().subscribe((data) => {
      this.roles = data;
      console.log(this.roles);
    });
  }
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.rol == '0') {
      Swal.fire({
        title: 'Error',
        text: 'Debe elegir un rol',
        icon: 'error',
      });
    } else {
      this._empleadoService
        .createEmpleado(
          this.cedula,
          this.nombre,
          this.apellido,
          this.correo,
          this.pass,
          this.rol
        )
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'Exito',
              text: 'Asesor creado correctamente',
              icon: 'success',
              allowOutsideClick: false,
              showConfirmButton: true,
            });
            this._router.navigateByUrl('/verAsesores');
          },
          (err) => {
            console.log('cedula:' + this.cedula);
            console.log('Error');
            console.log(err);
            Swal.fire({
              title: 'Error',
              text: 'Revise los campos por favor',
              icon: 'error',
            });
          }
        );
    }
  }
}
