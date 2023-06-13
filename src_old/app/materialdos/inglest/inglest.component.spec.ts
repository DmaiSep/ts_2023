import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InglestComponent } from './inglest.component';

describe('InglestComponent', () => {
  let component: InglestComponent;
  let fixture: ComponentFixture<InglestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InglestComponent]
    });
    fixture = TestBed.createComponent(InglestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
