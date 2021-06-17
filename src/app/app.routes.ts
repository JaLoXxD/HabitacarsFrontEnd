import { Routes, RouterModule } from '@angular/router';

import { VerClientesComponent } from './components/ver-clientes/ver-clientes.component';
import { VerClientes2Component } from "./components/ver-clientes2/ver-clientes2.component";
import { CrearClientesComponent } from './components/crear-clientes/crear-clientes.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { VerAsesoresComponent } from './components/ver-asesores/ver-asesores.component';
import { CrearAsesorComponent } from './components/crear-asesor/crear-asesor.component';
import { InfoClienteComponent } from './components/info-cliente/info-cliente.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { VerFacturasComponent } from "./components/ver-facturas/ver-facturas.component";
import { ActualizarFacturaComponent } from "./components/actualizar-factura/actualizar-factura.component";
import { CrearFacturaComponent } from "./components/crear-factura/crear-factura.component";
import { CallCenterComponent } from "./components/call-center/call-center.component";
import { CrearLlamadaComponent } from "./components/crear-llamada/crear-llamada.component";
import { ActualizarLlamadaComponent } from "./components/actualizar-llamada/actualizar-llamada.component";

const APP_ROUTES: Routes = [
  /* { path: 'home', component: HomeComponent }, */
  {
    path: 'verClientes',
    component: VerClientesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verClientes2',
    component: VerClientes2Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'crearCliente',
    component: CrearClientesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'perfilUsuario',
    component: PerfilUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'actualizarUsuario',
    component: ActualizarUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verAsesores',
    component: VerAsesoresComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crearAsesor',
    component: CrearAsesorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verCliente/:id/:socio',
    component: InfoClienteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'actualizarCliente/:id/:socio',
    component: ActualizarClienteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verFacturas/:id',
    component: VerFacturasComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'actualizaFactura/:id/:ced',
    component: ActualizarFacturaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crearFactura/:ced',
    component: CrearFacturaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'callCenter',
    component: CallCenterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crearLlamada/:ced',
    component: CrearLlamadaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'actualizarLlamada/:ced',
    component: ActualizarLlamadaComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'verClientes' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
