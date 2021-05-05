import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarLlamadaComponent } from './actualizar-llamada.component';

describe('ActualizarLlamadaComponent', () => {
  let component: ActualizarLlamadaComponent;
  let fixture: ComponentFixture<ActualizarLlamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarLlamadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
