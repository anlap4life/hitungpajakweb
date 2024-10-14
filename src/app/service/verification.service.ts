import { inject, Injectable } from '@angular/core';
import { VerificationCode, VerificationResponse } from '../model/auth.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class VerificationService {
  private codes: Map<string, VerificationCode> = new Map();
  private userService = inject(AuthService);

  constructor() {}

  generate(username: string) {
    const expiredDate = this._generateExpiredDate();
    const verificationCode = {
      code: '12345',
      expiredDate: expiredDate,
    };

    this.codes.set(username, verificationCode);
  }

  private _generateExpiredDate() {
    const now = new Date();
    const sixtyMinute = 60 * 60 * 1000;
    return new Date(now.getTime() + sixtyMinute);
  }

  verify(code: string, username: string): VerificationResponse {
   
    const verificationCode = this.codes.get(username);
    if (!verificationCode) {
      return {
        status: '0',
        message:
          'Kode verifikasi tidak ditemukan. Silahkan ajukan permintaan kode verifikasi',
      };
    }

    if (code !== verificationCode.code) {
      return {
        status: '0',
        message:
          'Kode verifikasi tidak sesuai. Silahkan masukan kode yang benar',
      };
    }

    const now = new Date();
    if (verificationCode.expiredDate < now) {
      return {
        status: '0',
        message:
          'Kode verifikasi sudah kadaluarsa. Silahkan ajukan permintaan kode verifikasi baru',
      };
    }

    const authResponse = this.userService.get(username);
    if (authResponse.status === '0') {
      return {
        status: authResponse.status,
        message: authResponse.message,
      };
    }

    const user = authResponse.user!;
    user.verified = true;

    this.userService.update(user);

    return {
      status: '1',
      message:
        'Selamat akun anda sudah terverifikasi. Silahkan login untuk mulai menggunakan aplikasi',
    };
  }
}
