import { Injectable, OnInit } from '@angular/core';
import { AuthResponse, Role, Subscription, User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users!: Map<string, User>;

  ngOnInit(): void {
    this.users.set('lepi', {
      username: 'lepi',
      password: 'lepi',
      name: 'Reza Pahlevie',
      role: Role.PERSON,
      subscription: Subscription.FREE,
      isLoggedIn: '0',
    });
  }

  login(username: string, password: string): AuthResponse {
    
    const user = this.users.get(username);
    if (!user) {
      return {
        status: '0',
        message: 'Username tidak ditemukan.',
      };
    }
    
    if (user.password !== password) {
      return {
        status: '0',
        message: 'Password tidak sesuai.',
      };
    }

    user.isLoggedIn = '1';
    this.users.set(user.username, user);

    return {
      status: '1',
      message: 'success',
      user: user,
    };
  }

  register() {}
}
