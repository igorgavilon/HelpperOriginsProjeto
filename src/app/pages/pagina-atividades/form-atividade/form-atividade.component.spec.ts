import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAtividadeComponent } from './form-atividade.component';

describe('FormAtividadeComponent', () => {
  let component: FormAtividadeComponent;
  let fixture: ComponentFixture<FormAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAtividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
