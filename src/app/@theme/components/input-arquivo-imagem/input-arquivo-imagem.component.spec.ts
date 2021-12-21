import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputArquivoImagemComponent } from './input-arquivo-imagem.component';

describe('InputArquivoImagemComponent', () => {
  let component: InputArquivoImagemComponent;
  let fixture: ComponentFixture<InputArquivoImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputArquivoImagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputArquivoImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
