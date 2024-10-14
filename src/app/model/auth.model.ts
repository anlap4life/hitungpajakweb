import { User, Profesion } from "./user.model";

export interface AuthResponse {
    status: '0' | '1';
    message: string;
    user?: User
}

export interface RegistrationRequest {
    phone: string;
    username: string;
    password: string;
    name: string;
    profesion: Profesion;
}

export interface VerificationCode {
    code: string;
    expiredDate: Date;
}

export interface VerificationResponse {
    status: '0' | '1';
    message: string;
}
