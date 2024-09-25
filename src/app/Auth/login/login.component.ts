import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';

import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CardModule,
    FooterComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    console.log(formData);
  }
}
