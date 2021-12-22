import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarNovaAtividadeComponent } from './cadastrar-nova-atividade.component';

describe('CadastrarNovaAtividadeComponent', () => {
  let component: CadastrarNovaAtividadeComponent;
  let fixture: ComponentFixture<CadastrarNovaAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarNovaAtividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarNovaAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
