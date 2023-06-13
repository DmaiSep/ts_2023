import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizcComponent } from './matrizc.component';

describe('MatrizcComponent', () => {
  let component: MatrizcComponent;
  let fixture: ComponentFixture<MatrizcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatrizcComponent]
    });
    fixture = TestBed.createComponent(MatrizcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
