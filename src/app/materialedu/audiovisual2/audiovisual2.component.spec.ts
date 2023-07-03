import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Audiovisual2Component } from './audiovisual2.component';

describe('Audiovisual2Component', () => {
  let component: Audiovisual2Component;
  let fixture: ComponentFixture<Audiovisual2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Audiovisual2Component]
    });
    fixture = TestBed.createComponent(Audiovisual2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
