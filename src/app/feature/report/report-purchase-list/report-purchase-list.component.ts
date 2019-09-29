import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-purchase-list',
  templateUrl: './report-purchase-list.component.html',
  styleUrls: ['./report-purchase-list.component.scss']
})
export class ReportPurchaseListComponent implements OnInit {
  purchases: any;
  constructor(private service: ReportService) { }

  ngOnInit() {
    this.getPurchases();
  }

  getPurchases() {
    this.service.getPurchases().subscribe(data => {
      this.purchases = data;
    });
  }



}
