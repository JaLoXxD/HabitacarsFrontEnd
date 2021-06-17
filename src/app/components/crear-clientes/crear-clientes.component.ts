import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { empleadoService } from '../../services/empleado.service';
import { clientService } from '../../services/cliente.service';
import { province } from '../../data/provinces';
import { city } from '../../data/cities';
import { Canvas, Img, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css'],
})
export class CrearClientesComponent implements OnInit {
  intereses: number;
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
  idEmp: number = 0;
  numCon: string;
  fecIni: string;
  monto: number;
  total: number;
  pago: number;
  meses: number = 0;
  inscripcion: number;
  cuoIni: number;
  descIns: number;
  cuoMen: number;
  porDes: number;
  desDes: string;
  bien: string = '0';
  idFac: string;
  encargado: string = localStorage.getItem('name');
  formaPago: string = '0';
  date: any = new Date();
  actualDate: any;
  numTran: number;
  provinces: any[] = [
    'Azuay',
    'Bolivar',
    'Cañar',
    'Carchi',
    'Chimborazo',
    'Cotopaxi',
    'El Oro',
    'Esmeraldas',
    'Galápagos',
    'Guayas',
    'Imbabura',
    'Loja',
    'Los Ríos',
    'Manabí',
    'Morona Santiago',
    'Napo',
    'Orellana',
    'Pastaza',
    'Pichincha',
    'Santa Elena',
    'Santo Domingo de los Tsáchilas',
    'Sucumbíos',
    'Tungurahua',
    'Zamora Chinchipe',
  ];
  cities: string[] = [
    'Cuenca',
    'Gualaceo',
    'Paute',
    'Sigsig',
    'Girón',
    'San Fernando',
    'Santa Isabel',
    'Pucará',
    'Nabón',
    'Isabela',
    'Santa Cruz',
    'Puerto Baquerizo Moreno',
    'Puerto Ayora',
    'Cañar',
    'Biblián',
    'Azogue',
    'La Troncal',
    'Guaranda',
    'San Miguel de Bolívar',
    'Caluma',
    'Chillanes',
    'Echeandía',
    'Chimbo',
    'La Asunción',
    'La Magdalena',
    'Mira',
    'Bolívar',
    'Tulcán',
    'El Angel',
    'Huaca',
    'Julio Andrade',
    'La Paz',
    'San Gabriel',
    'Riobamba',
    'Guano',
    'Chambo',
    'Colta',
    'Penipe',
    'Guamote',
    'Pallatanga',
    'Alausí',
    'Chunchi',
    'Cumandá',
    'Cajabamba',
    'Huigra',
    'San Andrés',
    'San Juan',
    'Saquisilí',
    'Latacunga',
    'Pujilí',
    'Salcedo',
    'Sigchos',
    'La Maná',
    'Chantillin',
    'El Corazón',
    'Guaytacama',
    'Lasso',
    'Pastocalle',
    'Poalo',
    'Tanicuchi',
    'Toacaso',
    'Mulalo',
    'El Guabo',
    'Huaquillas',
    'Machala',
    'Pasaje',
    'Piñas',
    'Puerto Bolívar',
    'Santa Rosa',
    'Zaruma',
    'Portovelo',
    'Arenillas',
    'Atahualpa',
    'Balsas',
    'Chilla',
    'Marcabeli',
    'Esmeraldas',
    'Guayaquil',
    'Daule',
    'Durán',
    'El Empalme',
    'Santa Elena',
    'La Libertad',
    'Salinas',
    'Loja',
    'Macara',
    'Catamayo',
    'Cariamanga',
    'Celica',
    'Macas',
    'Gualaquiza',
    'Limón Indanza',
    'Santiago',
    'Sucua',
    'Ibarra',
    'Ambuqui',
    'Atuntaqui',
    'Cotacachi',
    'Otavalo',
    'Babahoyo',
    'Buena Fe',
    'Puebloviejo',
    'Quevedo',
    'Ventanas',
    'Portoviejo',
    'Bahía de Caraquez',
    'Chone',
    'El Carmen',
    'Jipijapa',
    'Tena',
    'Archidona',
    'Baeza',
    'El Chaco',
    'Carlos Julio Arosemena Tola',
    'Francisco de Orellana',
    'La Joya de los Sachas',
    'Loreto',
    'Nuevo Rocafuerte',
    'Puyo',
    'Mera',
    'Palora',
    'Shell',
    'Arajuno',
    'Santo Domingo',
    'Alluriquin',
    'Luz de América',
    'Valle Hermoso',
    'Quito',
    'Cayambe',
    'Conocoto',
    'Cumbaya',
    'Machachi',
    'Nueva Loja',
    'Gonzalo Pizarro',
    'Putumayo',
    'Shushufindi',
    'Sucumbios',
    'Ambato',
    'Baños',
    'Cevallos',
    'Izamba',
    'Mocha',
    'Zamora Chinchipe',
    'Nangaritza',
    'Yacuambi',
    'Yantzaza',
  ];

  constructor(
    public datepipe: DatePipe,
    private _empleadoService: empleadoService,
    private _clienteService: clientService
  ) {
    this.cities.sort();
    this.socio = 1;
    this.actualDate = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this._empleadoService.getEmpleados().subscribe((data: any) => {
      this.empleados = data;
      console.log('Empleados');
      console.log(this.empleados);
    });
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    //console.log('entró');
    if (this.socio == 1) {
      this._clienteService
        .postClient(
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
              text: 'Cliente creado correctamente',
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
    } else {
      this._clienteService
        .postContract(
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
          this.pass,
          this.numCon,
          this.idEmp,
          this.actualDate,
          this.total,
          this.pago,
          this.meses,
          this.cuoIni,
          this.descIns,
          this.cuoMen,
          this.porDes,
          this.desDes,
          this.bien,
          this.idFac,
          this.numTran,
          this.encargado,
          this.formaPago
        )
        .subscribe(
          (resp) => {
            Swal.fire({
              title: 'Exito',
              text: 'Cliente creado correctamente',
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

  calculaCuota(change: number) {
    this.cuoIni = (this.monto * 0.05).toFixed(2) as any;
    if (this.inscripcion != null) {
      this.calculos();
    }
  }

  calculaMes(change: number) {
    if (this.porDes != null) {
      this.calculos();
    }
  }

  actualiza(change: number) {
    this.calculos();
  }

  calculos() {
    if (this.meses == 24 || this.meses == 36) {
      this.intereses = 0.12;
    }
    if (this.meses == 48 || this.meses == 60 || this.meses == 84) {
      this.intereses = 0.15;
    }
    if (this.meses == 72) {
      this.intereses = 0.1375;
    }
    if (this.meses == 96) {
      this.intereses = 0.1533;
    }
    if (this.meses == 108) {
      this.intereses = 0.1845;
    }
    if (this.meses == 120) {
      this.intereses = 0.25;
    }
    this.cuoIni =
      this.monto * 0.05 -
      this.monto * 0.05 * (this.porDes / 100) +
      Math.ceil((this.monto * this.intereses + this.monto) / this.meses);
    this.cuoMen = Math.ceil(
      (this.monto * this.intereses + this.monto) / this.meses
    );
    this.total = Math.ceil(
      this.monto * this.intereses + this.monto + this.monto * 0.05
    );
    this.inscripcion = this.monto * 0.05;
    this.descIns = this.monto * 0.05 - this.monto * 0.05 * (this.porDes / 100);
    this.pago = this.total - this.inscripcion - this.cuoMen;
  }

  async generaPDF() {
    PdfMakeWrapper.setFonts(pdfFonts);

    const pdf = new PdfMakeWrapper();
    pdf.styles({ style1: { bold: true } });
    pdf.pageSize('A4');
    pdf.pageMargins([40, 60, 40, 60]);
    pdf.header(
      new Txt('Cotización')
        .bold()
        .alignment('center')
        .fontSize(30)
        .margin([0, 20, 0, 10])
        .color('#94B45B').end
    );
    pdf.add(
      await new Img('http://raptorapi.habitacars.com/api/img')
        .width(100)
        .absolutePosition(40, 20)
        .build()
    );
    pdf.add(
      new Txt(
        '_______________________________________________________________________________________________'
      )
        .style('style1')
        .color('#03548C').end
    );
    pdf.add(
      new Txt(
        'Hola ' +
          this.nombre +
          ' ' +
          this.apellido +
          ', te damos la bienvenida.'
      )
        .fontSize(19)
        .margin([0, 10, 0, 10]).end
    );
    pdf.add(
      new Txt('Fecha: ' + this.actualDate).fontSize(19).margin([0, 10, 0, 10])
        .end
    );
    pdf.add(
      new Txt('Asesor: ' + localStorage.getItem('name'))
        .fontSize(19)
        .margin([0, 10, 0, 10]).end
    );
    pdf.add(
      new Txt('A continuación te presentamos la proforma de tu interés:')
        .fontSize(19)
        .margin([0, 10, 0, 10]).end
    );
    pdf.add(
      new Table([
        [
          new Txt('Inmueble').style('style1').end,
          new Txt('Monto Seleccionado').style('style1').end,
          new Txt('Inscripción').style('style1').end,
        ],
        ['' + this.bien, '' + this.monto, '' + this.inscripcion],
      ])
        .alignment('center')
        .fontSize(19)
        .margin([0, 10, 0, 10]).end
    );
    pdf.add(
      new Txt(
        'Puedes elegir entre las siguientes cuotas mensuales según más te convenga:'
      )
        .fontSize(19)
        .margin([0, 10, 0, 10]).end
    );

    const meses24 = Math.ceil((this.monto * 0.12 + this.monto) / 24);

    const meses36 = Math.ceil((this.monto * 0.12 + this.monto) / 36);

    const meses48 = Math.ceil((this.monto * 0.15 + this.monto) / 48);
    pdf.add(
      new Table([
        [
          new Txt('24 Meses').style('style1').end,
          new Txt('36 Meses').style('style1').end,
          new Txt('48 Meses').style('style1').end,
        ],
        ['' + meses24, '' + meses36, '' + meses48],
      ])
        .alignment('center')
        .fontSize(19)
        .margin([0, 10, 0, 10]).end
    );
    //pdf.create().download('cotizacion.pdf');
    pdf.create().open();
  }
}
