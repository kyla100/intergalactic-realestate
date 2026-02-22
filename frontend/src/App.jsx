import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authAPI } from './services/api';
import { setUser, setToken } from './redux/authSlice';

// Pages
import Home from './pages/Home';
import BrowseListings from './pages/BrowseListings';
import PropertyDetail from './pages/PropertyDetail';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import SellerDashboard from './pages/SellerDashboard';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

import './styles/App.css';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token by fetching current user
      authAPI
        .getCurrentUser()
        .then((res) => {
          dispatch(setUser(res.data));
          dispatch(setToken(token));
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    }
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<BrowseListings />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />

        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/checkout/:propertyId" element={<Checkout />} />
          <Route path="/checkout/success" element={<Home />} />
          <Route path="/dashboard" element={<SellerDashboard />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
