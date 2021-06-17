import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { VerClientesComponent } from './components/ver-clientes/ver-clientes.component';

import { APP_ROUTING } from './app.routes';
import { CrearClientesComponent } from './components/crear-clientes/crear-clientes.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { CrearAsesorComponent } from './components/crear-asesor/crear-asesor.component';
import { VerAsesoresComponent } from './components/ver-asesores/ver-asesores.component';
import { InfoClienteComponent } from './components/info-cliente/info-cliente.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { VerFacturasComponent } from './components/ver-facturas/ver-facturas.component';
import { VerClientes2Component } from './components/ver-clientes2/ver-clientes2.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ActualizarFacturaComponent } from './components/actualizar-factura/actualizar-factura.component';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
//PAGINACION
import { NgxPaginationModule } from 'ngx-pagination';
import { CallCenterComponent } from './components/call-center/call-center.component';
import { ActualizarLlamadaComponent } from './components/actualizar-llamada/actualizar-llamada.component';
import { CrearLlamadaComponent } from './components/crear-llamada/crear-llamada.component';
import { CarrouselComponent } from '../app/components/carrousel/carrousel.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VerClientesComponent,
    CrearClientesComponent,
    LoginComponent,
    HomeComponent,
    PerfilUsuarioComponent,
    ActualizarUsuarioComponent,
    CrearAsesorComponent,
    VerAsesoresComponent,
    InfoClienteComponent,
    ActualizarClienteComponent,
    VerFacturasComponent,
    VerClientes2Component,
    FilterPipe,
    ActualizarFacturaComponent,
    CrearFacturaComponent,
    CallCenterComponent,
    ActualizarLlamadaComponent,
    CrearLlamadaComponent,
    CarrouselComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
