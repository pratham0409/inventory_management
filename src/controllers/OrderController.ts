import { Request, Response } from "express";
import { orders } from "../data/order";
import { products } from "../data/products";
import { Order, OrderItem } from "../models/Order";

export const OrderController = {
    placeOrder: (req: Request, res: Response) => {
        const { customerId, items } = req.body;

        let total = 0;
        const outOfStockItems: number[] = [];

        const updatedItems: OrderItem[] = items.map((item: OrderItem) => {
            const product = products.find(p => p.id === item.productId);
            if (!product || product.stock < item.quantity) {
                outOfStockItems.push(item.productId);
                return item;
            }
            product.stock -= item.quantity;
            total += product.price * item.quantity;
            return item;
        });

        if (outOfStockItems.length > 0) {
            return res.status(400).json({ message: "Some items are out of stock", outOfStockItems });
        }

        const newOrder: Order = {
            id: Date.now(),
            customerId,
            items: updatedItems,
            total,
            status: "placed"
        };

        orders.push(newOrder);
        res.status(201).json(newOrder);
    },

    getOrdersByCustomer: (req: Request, res: Response) => {
        const customerId = parseInt(req.query.customerId as string);
        const userOrders = orders.filter(order => order.customerId === customerId);
        res.json(userOrders);
    }
};
