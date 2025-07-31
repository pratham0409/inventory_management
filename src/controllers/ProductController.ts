import { Request, Response } from "express";
import { products } from "../data/products";
import { Product } from "../models/Product";

export const ProductController = {
    getAll: (req: Request, res: Response) => {
        res.json(products);
    },

    getById: (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const product = products.find(p => p.id === id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    },

    create: (req: Request, res: Response) => {
        const { name, price, stock } = req.body;
        const newProduct: Product = {
            id: Date.now(),
            name,
            price,
            stock,
        };
        products.push(newProduct);
        res.status(201).json(newProduct);
    },

    update: (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const product = products.find(p => p.id === id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        const { name, price, stock } = req.body;
        product.name = name ?? product.name;
        product.price = price ?? product.price;
        product.stock = stock ?? product.stock;

        res.json(product);
    },

    remove: (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const index = products.findIndex(p => p.id === id);
        if (index === -1) return res.status(404).json({ message: "Product not found" });

        products.splice(index, 1);
        res.status(204).send();
    },
};
