import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eager3Component } from './eager3.component';

describe('Eager3Component', () => {
  let component: Eager3Component;
  let fixture: ComponentFixture<Eager3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eager3Component]
    });
    fixture = TestBed.createComponent(Eager3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
