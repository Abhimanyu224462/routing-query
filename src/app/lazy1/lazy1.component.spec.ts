import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazy1Component } from './lazy1.component';

describe('Lazy1Component', () => {
  let component: Lazy1Component;
  let fixture: ComponentFixture<Lazy1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lazy1Component]
    });
    fixture = TestBed.createComponent(Lazy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
