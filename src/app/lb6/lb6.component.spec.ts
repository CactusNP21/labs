import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lb6Component } from './lb6.component';

describe('Lb6Component', () => {
  let component: Lb6Component;
  let fixture: ComponentFixture<Lb6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lb6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lb6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
