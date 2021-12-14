import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTiendaSuccessComponent } from './modal-tienda-success.component';

describe('ModalTiendaSuccessComponent', () => {
  let component: ModalTiendaSuccessComponent;
  let fixture: ComponentFixture<ModalTiendaSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTiendaSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTiendaSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
