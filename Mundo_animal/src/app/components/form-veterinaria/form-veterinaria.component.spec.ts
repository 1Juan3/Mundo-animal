import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVeterinariaComponent } from './form-veterinaria.component';

describe('FormVeterinariaComponent', () => {
  let component: FormVeterinariaComponent;
  let fixture: ComponentFixture<FormVeterinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVeterinariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
