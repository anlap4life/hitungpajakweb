import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';

import { FooterComponent } from '../../layout/footer/footer.component';
import { AuthService } from '../../service/auth.service';

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
    DialogModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  visible = false;
  loginMessage: string = '';

  onSubmit(formData: NgForm) {
    const form = formData.form;
    if (form.valid) {
      const userlogin = form.value;
      const loginResponse = this.authService.login(
        userlogin.username,
        userlogin.password
      );

      const isLoginInvalid = loginResponse.status === '0';
      if (isLoginInvalid) {
        this.loginMessage = loginResponse.message;
        this.visible = true;
        return;
      }

      this.router.navigate(['/penghasilan', 'summary'])
    }
  }
}
