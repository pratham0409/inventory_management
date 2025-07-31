export interface OrderItem {
    productId: number;
    quantity: number;
}

export interface Order {
    id: number;
    customerId: number;
    items: OrderItem[];
    total: number;
    status: 'placed' | 'shipped' | 'delivered';
}
