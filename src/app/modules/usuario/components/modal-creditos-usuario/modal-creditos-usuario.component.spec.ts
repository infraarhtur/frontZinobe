import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreditosUsuarioComponent } from './modal-creditos-usuario.component';

describe('ModalCreditosUsuarioComponent', () => {
  let component: ModalCreditosUsuarioComponent;
  let fixture: ComponentFixture<ModalCreditosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreditosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreditosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
