import { Component, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-income',
  standalone: true,
  imports: [
    RouterLink,
    CardModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.css',
})
export class AddIncomeComponent implements OnInit {
  visible = input<boolean>();
  incomeTypes: { name: string; code: string }[] | undefined;
  incomeType: string = '';

  ngOnInit(): void {
    this.incomeTypes = [
      {
        name: 'Penghasilan Praktik',
        code: '1',
      },
      {
        name: 'Penghasilan Lainnya',
        code: '2',
      },
    ];
  }
}
