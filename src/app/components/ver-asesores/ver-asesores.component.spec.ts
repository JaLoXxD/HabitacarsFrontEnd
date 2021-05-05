import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAsesoresComponent } from './ver-asesores.component';

describe('VerAsesoresComponent', () => {
  let component: VerAsesoresComponent;
  let fixture: ComponentFixture<VerAsesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAsesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
