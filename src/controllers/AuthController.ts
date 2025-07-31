import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { customers } from "../data/customer";

const JWT_SECRET = "secret123"; // You can keep it simple for now

export const AuthController = {
    login: (req: Request, res: Response) => {
        const { email } = req.body;
        const user = customers.find(c => c.email === email);

        if (!user) return res.status(401).json({ message: "Invalid email" });

        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ token });
    }
};
