To implement an inventory and order management system with authentication and role-based access using Express.js.

## Technologies Used
- Node.js
- Express.js
- TypeScript
- JWT (jsonwebtoken)
- class-transformer
- express-validator

## Folder Structure
src/
- controllers/
- data/
- middleware/
- models/
- routes.ts
- index.ts

## How to Install and Run
npm install  
npm run dev

http://localhost:3000

## Authentication
Login using:
POST /login  
Body:  
{ "email": "admin@example.com" }

The response will return a JWT token. Use the token in the Authorization header as:  
Authorization: Bearer <token>

## API Endpoints
Products:
- GET /products
- GET /products/:id
- POST /products (admin only)
- PUT /products/:id (admin only)
- DELETE /products/:id (admin only)

Orders:
- POST /orders (logged-in users)
- GET /orders?customerId=1 (logged-in users)

## How to Test
Use the test.http file in VS Code with the REST Client extension to test all routes.

## Sample Customers
[
  { id: 1, name: "Alice", email: "alice@example.com", role: "customer" },
  { id: 2, name: "Admin", email: "admin@example.com", role: "admin" }
]

## Notes
- This project uses mock data only (no database).
- Role-based access is implemented.
- JWT is used for route protection.

