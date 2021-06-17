import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class clientService {
  private url = 'https://raptorapi.habitacars.com';  
  /* private url = 'http://127.0.0.1:4000'; */
  constructor(private _http: HttpClient) {
    console.log('Service ready :D');
  }
  getClients() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(`${this.url}/api/client`, { headers });
  }
  getClients2() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(`${this.url}/api/client2`, { headers });
  }
  getOneClient(id: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(`${this.url}/api/oneClient/` + id, { headers });
  }
  getOneClient2(id: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(`${this.url}/api/oneClient2/` + id, { headers });
  }
  getOneInvoice(id: number) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(`${this.url}/api/oneInvoice/` + id, { headers });
  }
  getTelephones(id: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(`${this.url}/api/telephones/` + id, { headers });
  }
  getInvoices(id: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(`${this.url}/api/invoices/` + id, { headers });
  }
  getCalls() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(`${this.url}/api/callCenter`, { headers });
  }
  postClient(
    cedula: string,
    nombre: string,
    apellido: string,
    fecNac: string,
    socio: number,
    provincia: string,
    ciudad: string,
    sector: string,
    calPri: string,
    calSec: string,
    numCas: string,
    referencia: string,
    telCel: string,
    telCon: string
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.post(
      `${this.url}/api/client`,
      {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        fecNac: fecNac,
        socCli: socio,
        numCel: telCel,
        numCon: telCon,
        provincia: provincia,
        ciudad: ciudad,
        sector: sector,
        calPri: calPri,
        calSec: calSec,
        numCas: numCas,
        referencia: referencia,
      },
      { headers }
    );
  }
  postContract(
    cedula: string,
    nombre: string,
    apellido: string,
    fecNac: string,
    socio: number,
    provincia: string,
    ciudad: string,
    sector: string,
    calPri: string,
    calSec: string,
    numCas: string,
    referencia: string,
    telCel: string,
    telCon: string,
    correo: string,
    pass: string,
    numCon: string,
    idEmp: number,
    fecIni: string,
    monto: number,
    deuda: number,
    meses: number,
    cuoIni: number,
    descIns: number,
    cuoMen: number,
    porDes: number,
    desDes: string,
    bien: string,
    idFac: string,
    numTran: number,
    encargado: string,
    formaPago: string
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.post(
      `${this.url}/api/contract`,
      {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        fecNac: fecNac,
        socCli: socio,
        numCel: telCel,
        numCon: telCon,
        provincia: provincia,
        ciudad: ciudad,
        sector: sector,
        calPri: calPri,
        calSec: calSec,
        numCas: numCas,
        referencia: referencia,
        mail: correo,
        contrasena: pass,
        idCon: numCon,
        idEmp: idEmp,
        fecIni: fecIni,
        monto: monto,
        deuda: deuda,
        meses: meses,
        cuoIni: cuoIni,
        descIns: descIns,
        cuoMen: cuoMen,
        porDes: porDes,
        desDes: desDes,
        bien: bien,
        idFac: idFac,
        numTransferencia: numTran,
        encargado: encargado,
        formaPago: formaPago,
      },
      { headers }
    );
  }
  postInvoice(
    cedula: string,
    numTran: number,
    num: string,
    fecha: string,
    fecMax: string,
    encargado: string,
    forPago: string,
    numPago: number,
    total: number,
    adelanto: number,
    faltante: number,
    observacion: string
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.post(
      `${this.url}/api/invoice`,
      {
        cedula: cedula,
        numTransferencia: numTran,
        num: num,
        fecha: fecha,
        fecMax: fecMax,
        encargado: encargado,
        forPago: forPago,
        numPago: numPago,
        total: total,
        adelanto: adelanto,
        faltante: faltante,
        observacion: observacion,
      },
      { headers }
    );
  }
  updateClient(
    cedula: string,
    nombre: string,
    apellido: string,
    fecNac: string,
    socio: number,
    provincia: string,
    ciudad: string,
    sector: string,
    calPri: string,
    calSec: string,
    numCas: string,
    referencia: string,
    telCel: string,
    telCon: string
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.put(
      `${this.url}/api/updateClient`,
      {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        fecNac: fecNac,
        socCli: socio,
        numCel: telCel,
        numCon: telCon,
        provincia: provincia,
        ciudad: ciudad,
        sector: sector,
        calPri: calPri,
        calSec: calSec,
        numCas: numCas,
        referencia: referencia,
      },
      { headers }
    );
  }
  updateContract(
    cedula: string,
    nombre: string,
    apellido: string,
    fecNac: string,
    socio: number,
    provincia: string,
    ciudad: string,
    sector: string,
    calPri: string,
    calSec: string,
    numCas: string,
    referencia: string,
    telCel: string,
    telCon: string,
    correo: string,
    pass: string
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.put(
      `${this.url}/api/updateContract`,
      {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        fecNac: fecNac,
        socCli: socio,
        numCel: telCel,
        numCon: telCon,
        provincia: provincia,
        ciudad: ciudad,
        sector: sector,
        calPri: calPri,
        calSec: calSec,
        numCas: numCas,
        referencia: referencia,
        mail: correo,
        contrasena: pass,
      },
      { headers }
    );
  }
  updateInvoice(
    idFac: number,
    num: string,
    fecha: string,
    encargado: string,
    forPago: string,
    total: number,
    adelanto: number,
    faltante: number,
    observacion: string,
    numTran: number,
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.put(
      `${this.url}/api/updateInvoice`,
      {
        idFac: idFac,
        numTransferencia: numTran,
        num: num,
        fecha: fecha,
        encargado: encargado,
        forPago: forPago,
        total: total,
        adelanto: adelanto,
        faltante: faltante,
        observacion: observacion,
      },
      { headers }
    );
  }

  postCall(
    cedula: string,
    fecha: string,
    hora: string,
    grabacion: string,
    seguimiento: string,
    observacion: string,
    encargado: string
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.post(
      `${this.url}/api/call`,
      {
        cedula: cedula,
        fecha: fecha,
        hora: hora,
        grabacion: grabacion,
        seguimiento: seguimiento,
        observacion: observacion,
        encargado: encargado,
      },
      { headers }
    );
  }
  updateCall(
    cedula: string,
    fecha: string,
    hora: string,
    grabacion: string,
    seguimiento: string,
    observacion: string,
    encargado: string
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.put(
      `${this.url}/api/updateCall`,
      {
        cedula: cedula,
        fecha: fecha,
        hora: hora,
        grabacion: grabacion,
        seguimiento: seguimiento,
        observacion: observacion,
        encargado: encargado,
      },
      { headers }
    );
  }
  deleteClient(
    cedula: string
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.delete(
      `${this.url}/api/deleteClient/`+cedula,
      { headers }
    );
  }
  deleteContract(
    cedula: string
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.delete(
      `${this.url}/api/deleteContract/`+cedula,
      { headers }
    );
  }
}
