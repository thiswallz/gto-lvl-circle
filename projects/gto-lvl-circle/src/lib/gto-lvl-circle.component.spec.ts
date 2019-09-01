import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtoLvlCircleComponent } from './gto-lvl-circle.component';

describe('GtoLvlCircleComponent', () => {
  let component: GtoLvlCircleComponent;
  let fixture: ComponentFixture<GtoLvlCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtoLvlCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtoLvlCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
