import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { clientService } from '../../services/cliente.service';
import { empleadoService } from '../../services/empleado.service';
import { province } from '../../data/provinces';
import { city } from '../../data/cities';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css'],
})
export class ActualizarClienteComponent implements OnInit {
  empleados: any;
  client: number;
  cedula: string;
  nombre: string;
  apellido: string;
  estado: number = 0;
  rol: number;
  fecNac: string = '';
  socio: number;
  provincia: string;
  ciudad: string;
  sector: string;
  calPri: string;
  calSec: string;
  numCas: string;
  referencia: string;
  TelCel: string;
  TelCon: string;
  correo: string;
  pass: string;
  cities: any[] = city;
  provinces: any[] = province;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _clientService: clientService,
    private _empleadoService: empleadoService,
    private _router: Router
  ) {
    this.cities.sort();
    this._activatedRoute.params.subscribe((params) => {
      this.cedula = params['id'];
      this.socio = params['socio'];
      if (this.socio == 0) {
        this._clientService.getOneClient(this.cedula).subscribe((data: any) => {
          console.log('data');
          console.log(data);
          this.fecNac = data.FECN_CLI;
          this.nombre = data.NOM_PER;
          this.apellido = data.APE_PER;
          this.provincia = data.PRO_DIR;
          this.ciudad = data.CIU_DIR;
          this.sector = data.SEC_DIR;
          this.calPri = data.CALP_DIR;
          this.calSec = data.CALS_DIR;
          this.numCas = data.NCA_DIR;
          this.referencia = data.REF_DIR;
          this.correo = data.MAIL_CUE;
          this.pass = data.CON_CUE;
        });
        this._empleadoService.getEmpleados().subscribe((data) => {
          this.empleados = data;
          console.log('Empleados');
          console.log(this.empleados);
        });
      } else {
        this._clientService
          .getOneClient2(this.cedula)
          .subscribe((data: any) => {
            console.log('data');
            console.log(data);
            this.fecNac = data.FECN_CLI;
            this.nombre = data.NOM_PER;
            this.apellido = data.APE_PER;
            this.provincia = data.PRO_DIR;
            this.ciudad = data.CIU_DIR;
            this.sector = data.SEC_DIR;
            this.calPri = data.CALP_DIR;
            this.calSec = data.CALS_DIR;
            this.numCas = data.NCA_DIR;
            this.referencia = data.REF_DIR;
          });
      }

      this._clientService.getTelephones(this.cedula).subscribe((data: any) => {
        console.log('data');
        console.log(data);
        this.TelCel = data[0].NUM_TEL;
        this.TelCon = data[1].NUM_TEL;
      });
    });
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.socio == 0) {
      this._clientService
        .updateContract(
          this.cedula,
          this.nombre,
          this.apellido,
          this.fecNac,
          this.socio,
          this.provincia,
          this.ciudad,
          this.sector,
          this.calPri,
          this.calSec,
          this.numCas,
          this.referencia,
          this.TelCel,
          this.TelCon,
          this.correo,
          this.pass
        )
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'Exito',
              text: 'Cliente actualizado correctamente',
              icon: 'success',
              allowOutsideClick: false,
              showConfirmButton: true,
            });
            this._router.navigateByUrl('/verClientes');
          },
          (err) => {
            Swal.fire({
              title: 'Error',
              text: 'Revise los campos por favor',
              icon: 'error',
            });
          }
        );
    } else {
      this._clientService
        .updateClient(
          this.cedula,
          this.nombre,
          this.apellido,
          this.fecNac,
          this.socio,
          this.provincia,
          this.ciudad,
          this.sector,
          this.calPri,
          this.calSec,
          this.numCas,
          this.referencia,
          this.TelCel,
          this.TelCon
        )
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'Exito',
              text: 'Cliente actualizado correctamente',
              icon: 'success',
              allowOutsideClick: false,
              showConfirmButton: true,
            });
            this._router.navigateByUrl('/verClientes');
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
}
