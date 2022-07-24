import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAdditionComponent } from './line-addition.component';

describe('AdditionLineComponent', () => {
  let component: LineAdditionComponent;
  let fixture: ComponentFixture<LineAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineAdditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
