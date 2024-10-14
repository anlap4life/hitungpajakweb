export interface User {
    id?: number,
    phone: string,
    username: string;
    password: string;
    name: string;
    role: Role;
    profesion: Profesion,
    subscription: Subscription;
    isLoggedIn: '0' | '1'
    verified: boolean
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

export enum Profesion {
    DOKTER,
    KONSULTAN,
    OTHER,
}
