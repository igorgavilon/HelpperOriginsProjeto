import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAtividadesComponent } from './pagina-atividades.component';

describe('PaginaAtividadesComponent', () => {
  let component: PaginaAtividadesComponent;
  let fixture: ComponentFixture<PaginaAtividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAtividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
