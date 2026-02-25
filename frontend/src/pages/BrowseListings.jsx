import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { propertyAPI } from '../services/api';
import { setProperties, setLoading, setError } from '../redux/propertySlice';
import { getAllProperties } from '../data/propertyData';
import PropertyCard from '../components/PropertyCard';
import '../styles/BrowseListings.css';

function BrowseListings() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { properties, loading, pagination } = useSelector((state) => state.properties);
  const [filters, setFilters] = useState({
    galaxy: searchParams.get('galaxy') || '',
    planet: searchParams.get('planet') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    sortBy: searchParams.get('sortBy') || 'newest',
  });

  useEffect(() => {
    const fetchProperties = async () => {
      dispatch(setLoading(true));
      try {
        const response = await propertyAPI.getProperties({
          ...filters,
          page: 1,
          limit: 12,
        });
          dispatch(setProperties(response.data));
      } catch (error) {
          // If API fails (dev environment), fall back to local mock data and apply filters client-side
          const all = getAllProperties();
          const filtered = all.filter((p) => {
            if (filters.galaxy && filters.galaxy !== '') {
              if (p.galaxyName !== filters.galaxy) return false;
            }
            if (filters.planet && filters.planet !== '') {
              if (!p.planetName.toLowerCase().includes(filters.planet.toLowerCase())) return false;
            }
            if (filters.minPrice && Number(filters.minPrice) > 0) {
              if (p.price < Number(filters.minPrice)) return false;
            }
            if (filters.maxPrice && Number(filters.maxPrice) > 0) {
              if (p.price > Number(filters.maxPrice)) return false;
            }
            return true;
          }).map(p => ({
            _id: p.id,
            id: p.id,
            title: p.name,
            description: p.description,
            mainImage: (typeof p.image === 'string' && /^(https?:\/\/|data:image\/|\/)/i.test(p.image)) ? p.image : null,
            image: p.image,
            planet: p.planetName,
            galaxy: p.galaxyName,
            price: p.price,
            rating: 4.5,
            status: 'available'
          }));

          dispatch(setProperties({ properties: filtered, pagination: { page: 1, pages: 1, total: filtered.length } }));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProperties();
  }, [filters, dispatch]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value, page: 1 }));
  };

  return (
    <div className="browse-listings">
      <h1 className="browse-title">Browse Planetary Properties</h1>

      <div className="filters">
        <select name="galaxy" value={filters.galaxy} onChange={handleFilterChange}>
          <option value="">All Galaxies</option>
          <option value="Milky Way">Milky Way</option>
          <option value="Andromeda">Andromeda</option>
          <option value="Triangulum">Triangulum</option>
          <option value="Large Magellanic Cloud">Large Magellanic Cloud</option>
          <option value="Small Magellanic Cloud">Small Magellanic Cloud</option>
        </select>

        <input
          type="text"
          name="planet"
          placeholder="Search planet..."
          value={filters.planet}
          onChange={handleFilterChange}
        />

        <input
          type="number"
          name="minPrice"
          placeholder="Min price"
          value={filters.minPrice}
          onChange={handleFilterChange}
        />

        <input
          type="number"
          name="maxPrice"
          placeholder="Max price"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />

        <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}>
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {loading ? (
        <p className="loading">Loading properties...</p>
      ) : properties.length === 0 ? (
        <p className="no-results">No properties found. Try adjusting your filters.</p>
      ) : (
        <>
          <div className="properties-grid">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>

          {pagination.pages > 1 && (
            <div className="pagination">
              <p>Page {pagination.page} of {pagination.pages}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default BrowseListings;
