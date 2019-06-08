import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStockListComponent } from './report-stock-list.component';

describe('ReportStockListComponent', () => {
  let component: ReportStockListComponent;
  let fixture: ComponentFixture<ReportStockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportStockListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
