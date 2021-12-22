import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMembroAtivoComponent } from './card-membro-ativo.component';

describe('CardMembroAtivoComponent', () => {
  let component: CardMembroAtivoComponent;
  let fixture: ComponentFixture<CardMembroAtivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMembroAtivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMembroAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
