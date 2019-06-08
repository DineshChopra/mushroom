import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSaleListComponent } from './report-sale-list.component';

describe('ReportSaleListComponent', () => {
  let component: ReportSaleListComponent;
  let fixture: ComponentFixture<ReportSaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
