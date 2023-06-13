import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebilidadvComponent } from './debilidadv.component';

describe('DebilidadvComponent', () => {
  let component: DebilidadvComponent;
  let fixture: ComponentFixture<DebilidadvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebilidadvComponent]
    });
    fixture = TestBed.createComponent(DebilidadvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
