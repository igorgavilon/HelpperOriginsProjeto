import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirMembroComponent } from './excluir-membro.component';

describe('ExcluirMembroComponent', () => {
  let component: ExcluirMembroComponent;
  let fixture: ComponentFixture<ExcluirMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirMembroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
