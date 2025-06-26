# Backend Authentication Setup

## Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB)

## Setup Instructions

1. **Create a .env file** in the Backend directory with your MongoDB connection string:
   ```
   MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node server.js
   ```
   The server will run on http://localhost:3003

## API Endpoints

### Authentication
- `POST /api/signup` - Register a new user
- `POST /api/login` - Login user

### Items (existing)
- `GET /api/items` - Get all items
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

## Frontend Connection
The React frontend is configured to connect to `http://localhost:3003/api/login` for authentication.

## Security Features
- Passwords are hashed using bcrypt
- CORS enabled for frontend communication
- Input validation and error handling 