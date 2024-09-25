import { Component, OnInit } from '@angular/core';
import { NgClass, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-income-summary',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, NgClass, CardModule, ButtonModule, DataViewModule],
  templateUrl: './income-summary.component.html',
  styleUrl: './income-summary.component.css'
})
export class IncomeSummaryComponent implements OnInit {
  incomes!: TaxableIncome[];

  ngOnInit(): void {
    this.incomes = [
      {
        type: 'Penghasilan Praktek',
        totalIncome: 100000000,
        taxRate: 10,
        tax: 10000000
      },
      {
        type: 'Penghasilan Lainnya',
        totalIncome: 300000000,
        taxRate: 10,
        tax: 30000000
      },
      {
        type: 'Penghasilan Praktek',
        totalIncome: 100000000,
        taxRate: 10,
        tax: 10000000
      },
      {
        type: 'Penghasilan Lainnya',
        totalIncome: 300000000,
        taxRate: 10,
        tax: 30000000
      },
      {
        type: 'Penghasilan Praktek',
        totalIncome: 100000000,
        taxRate: 10,
        tax: 10000000
      },
      {
        type: 'Penghasilan Lainnya',
        totalIncome: 300000000,
        taxRate: 10,
        tax: 30000000
      }
    ]
  }
}


interface TaxableIncome {
  type: string;
  totalIncome: number;
  taxRate: number;
  tax: number;
}
