import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListaTotalAtividadesComponent } from './card-lista-total-atividades.component';

describe('CardListaTotalAtividadesComponent', () => {
  let component: CardListaTotalAtividadesComponent;
  let fixture: ComponentFixture<CardListaTotalAtividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListaTotalAtividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListaTotalAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
