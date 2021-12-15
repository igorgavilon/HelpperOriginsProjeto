import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesListaHistoricoComponent } from './detalhes-lista-historico.component';

describe('DetalhesListaHistoricoComponent', () => {
  let component: DetalhesListaHistoricoComponent;
  let fixture: ComponentFixture<DetalhesListaHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesListaHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesListaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
