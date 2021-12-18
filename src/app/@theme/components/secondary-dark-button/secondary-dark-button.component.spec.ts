import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryDarkButtonComponent } from './secondary-dark-button.component';

describe('SecondaryDarkButtonComponent', () => {
  let component: SecondaryDarkButtonComponent;
  let fixture: ComponentFixture<SecondaryDarkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryDarkButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryDarkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
