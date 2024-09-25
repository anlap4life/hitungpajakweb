import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegistrationComponent } from './Auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { VerificationComponent } from './Auth/verification/verification.component';
import { BaseAuthComponent } from './Auth/base-auth/base-auth.component';
import { IncomeSummaryComponent } from './home/income-summary/income-summary.component';
import { AddIncomeComponent } from './home/add-income/add-income.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/penghasilan/summary',
    pathMatch: 'full'
  },
  {
    path: 'penghasilan',
    component: HomeComponent,
    children: [
      {
        path: 'summary',
        component: IncomeSummaryComponent
      },
      {
        path: 'add',
        component: AddIncomeComponent
      }
    ]
  },
  {
    path: 'auth',
    component: BaseAuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'verification',
        component: VerificationComponent,
      },
    ],
  },
];
