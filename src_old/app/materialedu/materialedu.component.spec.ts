import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialeduComponent } from './materialedu.component';

describe('MaterialeduComponent', () => {
  let component: MaterialeduComponent;
  let fixture: ComponentFixture<MaterialeduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialeduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
