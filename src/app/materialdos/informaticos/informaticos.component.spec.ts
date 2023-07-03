import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticosComponent } from './informaticos.component';

describe('InformaticosComponent', () => {
  let component: InformaticosComponent;
  let fixture: ComponentFixture<InformaticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformaticosComponent]
    });
    fixture = TestBed.createComponent(InformaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
