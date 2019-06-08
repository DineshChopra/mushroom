import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPurchaseListComponent } from './report-purchase-list.component';

describe('ReportPurchaseListComponent', () => {
  let component: ReportPurchaseListComponent;
  let fixture: ComponentFixture<ReportPurchaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPurchaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPurchaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
