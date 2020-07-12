import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontoBaseComponent } from './monto-base.component';

describe('MontoBaseComponent', () => {
  let component: MontoBaseComponent;
  let fixture: ComponentFixture<MontoBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontoBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
