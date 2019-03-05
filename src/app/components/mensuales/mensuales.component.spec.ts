import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensualesComponent } from './mensuales.component';

describe('MensualesComponent', () => {
  let component: MensualesComponent;
  let fixture: ComponentFixture<MensualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
