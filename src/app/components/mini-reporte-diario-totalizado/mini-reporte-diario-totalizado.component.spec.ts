import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniReporteDiarioTotalizadoComponent } from './mini-reporte-diario-totalizado.component';

describe('MiniReporteDiarioTotalizadoComponent', () => {
  let component: MiniReporteDiarioTotalizadoComponent;
  let fixture: ComponentFixture<MiniReporteDiarioTotalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniReporteDiarioTotalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniReporteDiarioTotalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
