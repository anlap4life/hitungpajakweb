import { Component } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule, AvatarGroupModule, AvatarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
