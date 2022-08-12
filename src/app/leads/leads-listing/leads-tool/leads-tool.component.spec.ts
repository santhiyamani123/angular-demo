import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsToolComponent } from './leads-tool.component';

describe('LeadsToolComponent', () => {
  let component: LeadsToolComponent;
  let fixture: ComponentFixture<LeadsToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadsToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
