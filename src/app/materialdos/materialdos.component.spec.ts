import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdosComponent } from './materialdos.component';

describe('MaterialdosComponent', () => {
  let component: MaterialdosComponent;
  let fixture: ComponentFixture<MaterialdosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialdosComponent]
    });
    fixture = TestBed.createComponent(MaterialdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
