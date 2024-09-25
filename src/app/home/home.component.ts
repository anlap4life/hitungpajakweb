import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { AddIncomeComponent } from './add-income/add-income.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AddIncomeComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
