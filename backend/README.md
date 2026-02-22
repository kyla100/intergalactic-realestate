# Intergalactic Real Estate Marketplace - Backend

Backend API for the Intergalactic Real Estate Marketplace built with Node.js, Express, and MongoDB.

## Features

- User authentication (JWT + OAuth2)
- Property CRUD operations
- Purchase/transaction handling
- Stripe payment processing
- Property listings with advanced filtering
- User profiles and reviews

## Setup

### Prerequisites
- Node.js 16+
- MongoDB

### Installation

```bash
npm install
```

### Configuration

Create a `.env` file in the backend directory:

```env
BACKEND_PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/intergalactic-realestate
JWT_SECRET=your_secret_key
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Running

Development:
```bash
npm run dev
```

Production:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `PATCH /api/auth/profile` - Update profile (protected)

### Properties
- `GET /api/properties` - List properties (with filters)
- `GET /api/properties/:id` - Get property details
- `POST /api/properties` - Create property (protected)
- `PATCH /api/properties/:id` - Update property (protected)
- `DELETE /api/properties/:id` - Delete property (protected)
- `GET /api/properties/user/:id` - Get user's properties

### Transactions
- `POST /api/transactions/create-checkout-session` - Create Stripe session (protected)
- `GET /api/transactions` - Get user's transactions (protected)
- `GET /api/transactions/:id` - Get transaction details (protected)
- `POST /api/transactions/webhook` - Stripe webhook

## Database Models

### User
- firstName, lastName, email, password
- Profile info (phone, address, country)
- Account type (buyer, seller)
- Ratings and review counts
- OAuth integration

### Property
- Basic info (title, description)
- Location (galaxy, planet, specific location)
- Price and features
- Images, status, ratings
- Seller reference

### Transaction
- Buyer & seller references
- Property reference
- Payment info (Stripe)
- Status tracking
- Escrow support

### Review
- Rating (1-5)
- Comments and aspect ratings
- Links to property, users, and transaction

## Development Notes

- All prices are stored in cents (multiply by 100 for Stripe)
- JWT tokens expire after 7 days
- Rate limiting: 100 requests per 15 minutes per IP
- All endpoints return consistent JSON format

## Deployment

Deploy to Railway, Heroku, or similar Node.js hosting:

```bash
npm run build
npm start
```
