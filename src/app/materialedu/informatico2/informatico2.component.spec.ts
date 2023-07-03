import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informatico2Component } from './informatico2.component';

describe('Informatico2Component', () => {
  let component: Informatico2Component;
  let fixture: ComponentFixture<Informatico2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Informatico2Component]
    });
    fixture = TestBed.createComponent(Informatico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
