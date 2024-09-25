export interface AuthResponse {
    status: '0' | '1';
    message: string;
    user?: User
}

export interface User {
    username: string;
    password: string;
    name: string;
    role: Role;
    subscription: Subscription;
    isLoggedIn: '0' | '1'
}

export enum Role {
    CONSULTANT,
    PERSON
}

export enum Subscription {
    FREE,
    PREMIUM,
    PREMIUM_CONSULTANT
}