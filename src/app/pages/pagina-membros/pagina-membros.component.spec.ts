import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMembrosComponent } from './pagina-membros.component';

describe('PaginaMembrosComponent', () => {
  let component: PaginaMembrosComponent;
  let fixture: ComponentFixture<PaginaMembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMembrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
