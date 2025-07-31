export interface Customer {
    id: number;
    name: string;
    email: string;
    role: 'customer' | 'admin';
}
