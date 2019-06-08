import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCustomerListComponent } from './report-customer-list.component';

describe('ReportCustomerListComponent', () => {
  let component: ReportCustomerListComponent;
  let fixture: ComponentFixture<ReportCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
