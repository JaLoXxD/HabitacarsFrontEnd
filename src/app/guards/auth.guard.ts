import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  
  cedula: number;

  constructor(private _auth: AuthService, private _router: Router) {}

  canActivate(): boolean {
    if (this._auth.isAuthenticated()) {
      /* if (localStorage.getItem('rol') == 'Cliente') {
        this.cedula = parseInt(localStorage.getItem('cedula'));
        this._router.navigate(['/verFacturas', this.cedula]);
      } */
      return true;
    } else {
      this._router.navigateByUrl('/login');
      window.location.reload();
      return false;
    }
  }
}
