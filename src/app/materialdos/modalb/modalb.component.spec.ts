import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalbComponent } from './modalb.component';

describe('ModalbComponent', () => {
  let component: ModalbComponent;
  let fixture: ComponentFixture<ModalbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalbComponent]
    });
    fixture = TestBed.createComponent(ModalbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
