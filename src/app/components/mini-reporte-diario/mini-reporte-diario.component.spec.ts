import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniReporteDiarioComponent } from './mini-reporte-diario.component';

describe('MiniReporteDiarioComponent', () => {
  let component: MiniReporteDiarioComponent;
  let fixture: ComponentFixture<MiniReporteDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniReporteDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniReporteDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
