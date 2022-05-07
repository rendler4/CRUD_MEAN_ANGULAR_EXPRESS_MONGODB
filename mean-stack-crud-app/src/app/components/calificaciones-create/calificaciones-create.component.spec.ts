import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesCreateComponent } from './calificaciones-create.component';

describe('CalificacionesCreateComponent', () => {
  let component: CalificacionesCreateComponent;
  let fixture: ComponentFixture<CalificacionesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
