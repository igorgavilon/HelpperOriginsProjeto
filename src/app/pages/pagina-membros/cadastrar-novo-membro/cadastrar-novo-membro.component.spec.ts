import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarNovoMembroComponent } from './cadastrar-novo-membro.component';

describe('CadastrarNovoMembroComponent', () => {
  let component: CadastrarNovoMembroComponent;
  let fixture: ComponentFixture<CadastrarNovoMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarNovoMembroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarNovoMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
