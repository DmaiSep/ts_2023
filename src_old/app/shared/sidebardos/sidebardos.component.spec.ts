import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebardosComponent } from './sidebardos.component';

describe('SidebardosComponent', () => {
  let component: SidebardosComponent;
  let fixture: ComponentFixture<SidebardosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebardosComponent]
    });
    fixture = TestBed.createComponent(SidebardosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
