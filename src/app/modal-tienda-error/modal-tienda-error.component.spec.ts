import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTiendaErrorComponent } from './modal-tienda-error.component';

describe('ModalTiendaErrorComponent', () => {
  let component: ModalTiendaErrorComponent;
  let fixture: ComponentFixture<ModalTiendaErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTiendaErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTiendaErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
