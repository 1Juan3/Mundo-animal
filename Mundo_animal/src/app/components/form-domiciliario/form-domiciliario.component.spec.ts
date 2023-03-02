import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDomiciliarioComponent } from './form-domiciliario.component';

describe('FormDomiciliarioComponent', () => {
  let component: FormDomiciliarioComponent;
  let fixture: ComponentFixture<FormDomiciliarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDomiciliarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDomiciliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
