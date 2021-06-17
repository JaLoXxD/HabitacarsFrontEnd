import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  rol: string = localStorage.getItem('rol');
  name: string = localStorage.getItem('name');
  token: string = '';
  current: string;
  constructor(private _AuthService: AuthService, private _router: Router) {
    if (!localStorage.getItem('token')) {
      this._router.navigateByUrl('/login');
    } else {
      this.token = localStorage.getItem('token');
    }
    this.current = this._router.url;
    console.log(this.current);
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isLogin = true;
    }
  }

  logout() {
    this._AuthService.logout();
    window.location.reload();
  }
}
