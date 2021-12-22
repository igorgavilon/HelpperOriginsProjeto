import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMembroHistoricoComponent } from './card-membro-historico.component';

describe('CardMembroHistoricoComponent', () => {
  let component: CardMembroHistoricoComponent;
  let fixture: ComponentFixture<CardMembroHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMembroHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMembroHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
