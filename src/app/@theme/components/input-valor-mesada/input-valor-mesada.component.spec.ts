import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValorMesadaComponent } from './input-valor-mesada.component';

describe('InputValorMesadaComponent', () => {
  let component: InputValorMesadaComponent;
  let fixture: ComponentFixture<InputValorMesadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputValorMesadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputValorMesadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
