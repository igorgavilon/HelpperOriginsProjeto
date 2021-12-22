import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAtividadeInfosComponent } from './card-atividade-infos.component';

describe('CardAtividadeInfosComponent', () => {
  let component: CardAtividadeInfosComponent;
  let fixture: ComponentFixture<CardAtividadeInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAtividadeInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAtividadeInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
