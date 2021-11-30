import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListaTotalFaltasComponent } from './card-lista-total-faltas.component';

describe('CardListaTotalFaltasComponent', () => {
  let component: CardListaTotalFaltasComponent;
  let fixture: ComponentFixture<CardListaTotalFaltasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListaTotalFaltasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListaTotalFaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
