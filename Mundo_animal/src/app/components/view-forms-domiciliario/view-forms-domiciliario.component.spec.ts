import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormsDomiciliarioComponent } from './view-forms-domiciliario.component';

describe('ViewFormsDomiciliarioComponent', () => {
  let component: ViewFormsDomiciliarioComponent;
  let fixture: ComponentFixture<ViewFormsDomiciliarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFormsDomiciliarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFormsDomiciliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
