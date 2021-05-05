import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
})
export class PerfilUsuarioComponent implements OnInit {
  name: string = localStorage.getItem('name');
  rol: string = localStorage.getItem('rol');
  email: string = localStorage.getItem('email');
  constructor() {}

  ngOnInit(): void {}
}
