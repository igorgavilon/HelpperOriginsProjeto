import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDadosMembroComponent } from './editar-dados-membro.component';

describe('EditarDadosMembroComponent', () => {
  let component: EditarDadosMembroComponent;
  let fixture: ComponentFixture<EditarDadosMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDadosMembroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDadosMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
