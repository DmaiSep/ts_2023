import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticoComponent } from './informatico.component';

describe('InformaticoComponent', () => {
  let component: InformaticoComponent;
  let fixture: ComponentFixture<InformaticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformaticoComponent]
    });
    fixture = TestBed.createComponent(InformaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
