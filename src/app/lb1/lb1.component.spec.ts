import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lb1Component } from './lb1.component';

describe('Lb1Component', () => {
  let component: Lb1Component;
  let fixture: ComponentFixture<Lb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lb1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
