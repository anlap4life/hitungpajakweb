import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { RouterLink } from '@angular/router';

import { FooterComponent } from '../../layout/footer/footer.component';

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
    RouterLink,
    FooterComponent,
  ],
  providers: [ConfirmationService],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  username = '';
  password = '';
  passwordConfirmed = '';
  profesi = '';
  profesies: { name: string; code: string }[] | undefined;

  private confirmationService = inject(ConfirmationService);

  ngOnInit(): void {
    this.profesies = [
      {
        name: 'Dokter',
        code: '1',
      },
      {
        name: 'Arsitek',
        code: '2',
      },
    ];
  }

  onSubmit(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Apakah anda yakin dengan pengisian data anda?',
      header: 'Daftar Baru',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        console.log('accept');
        // this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
        console.log('reject');
        // this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      },
    });
  }
}
