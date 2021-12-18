import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemListaComponent } from './card-item-lista.component';

describe('CardItemListaComponent', () => {
  let component: CardItemListaComponent;
  let fixture: ComponentFixture<CardItemListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardItemListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
