import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormVeterinariasComponent } from './view-form-veterinarias.component';

describe('ViewFormVeterinariasComponent', () => {
  let component: ViewFormVeterinariasComponent;
  let fixture: ComponentFixture<ViewFormVeterinariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFormVeterinariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFormVeterinariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
