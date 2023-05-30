import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortometrajeComponent } from './cortometraje.component';

describe('CortometrajeComponent', () => {
  let component: CortometrajeComponent;
  let fixture: ComponentFixture<CortometrajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CortometrajeComponent]
    });
    fixture = TestBed.createComponent(CortometrajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
