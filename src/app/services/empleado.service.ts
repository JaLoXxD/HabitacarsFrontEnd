import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class empleadoService {
  private url = 'https://raptorapi.habitacars.com';
  /* private url = 'http://127.0.0.1:4000';  */
  constructor(private _http: HttpClient) {
    console.log('Service ready :D');
  }
  getEmpleados() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(`${this.url}/api/employe`, { headers });
  }
  getOneEmpleado(id: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(`${this.url}/api/oneEmploye/` + id, { headers });
  }
  getRols() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.get(`${this.url}/api/rols`, { headers });
  }
  createEmpleado(
    cedula: string,
    nombre: string,
    apellido: string,
    mail: string,
    password: string,
    rol: string
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.post(
      `${this.url}/api/createEmploye`,
      {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        rol: rol,
        mail: mail,
        password: password,
      },
      { headers }
    );
  }
  updateEmpleado(
    nombre: string,
    apellido: string,
    cedula: string,
    mail: string,
    password: string
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.put(
      `${this.url}/api/updateEmploye`,
      {
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        mail: mail,
        password: password,
      },
      { headers }
    );
  }
  deleteEmpleado(cedula: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._http.delete(`${this.url}/api/deleteEmploye/${cedula}`, {
      headers,
    });
  }
}
