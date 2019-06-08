import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductListComponent } from './report-product-list.component';

describe('ReportProductListComponent', () => {
  let component: ReportProductListComponent;
  let fixture: ComponentFixture<ReportProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
