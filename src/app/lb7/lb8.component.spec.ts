import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lb8Component } from './lb8.component';

describe('Lb8Component', () => {
  let component: Lb8Component;
  let fixture: ComponentFixture<Lb8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lb8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lb8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
