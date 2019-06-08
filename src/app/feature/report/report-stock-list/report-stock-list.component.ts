import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-stock-list',
  templateUrl: './report-stock-list.component.html',
  styleUrls: ['./report-stock-list.component.scss']
})
export class ReportStockListComponent implements OnInit {
  stocks: any;
  constructor(private service: ReportService) { }

  ngOnInit() {
    this.getStocks();
  }

  getStocks() {
    this.stocks = this.service.getStocks();
  }
}
