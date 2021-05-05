import { Component, OnInit } from '@angular/core';
import { clientService } from '../../services/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-facturas',
  templateUrl: './ver-facturas.component.html',
  styleUrls: ['./ver-facturas.component.css'],
})
export class VerFacturasComponent implements OnInit {
  invoices: any[];
  cedula: string;
  page: number = 1;
  rol: string = localStorage.getItem('rol');
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _clientService: clientService,
    private _router: Router
  ) {
    this._activatedRoute.params.subscribe((params) => {
      //console.log('Params');
      //console.log(params['id']);
      this.cedula = params['id'];
      this._clientService.getInvoices(params['id']).subscribe((data: any) => {
        console.log('rol' + this.rol);
        this.invoices = data;
        this.invoices.sort(this.compare);
      });
    });
  }

  ngOnInit(): void {}

  update(id: number, ced: string) {
    this._router.navigate(['/actualizaFactura', id, ced]);
  }

  create(ced: string) {
    this._router.navigate(['/crearFactura', ced]);
  }

  compare(a, b) {
    if (a.FEC_FAC < b.FEC_FAC) {
      return -1;
    }
    if (a.FEC_FAC > b.FEC_FAC) {
      return 1;
    }
    return 0;
  }
}
