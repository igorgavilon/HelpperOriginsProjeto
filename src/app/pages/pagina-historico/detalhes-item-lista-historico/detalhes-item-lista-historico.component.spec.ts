import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesItemListaHistoricoComponent } from './detalhes-item-lista-historico.component';

describe('DetalhesItemListaHistoricoComponent', () => {
  let component: DetalhesItemListaHistoricoComponent;
  let fixture: ComponentFixture<DetalhesItemListaHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesItemListaHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesItemListaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
