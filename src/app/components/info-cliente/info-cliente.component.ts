import { Component, OnInit } from '@angular/core';
import { clientService } from '../../services/cliente.service';
import { empleadoService } from '../../services/empleado.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.component.html',
  styleUrls: ['./info-cliente.component.css'],
})
export class InfoClienteComponent implements OnInit {
  option: String = 'InfoGeneral';
  client: any = {};
  employe: any = {};
  telephones: any[] = [];
  socio: number;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _clientService: clientService,
    private _empleadoService: empleadoService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      //console.log('Params:');
      //console.log(params['id'] + ' ' + params['socio']);
      this.socio = params['socio'];
      if (params['socio'] == 0) {
        this._clientService
          .getOneClient(params['id'])
          .subscribe((data: any) => {
            this.client = data;
            this.client.FECI_CON = this.client.FECI_CON.split('-')
              .reverse()
              .join('-');
            this._clientService
              .getTelephones(params['id'])
              .subscribe((data: any) => {
                this.telephones = data;
              });
            this._empleadoService
              .getOneEmpleado(this.client.ID_EMP)
              .subscribe((data: any) => {
                this.employe = data;
                console.log('Empleado');
                console.log(data);
              });
          });
      } else {
        this._clientService
          .getOneClient2(params['id'])
          .subscribe((data: any) => {
            this.client = data;
          });
        this._clientService
          .getTelephones(params['id'])
          .subscribe((data: any) => {
            this.telephones = data;
          });
      }
    });
  }

  ngOnInit(): void {}

  cambia(value: String){
    this.option = value;
  }
}
