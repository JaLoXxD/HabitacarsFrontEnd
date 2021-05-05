import { Component, OnInit } from '@angular/core';
import { empleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-ver-asesores',
  templateUrl: './ver-asesores.component.html',
  styleUrls: ['./ver-asesores.component.css'],
})
export class VerAsesoresComponent implements OnInit {
  asesores: any[];
  page: number = 1;
  constructor(private _empleadoService: empleadoService) {
    _empleadoService.getEmpleados().subscribe((data: any) => {
      this.asesores = data;
      this.asesores.sort(function (a, b) {
        if (a.ID_EMP > b.ID_EMP) {
          return 1;
        }
        if (a.ID_EMP < b.ID_EMP) {
          return -1;
        }
        return 0;
      });
      console.log(this.asesores);
    });
  }

  ngOnInit(): void {}
}
