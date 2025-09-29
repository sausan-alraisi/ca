# NestJS CRUD with MongoDB - Categories

A simple CRUD application built with NestJS and MongoDB for managing categories.

## Features

- Create, Read, Update, Delete operations for categories
- MongoDB integration with Mongoose
- RESTful API endpoints
- Input validation with DTOs
- Error handling

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

## Installation

1. Clone the repository or create the project structure
2. Install dependencies:
   ```bash
   npm install
   ```

3. Make sure MongoDB is running on your system:
   - Local MongoDB: `mongod`
   - Or use MongoDB Atlas (update connection string in `src/app.module.ts`)

## Running the Application

1. Start the development server:
   ```bash
   npm run start:dev
   ```

2. The application will be available at: `http://localhost:3000/api`

## API Endpoints

### Categories

- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get a specific category by ID
- `POST /api/categories` - Create a new category
- `PATCH /api/categories/:id` - Update a category
- `DELETE /api/categories/:id` - Delete a category

### Example Requests

#### Create a Category
```bash
curl -X POST http://localhost:3000/api/categories \
  -H "Content-Type: application/json" \
  -d '{"title": "Technology"}'
```

#### Get All Categories
```bash
curl http://localhost:3000/api/categories
```

#### Update a Category
```bash
curl -X PATCH http://localhost:3000/api/categories/CATEGORY_ID \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Technology"}'
```

#### Delete a Category
```bash
curl -X DELETE http://localhost:3000/api/categories/CATEGORY_ID
```

## Project Structure

```
src/
├── category/
│   ├── dto/
│   │   ├── create-category.dto.ts
│   │   └── update-category.dto.ts
│   ├── schemas/
│   │   └── category.schema.ts
│   ├── category.controller.ts
│   ├── category.service.ts
│   └── category.module.ts
├── app.module.ts
└── main.ts
```

## Database Schema

### Category
- `_id`: MongoDB ObjectId (auto-generated)
- `title`: String (required, unique)
- `createdAt`: Date (auto-generated)
- `updatedAt`: Date (auto-generated)

## Development

- `npm run start:dev` - Start development server with hot reload
- `npm run build` - Build the application
- `npm run start:prod` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Environment Variables

You can create a `.env` file to configure:
- `PORT` - Server port (default: 3000)
- `MONGODB_URI` - MongoDB connection string (default: mongodb://localhost:27017/categories_db)
