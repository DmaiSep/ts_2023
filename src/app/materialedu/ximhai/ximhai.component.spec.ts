import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XimhaiComponent } from './ximhai.component';

describe('XimhaiComponent', () => {
  let component: XimhaiComponent;
  let fixture: ComponentFixture<XimhaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XimhaiComponent]
    });
    fixture = TestBed.createComponent(XimhaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
