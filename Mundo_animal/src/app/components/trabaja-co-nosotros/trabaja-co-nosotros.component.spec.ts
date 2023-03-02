import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajaCoNosotrosComponent } from './trabaja-co-nosotros.component';

describe('TrabajaCoNosotrosComponent', () => {
  let component: TrabajaCoNosotrosComponent;
  let fixture: ComponentFixture<TrabajaCoNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajaCoNosotrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajaCoNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
