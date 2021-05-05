import { Component, OnInit } from '@angular/core';
import { empleadoService } from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css'],
})
export class ActualizarUsuarioComponent implements OnInit {
  nombre: string = localStorage.getItem('nom');
  apellido: string = localStorage.getItem('ape');
  mail: string = localStorage.getItem('email');
  cedula: string = localStorage.getItem('cedula');
  pass1: string;
  pass2: string;
  constructor(private _empleadoService: empleadoService) {
    console.log("nombre"+this.nombre);
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.pass1 == this.pass2) {
      this._empleadoService
        .updateEmpleado(
          this.nombre,
          this.apellido,
          this.cedula,
          this.mail,
          this.pass1
        )
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'Exito',
              text: 'Usuario actualizado correctamente',
              icon: 'success',
              allowOutsideClick: false,
              showConfirmButton: true,
            });
            
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
    }else{
      Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
      });
    }
  }
}
