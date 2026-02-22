# Intergalactic Real Estate Marketplace - Frontend

Frontend application for the Intergalactic Real Estate Marketplace built with React, Redux, and Vite.

## Features

- Browse and search planetary properties
- Advanced filtering by galaxy, planet, price range
- User authentication and profiles
- Shopping cart and checkout with Stripe
- Seller dashboard for managing listings
- Responsive design with modern UI

## Tech Stack

- React 18
- Redux & Redux Toolkit
- React Router v6
- Vite
- Axios
- Stripe integration

## Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Configuration

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

### Running

Development:
```bash
npm run dev
```

Build:
```bash
npm run build
```

Preview:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PropertyCard.jsx
│   └── PrivateRoute.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── BrowseListings.jsx
│   ├── PropertyDetail.jsx
│   ├── UserProfile.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Checkout.jsx
│   └── SellerDashboard.jsx
├── services/        # API client
│   └── api.js
├── redux/          # State management
│   ├── authSlice.js
│   ├── propertySlice.js
│   └── store.js
├── styles/         # CSS files
├── App.jsx
└── main.jsx
```

## Key Features

### Authentication
- Email/password signup and login
- JWT token-based authentication
- OAuth2 integration ready
- Protected routes

### Property Browsing
- Filter by galaxy, planet, price
- Sort by newest, price, rating
- Pagination support
- Property detail pages with images and features

### Checkout
- Stripe payment integration
- Order summary
- Secure checkout flow

### Seller Dashboard
- Create and manage listings
- Track sales and transactions
- View transaction history
- Property analytics

## API Integration

All API calls are handled through the `services/api.js` file with:
- Automatic token injection
- Error handling
- Request/response interceptors

## State Management

Redux is used for:
- User authentication state
- Property listings and filters
- Loading and error states

## Styling

CSS files are organized by component/page with:
- Responsive design
- Modern gradient backgrounds
- Smooth animations
- Mobile-first approach

## Deployment

Deploy to Vercel:

```bash
vercel deploy
```

Or other Node.js hosting providers.

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
