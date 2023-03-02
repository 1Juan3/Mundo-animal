import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormsVeterinariosComponent } from './view-forms-veterinarios.component';

describe('ViewFormsVeterinariosComponent', () => {
  let component: ViewFormsVeterinariosComponent;
  let fixture: ComponentFixture<ViewFormsVeterinariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFormsVeterinariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFormsVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
