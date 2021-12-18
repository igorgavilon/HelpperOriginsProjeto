import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoStatusFaltaComponent } from './botao-status-falta.component';

describe('BotaoStatusFaltaComponent', () => {
  let component: BotaoStatusFaltaComponent;
  let fixture: ComponentFixture<BotaoStatusFaltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoStatusFaltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoStatusFaltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
