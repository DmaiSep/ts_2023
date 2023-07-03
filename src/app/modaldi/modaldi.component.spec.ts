import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldiComponent } from './modaldi.component';

describe('ModaldiComponent', () => {
  let component: ModaldiComponent;
  let fixture: ComponentFixture<ModaldiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModaldiComponent]
    });
    fixture = TestBed.createComponent(ModaldiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
