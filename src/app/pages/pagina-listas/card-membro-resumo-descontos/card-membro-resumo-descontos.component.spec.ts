import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMembroResumoDescontosComponent } from './card-membro-resumo-descontos.component';

describe('CardMembroResumoDescontosComponent', () => {
  let component: CardMembroResumoDescontosComponent;
  let fixture: ComponentFixture<CardMembroResumoDescontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMembroResumoDescontosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMembroResumoDescontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
