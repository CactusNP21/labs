import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lb3Component } from './lb3.component';

describe('Lb3Component', () => {
  let component: Lb3Component;
  let fixture: ComponentFixture<Lb3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lb3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
