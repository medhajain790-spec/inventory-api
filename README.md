# Inventory and Data Management System

**Course:** Web Dev III (Backend Web Development)
**Assignment:** Lab 3 - Inventory and Data Management System
**Name:** medha jain
**Roll No.:** 2501730501

A RESTful backend for managing a store/warehouse product catalogue, built with **Node.js, Express.js, MongoDB, Mongoose and dotenv**.

## Features

- Mongoose schema with field-level validation (required fields, min values, unique SKU, integer quantity)
- Complete CRUD for products
- Filtering, sorting and pagination using query strings
- Safe stock increment/decrement (atomic `$inc`, stock never goes below 0)
- Low-stock alert report
- Category-wise inventory summary using an aggregation pipeline
- Centralized error handling and ObjectId validation middleware
- Environment variables managed with dotenv

## Project Structure

```
inventory-api/
├── config/db.js
├── controllers/productController.js
├── middleware/errorHandler.js
├── middleware/validateObjectId.js
├── models/Product.js
├── routes/productRoutes.js
├── server.js
├── .env.example
└── package.json
```

## Setup

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file (see `.env.example`):
   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/inventory_db
   ```
3. Make sure MongoDB is running, then start the server:
   ```bash
   npm start
   ```
   Server runs on `http://localhost:5000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/products` | Create a product |
| GET | `/api/products` | Get all products (filter, sort, paginate) |
| GET | `/api/products/:id` | Get a single product |
| PUT | `/api/products/:id` | Update product details |
| PATCH | `/api/products/:id/stock` | Restock / sale (`{ "change": 10 }` or `{ "change": -3 }`) |
| DELETE | `/api/products/:id` | Delete a product |
| GET | `/api/products/low-stock` | Products where quantity <= reorderLevel |
| GET | `/api/products/summary` | Category-wise inventory summary |

Query parameters for `GET /api/products`: `category`, `supplier`, `search`, `minPrice`, `maxPrice`, `sort` (e.g. `-price`), `page`, `limit`.

## API Output Screenshots

### 1. Create Product (POST)
![Create Product](screenshots/01-create-product.png)

### 2. Get All Products (GET)
![Get All Products](screenshots/02-get-all.png)

### 3. Get Single Product by ID (GET)
![Get Single Product](screenshots/03-get-one.png)

### 4. Update Product (PUT)
![Update Product](screenshots/04-update.png)

### 5. Restock (PATCH)
![Restock](screenshots/05-restock.png)

### 6. Sale (PATCH)
![Sale](screenshots/06-sale.png)

### 7. Low-Stock Report (GET)
![Low Stock](screenshots/07-low-stock.png)

### 8. Category-wise Summary (GET)
![Summary](screenshots/08-summary.png)

### 9. Filter by Category and Price, with Sorting
![Filter](screenshots/09-filter.png)

### 10. Sort by Price
![Sort](screenshots/10-sort.png)

### 11. Pagination
![Pagination](screenshots/11-pagination.png)

### 12. Search by Name
![Search](screenshots/12-search.png)

### 13. Delete Product (DELETE)
![Delete](screenshots/13-delete.png)

### 14. Verify Deleted Product (404)
![Verify Deleted](screenshots/14-verify-deleted.png)

## Error Handling Screenshots

### 15. Duplicate SKU (409)
![Duplicate SKU](screenshots/15-duplicate-sku.png)

### 16. Negative Price Validation (400)
![Negative Price](screenshots/16-negative-price.png)

### 17. Missing Required Fields (400)
![Missing Fields](screenshots/17-missing-fields.png)

### 18. Insufficient Stock (400)
![Insufficient Stock](screenshots/18-insufficient-stock.png)

### 19. Invalid Stock Change Value (400)
![Invalid Change](screenshots/19-invalid-change.png)

### 20. Invalid ID Format (400)
![Invalid ID](screenshots/20-invalid-id.png)

### 21. Product Not Found (404)
![Not Found](screenshots/21-not-found.png)
# inventory-api
