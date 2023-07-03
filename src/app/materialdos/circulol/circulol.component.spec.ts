import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculolComponent } from './circulol.component';

describe('CirculolComponent', () => {
  let component: CirculolComponent;
  let fixture: ComponentFixture<CirculolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirculolComponent]
    });
    fixture = TestBed.createComponent(CirculolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
