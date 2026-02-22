# 🌌 Intergalactic Real Estate Marketplace

A fullstack web platform for buying and selling real estate on planets across the Milky Way and beyond!

## Features

- 🏘️ **Browse Listings**: Search and filter properties across multiple galaxies and planets
- 💰 **Buy & Sell**: Complete marketplace transactions with Stripe payment processing
- 👤 **User Accounts**: Secure authentication with email/password and social login (Google, GitHub)
- 📊 **Seller Dashboard**: Manage your listings and track sales
- ⭐ **Reviews**: Rate and review properties and sellers
- 💬 **Messaging**: Communicate with buyers and sellers
- 🔐 **Secure Payments**: PCI-compliant Stripe integration

## Tech Stack

### Frontend
- React 18 with Vite
- React Router for navigation
- Redux for state management
- Axios for API requests
- Stripe.js for payments

### Backend
- Node.js + Express
- MongoDB + Mongoose for database
- JWT for authentication
- Passport.js for OAuth2
- Stripe API integration

## Project Structure

```
intergalactic-realestate/
├── backend/                    # Node.js/Express backend
│   ├── src/
│   │   ├── models/            # Mongoose schemas
│   │   ├── routes/            # API endpoints
│   │   ├── controllers/       # Business logic
│   │   ├── middleware/        # Auth, error handling
│   │   ├── config/            # Configuration
│   │   └── app.js             # Express app setup
│   ├── package.json
│   └── .env                   # Environment variables
└── frontend/                  # React frontend
    ├── src/
    │   ├── components/        # Reusable components
    │   ├── pages/            # Page components
    │   ├── services/         # API client
    │   ├── redux/            # State management
    │   └── App.jsx           # Main app component
    ├── package.json
    └── .env                  # Environment variables
```

## Getting Started

### Prerequisites
- Node.js 16+
- MongoDB (local or Atlas)
- Stripe account (test mode)

### Installation

1. Clone the repository
```bash
cd intergalactic-realestate
```

2. Install all dependencies
```bash
npm run install:all
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```bash
npm run dev
```

This will run both backend and frontend concurrently:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## API Documentation

### Authentication
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - Login with email/password
- `POST /api/auth/logout` - Logout
- `GET /api/auth/google` - Google OAuth2
- `GET /api/auth/github` - GitHub OAuth2

### Properties
- `GET /api/properties` - List all properties (with filters)
- `GET /api/properties/:id` - Get property details
- `POST /api/properties` - Create new listing (sellers only)
- `PATCH /api/properties/:id` - Update listing
- `DELETE /api/properties/:id` - Delete listing

### Transactions
- `POST /api/transactions/purchase` - Create purchase transaction
- `GET /api/transactions` - Get user's transaction history
- `POST /api/transactions/:id/confirm` - Confirm payment

### Users
- `GET /api/users/:id` - Get user profile
- `PATCH /api/users/:id` - Update profile
- `GET /api/users/:id/listings` - Get user's listings

## Development

### Running in development mode
```bash
npm run dev
```

### Building for production
```bash
npm run build
```

### Testing API endpoints
- Use Postman or VS Code REST Client
- Test credentials will be provided in backend README

## Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel deploy
```

### Backend (Railway/Heroku)
```bash
cd backend
git push heroku main
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues or questions, please create a GitHub issue or contact the development team.

---

🚀 Ready to explore the galaxy? Start buying and selling today!
