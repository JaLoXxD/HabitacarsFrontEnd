import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /* private url = 'https://raptorapi.habitacars.com'; */
  private url = 'http://127.0.0.1:4000';
  private userToken: string;
  constructor(private _http: HttpClient) {
    this.leerToken();
  }
  login(mail: string, password: string) {
    const authData = {
      mail: mail,
      password: password,
    };

    return this._http.post(`${this.url}/api/login`, authData).pipe(
      map((resp) => {
        this.guardarToken(resp['token']);
        this.guardarUsuarioGlobal(resp['user']);
        return resp;
      })
    );
  }
  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }
  private guardarToken(token: string) {
    this.userToken = token;
    localStorage.setItem('token', token);
    let hoy = new Date();
    hoy.setHours(hoy.getHours() + 3);
    localStorage.setItem('expira', hoy.getTime().toString());
  }
  private guardarUsuarioGlobal(usuario: any) {
    localStorage.setItem('rol', usuario['DES_ROL']);
    localStorage.setItem('id', usuario['ID_CLI']);
    localStorage.setItem('name', usuario['NOM_PER'] + ' ' + usuario['APE_PER']);
    localStorage.setItem('nom', usuario['NOM_PER']);
    localStorage.setItem('ape', usuario['APE_PER']);
    localStorage.setItem('email', usuario['MAIL_CUE']);
    localStorage.setItem('cedula', usuario['CED_PER']);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }
  isAuthenticated(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);
    console.log('expira: ' + expiraDate);
    console.log('new Date: ' + new Date());
    const fecha_actual = new Date();
    expiraDate.toLocaleTimeString('es-ES');
    if (expiraDate > fecha_actual) {
      return true;
    } else {
      this.logout();
      return false;
    }
  }
}
