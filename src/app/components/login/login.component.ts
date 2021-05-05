import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mail: string;
  password: string;
  cedula: number;
  constructor(private _authService: AuthService, private _router: Router) {
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('rol') == 'Cliente') {
        this.cedula = parseInt(localStorage.getItem('cedula'));
        this._router.navigate(['/verFacturas', this.cedula]);
      } else {
        this._router.navigateByUrl('/verClientes');
      }
    }
  }

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    Swal.fire({
      title: 'Espere',
      text: 'Cargando Información',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
    });

    Swal.showLoading();

    this._authService.login(this.mail, this.password).subscribe(
      (resp) => {
        Swal.close();
        window.location.reload();
      },
      (err) => {
        Swal.fire({
          title: 'Error',
          text: 'Datos incorrectos',
          icon: 'error',
        });
      }
    );
  }
}
