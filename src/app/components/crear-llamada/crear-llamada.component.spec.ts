import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLlamadaComponent } from './crear-llamada.component';

describe('CrearLlamadaComponent', () => {
  let component: CrearLlamadaComponent;
  let fixture: ComponentFixture<CrearLlamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearLlamadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
