import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMembroInfosComponent } from './card-membro-infos.component';

describe('CardMembroInfosComponent', () => {
  let component: CardMembroInfosComponent;
  let fixture: ComponentFixture<CardMembroInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMembroInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMembroInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
