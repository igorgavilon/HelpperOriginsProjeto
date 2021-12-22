import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListaHistoricoComponent } from './card-lista-historico.component';

describe('CardListaHistoricoComponent', () => {
  let component: CardListaHistoricoComponent;
  let fixture: ComponentFixture<CardListaHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListaHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
