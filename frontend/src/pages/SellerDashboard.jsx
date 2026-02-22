import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { propertyAPI, transactionAPI } from '../services/api';
import '../styles/SellerDashboard.css';

function SellerDashboard() {
  const { user } = useSelector((state) => state.auth);
  const [listings, setListings] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showNewListing, setShowNewListing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listingsResponse = await propertyAPI.getUserProperties(user._id);
        const transactionsResponse = await transactionAPI.getUserTransactions('sells');

        setListings(listingsResponse.data);
        setTransactions(transactionsResponse.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load dashboard');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  if (loading) return <div className="loading">Loading dashboard...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="seller-dashboard">
      <h1>📊 Seller Dashboard</h1>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Listings</h3>
          <p className="stat-number">{listings.length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Sales</h3>
          <p className="stat-number">{user.totalSales}</p>
        </div>
        <div className="stat-card">
          <h3>Rating</h3>
          <p className="stat-number">⭐ {user.rating.toFixed(1)}/5</p>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <h2>My Listings</h2>
          <button
            className="new-listing-button"
            onClick={() => setShowNewListing(!showNewListing)}
          >
            + New Listing
          </button>
        </div>

        {listings.length === 0 ? (
          <p className="no-data">No listings yet. Create your first property!</p>
        ) : (
          <div className="listings-table">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Planet</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Views</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((listing) => (
                  <tr key={listing._id}>
                    <td>{listing.title}</td>
                    <td>{listing.planet}</td>
                    <td>${listing.price.toLocaleString()}</td>
                    <td>
                      <span className={`status ${listing.status}`}>{listing.status}</span>
                    </td>
                    <td>{listing.views}</td>
                    <td>
                      <button className="action-button">Edit</button>
                      <button className="action-button delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="dashboard-section">
        <h2>Recent Sales</h2>
        {transactions.length === 0 ? (
          <p className="no-data">No sales yet.</p>
        ) : (
          <div className="transactions-list">
            {transactions.map((transaction) => (
              <div key={transaction._id} className="transaction-item">
                <div>
                  <p className="transaction-property">{transaction.property.title}</p>
                  <p className="transaction-buyer">Buyer: {transaction.buyer.firstName}</p>
                </div>
                <div>
                  <p className="transaction-amount">
                    ${transaction.priceAtPurchase.toLocaleString()}
                  </p>
                  <p className={`transaction-status ${transaction.status}`}>
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SellerDashboard;
