import { Injectable } from '@angular/core';

import { Profesion, Role, Subscription, User } from '../model/user.model';
import { AuthResponse, RegistrationRequest } from '../model/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static SEQ_ID = 2;
  private users: Map<string, User> = new Map();

  constructor() {
    this.users.set('lepi', {
      id: 1,
      phone: '081314777269',
      username: 'lepi',
      password: 'lepi',
      name: 'Reza Pahlevie',
      role: Role.PERSON,
      profesion: Profesion.DOKTER,
      subscription: Subscription.FREE,
      isLoggedIn: '0',
      verified: true,
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

  register(request: RegistrationRequest) {
    const user = this.users.get(request.username);
    if (user) {
      return {
        status: '0',
        message: 'Username sudah pernah terdaftar.',
      };
    }

    const newUser: User = {
      id: AuthService.SEQ_ID,
      phone: request.phone,
      username: request.username,
      password: request.password,
      name: request.name,
      role: Role.PERSON,
      profesion: request.profesion,
      subscription: Subscription.FREE,
      isLoggedIn: '0',
      verified: false,
    };

    this.users.set(newUser.username, newUser);

    AuthService.SEQ_ID++;

    return {
      status: '1',
      message: 'Registrasi berhasil.',
    };
  }

  get(username: string) {
    const user = this.users.get(username);
    if (!user) {
      return {
        status: '0',
        message: 'Username sudah pernah terdaftar.',
      };
    }

    return {
      status: '1',
      message: 'success',
      user: user,
    };
  }

  update(updatedUser: User) {
    this.users.set(updatedUser.username, updatedUser);
  }
}
