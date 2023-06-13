import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionrComponent } from './programacionr.component';

describe('ProgramacionrComponent', () => {
  let component: ProgramacionrComponent;
  let fixture: ComponentFixture<ProgramacionrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramacionrComponent]
    });
    fixture = TestBed.createComponent(ProgramacionrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
