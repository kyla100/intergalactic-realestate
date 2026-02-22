import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { authAPI } from '../services/api';
import '../styles/UserProfile.css';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await authAPI.getUserProfile(id);
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load user profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <div className="loading">Loading profile...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!user) return <div className="error">User not found</div>;

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-avatar">
          {user.profilePicture ? (
            <img src={user.profilePicture} alt={user.firstName} />
          ) : (
            <div className="avatar-placeholder">
              {user.firstName[0]}
              {user.lastName[0]}
            </div>
          )}
        </div>

        <div className="profile-info">
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <p className="profile-rating">Rating: ⭐ {user.rating.toFixed(1)}/5</p>
          <p className="profile-bio">{user.bio}</p>

          <div className="profile-stats">
            <div className="stat">
              <span className="stat-number">{user.totalSales}</span>
              <span className="stat-label">Sales</span>
            </div>
            <div className="stat">
              <span className="stat-number">{user.totalPurchases}</span>
              <span className="stat-label">Purchases</span>
            </div>
            <div className="stat">
              <span className="stat-number">{user.totalReviews}</span>
              <span className="stat-label">Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {user.address && (
        <div className="profile-section">
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
          <p>
            <strong>City:</strong> {user.city}
          </p>
          <p>
            <strong>Country:</strong> {user.country}
          </p>
          {user.phone && (
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default UserProfile;
