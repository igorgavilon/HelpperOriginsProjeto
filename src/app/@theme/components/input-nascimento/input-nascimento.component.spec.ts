import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNascimentoComponent } from './input-nascimento.component';

describe('InputNascimentoComponent', () => {
  let component: InputNascimentoComponent;
  let fixture: ComponentFixture<InputNascimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNascimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNascimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
