import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConEstadoComponent } from './con-estado.component';

describe('ConEstadoComponent', () => {
  let component: ConEstadoComponent;
  let fixture: ComponentFixture<ConEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConEstadoComponent]
    });
    fixture = TestBed.createComponent(ConEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
