import React, { useState, useMemo } from 'react';
import { Search, RefreshCw, MapPin } from 'lucide-react';
import { MONUMENTS } from '../data/monuments';
import { HeritageCard } from '../components/HeritageCard';

export const ExplorePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedArea, setSelectedArea] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('Recommended');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Fort', 'Wada', 'Temple', 'Palace', 'Cave Temple'];
  const areas = [
    'All',
    'Shaniwar Peth',
    'Sadashiv Peth',
    'Kasba Peth',
    'Budhwar Peth',
    'Yerwada',
    'Haveli / Sinhagad',
    'Shivajinagar'
  ];
  const sortOptions = ['Recommended', 'Nearest', 'Most Popular', 'Historical Period'];

  // Filter and Sort Monuments dynamically
  const filteredMonuments = useMemo(() => {
    let result = [...MONUMENTS];

    // Filter by Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.category.toLowerCase().includes(q) ||
          m.area.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q)
      );
    }

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter((m) => m.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Filter by Area
    if (selectedArea !== 'All') {
      result = result.filter((m) => {
        if (selectedArea === 'Haveli / Sinhagad') {
          return m.area.includes('Haveli') || m.area.includes('Sinhagad');
        }
        return m.area.toLowerCase().includes(selectedArea.toLowerCase());
      });
    }

    // Sort
    if (sortBy === 'Historical Period') {
      // Sort chronologically: 8th century, 17th century, 18th century, 19th century
      result.sort((a, b) => {
        const getCentury = (str: string) => {
          if (str.includes('8th')) return 8;
          if (str.includes('17th')) return 17;
          if (str.includes('18th')) return 18;
          if (str.includes('19th')) return 19;
          return 20;
        };
        return getCentury(a.historicalPeriod) - getCentury(b.historicalPeriod);
      });
    } else if (sortBy === 'Nearest') {
      // Sort by proximity to Pune city center (Shaniwar Wada 18.5191, 73.8555)
      result.sort((a, b) => {
        const distA = Math.hypot(a.latitude - 18.5191, a.longitude - 73.8555);
        const distB = Math.hypot(b.latitude - 18.5191, b.longitude - 73.8555);
        return distA - distB;
      });
    } else if (sortBy === 'Most Popular') {
      // Popular rank
      const popularOrder = ['shaniwar-wada', 'sinhagad-fort', 'lal-mahal', 'aga-khan-palace', 'dagdusheth-ganapati', 'vishrambaug-wada'];
      result.sort((a, b) => {
        const idxA = popularOrder.indexOf(a.id);
        const idxB = popularOrder.indexOf(b.id);
        return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
      });
    }

    return result;
  }, [selectedCategory, selectedArea, sortBy, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedArea('All');
    setSortBy('Recommended');
    setSearchQuery('');
  };

  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      {/* Page Header (Screen 2 Reference) */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: '#f5eee6',
            marginBottom: '0.65rem'
          }}
        >
          Heritage Places in Pune
        </h1>
        <p style={{ color: '#c9bcaf', fontSize: '1.05rem', maxWidth: '640px' }}>
          Step into centuries of history. Explore forts, wadas, temples and more.
        </p>
      </div>

      {/* Filter Bar (3 dropdowns + search matching Screen 2 reference) */}
      <div
        style={{
          backgroundColor: '#1f1714',
          border: '1px solid rgba(194, 139, 91, 0.25)',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2.5rem',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            alignItems: 'flex-end'
          }}
        >
          {/* Category Dropdown */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#8e8073',
                marginBottom: '0.4rem',
                fontWeight: 600
              }}
            >
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ width: '100%' }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Area Dropdown */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#8e8073',
                marginBottom: '0.4rem',
                fontWeight: 600
              }}
            >
              Area
            </label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              style={{ width: '100%' }}
            >
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#8e8073',
                marginBottom: '0.4rem',
                fontWeight: 600
              }}
            >
              Sort by
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ width: '100%' }}
            >
              {sortOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Search filter inside explore */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#8e8073',
                marginBottom: '0.4rem',
                fontWeight: 600
              }}
            >
              Search
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search monuments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', paddingLeft: '2.25rem' }}
              />
              <Search
                size={16}
                color="#8e8073"
                style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
          </div>
        </div>

        {/* Results Bar with Reset */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.825rem',
            color: '#c9bcaf',
            paddingTop: '0.5rem',
            borderTop: '1px solid rgba(194, 139, 91, 0.12)'
          }}
        >
          <span>
            Showing <strong style={{ color: '#f5eee6' }}>{filteredMonuments.length}</strong> of{' '}
            {MONUMENTS.length} heritage places
          </span>

          {(selectedCategory !== 'All' || selectedArea !== 'All' || searchQuery || sortBy !== 'Recommended') && (
            <button
              onClick={handleResetFilters}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#c28b5b',
                fontWeight: 600,
                fontSize: '0.8rem'
              }}
            >
              <RefreshCw size={13} />
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Grid of Monument Cards */}
      {filteredMonuments.length === 0 ? (
        <div
          style={{
            backgroundColor: '#1f1714',
            borderRadius: '12px',
            border: '1px solid rgba(194, 139, 91, 0.2)',
            padding: '4rem 2rem',
            textAlign: 'center'
          }}
        >
          <MapPin size={40} color="#8e8073" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#f5eee6', marginBottom: '0.5rem' }}>
            No heritage places matched your filters
          </h3>
          <p style={{ color: '#8e8073', marginBottom: '1.5rem', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
            Try selecting "All" categories or reset your search query to see Pune’s iconic landmarks.
          </p>
          <button onClick={handleResetFilters} className="btn-secondary">
            Clear all filters
          </button>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredMonuments.map((monument) => (
            <HeritageCard key={monument.id} monument={monument} />
          ))}
        </div>
      )}
    </div>
  );
};
