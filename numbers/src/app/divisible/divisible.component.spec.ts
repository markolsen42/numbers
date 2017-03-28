import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisibleComponent } from './divisible.component';

describe('DivisibleComponent', () => {
  let component: DivisibleComponent;
  let fixture: ComponentFixture<DivisibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
