import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { RouterLink, Router } from '@angular/router';

import { FooterComponent } from '../../layout/footer/footer.component';
import { AuthService } from '../../service/auth.service';
import { Profesion } from '../../model/user.model';
import { RegistrationRequest } from '../../model/auth.model';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    FormsModule,
    CardModule,
    DropdownModule,
    ConfirmDialogModule,
    ToastModule,
    RouterLink,
    FooterComponent,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  profesies: { name: string; code: string }[] | undefined;

  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.profesies = [
      {
        name: 'Dokter',
        code: '0',
      },
      {
        name: 'Arsitek',
        code: '1',
      },
    ];
  }

  private getProfesion(profesionCode: string): Profesion {
    let profesion: Profesion;
    switch (profesionCode) {
      case '0':
        profesion = Profesion.DOKTER;
        break;
      case '1':
        profesion = Profesion.KONSULTAN;
        break;
      default:
        profesion = Profesion.OTHER;
    }

    return profesion;
  }

  onSubmit(formData: NgForm, event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Apakah anda yakin dengan pengisian data anda?',
      header: 'Daftar Baru',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        const formValues = formData.value;

        const userToRegister: RegistrationRequest = {
          phone: formValues.phone,
          username: formValues.email,
          password: formValues.password,
          name: formValues.name,
          profesion: this.getProfesion(formValues.profesi.code),
        };

        const authResponse = this.authService.register(userToRegister);

        // kalo gagal kasih notif gagal kenapa.
        if (authResponse.status === '0') {
          this.messageService.add({
            severity: 'warn',
            summary: 'Gagal Registrasi',
            detail: authResponse.message,
          });
          return;
        }

        this.router.navigate(['/auth', 'verification'], {
          replaceUrl: true,
        });
      },
      reject: () => {
        this.confirmationService.close();
      },
    });
  }
}
