import { Component, OnInit } from '@angular/core';
import { clientService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call-center',
  templateUrl: './call-center.component.html',
  styleUrls: ['./call-center.component.css'],
})
export class CallCenterComponent implements OnInit {
  calls: any[];
  filterPost: string = '';
  page: number = 1;
  constructor(private _router: Router, private _clientService: clientService) {
    _clientService.getCalls().subscribe((data: any) => {
      console.log('data');
      this.calls = data;
      this.calls.sort(this.compare);
      console.log(this.calls);
    });
  }

  ngOnInit(): void {}

  update(ced: number) {
    this._router.navigate(['/actualizarLlamada', ced]);
  }

  compare(a, b) {
    if (a.ID_CAL > b.ID_CAL) {
      return -1;
    }
    if (a.ID_CAL < b.ID_CAL) {
      return 1;
    }
    return 0;
  }
}
