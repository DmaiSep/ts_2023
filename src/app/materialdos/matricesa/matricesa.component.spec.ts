import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricesaComponent } from './matricesa.component';

describe('MatricesaComponent', () => {
  let component: MatricesaComponent;
  let fixture: ComponentFixture<MatricesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatricesaComponent]
    });
    fixture = TestBed.createComponent(MatricesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
