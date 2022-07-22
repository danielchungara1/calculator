import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMultiplicationComponent } from './line-multiplication.component';

describe('AdditionLineComponent', () => {
  let component: LineMultiplicationComponent;
  let fixture: ComponentFixture<LineMultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineMultiplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
