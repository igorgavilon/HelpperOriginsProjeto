import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMembroComponent } from './form-membro.component';

describe('FormMembroComponent', () => {
  let component: FormMembroComponent;
  let fixture: ComponentFixture<FormMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMembroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
