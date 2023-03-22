import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRemisionesComponent } from './view-remisiones.component';

describe('ViewRemisionesComponent', () => {
  let component: ViewRemisionesComponent;
  let fixture: ComponentFixture<ViewRemisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRemisionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRemisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
