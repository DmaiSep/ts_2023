import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalvComponent } from './modalv.component';

describe('ModalvComponent', () => {
  let component: ModalvComponent;
  let fixture: ComponentFixture<ModalvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
