import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lb2Component } from './lb2.component';

describe('Lb2Component', () => {
  let component: Lb2Component;
  let fixture: ComponentFixture<Lb2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lb2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
