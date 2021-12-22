import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDadosAtividadeComponent } from './editar-dados-atividade.component';

describe('EditarDadosAtividadeComponent', () => {
  let component: EditarDadosAtividadeComponent;
  let fixture: ComponentFixture<EditarDadosAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDadosAtividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDadosAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
