# Secure Auth API

A secure and scalable backend system with JWT authentication, Node.js, Express.js, and MongoDB.

## Features

- User registration and login
- JWT-based authentication and route protection
- Password hashing with bcrypt
- MongoDB Atlas integration
- Centralized error handling

## Setup

1. Clone the repo
2. `npm install`
3. Create `.env` based on `.env.example`
4. Run: `npm run dev` (using nodemon) or `node server.js`
5. Test API with Postman or Thunder Client

## Routes

- `POST /api/auth/register` → register user
- `POST /api/auth/login` → login, returns JWT
- `GET /api/users/dashboard` → protected route, requires Authorization header
