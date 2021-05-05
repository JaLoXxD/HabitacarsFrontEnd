import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerClientes2Component } from './ver-clientes2.component';

describe('VerClientes2Component', () => {
  let component: VerClientes2Component;
  let fixture: ComponentFixture<VerClientes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerClientes2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerClientes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
