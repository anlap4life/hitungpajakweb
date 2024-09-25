import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base-auth',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './base-auth.component.html',
  styleUrl: './base-auth.component.css',
})
export class BaseAuthComponent {}
