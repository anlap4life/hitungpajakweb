import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css',
})
export class VerificationComponent {}
