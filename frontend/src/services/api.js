import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  signup: (data) => api.post('/auth/signup', data),
  login: (data) => api.post('/auth/login', data),
  getCurrentUser: () => api.get('/auth/me'),
  getUserProfile: (id) => api.get(`/auth/profile/${id}`),
  updateProfile: (data) => api.patch('/auth/profile', data),
};

// Properties API calls
export const propertyAPI = {
  getProperties: (params) => api.get('/properties', { params }),
  getProperty: (id) => api.get(`/properties/${id}`),
  createProperty: (data) => api.post('/properties', data),
  updateProperty: (id, data) => api.patch(`/properties/${id}`, data),
  deleteProperty: (id) => api.delete(`/properties/${id}`),
  getUserProperties: (id) => api.get(`/properties/user/${id}`),
};

// Transactions API calls
export const transactionAPI = {
  createCheckoutSession: (data) => api.post('/transactions/create-checkout-session', data),
  getUserTransactions: (type) => api.get('/transactions', { params: { type } }),
  getTransaction: (id) => api.get(`/transactions/${id}`),
};

export default api;
