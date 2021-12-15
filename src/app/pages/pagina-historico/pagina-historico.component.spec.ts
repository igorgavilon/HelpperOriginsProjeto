import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHistoricoComponent } from './pagina-historico.component';

describe('PaginaHistoricoComponent', () => {
  let component: PaginaHistoricoComponent;
  let fixture: ComponentFixture<PaginaHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
