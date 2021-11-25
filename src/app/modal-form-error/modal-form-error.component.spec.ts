import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormErrorComponent } from './modal-form-error.component';

describe('ModalFormErrorComponent', () => {
  let component: ModalFormErrorComponent;
  let fixture: ComponentFixture<ModalFormErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
