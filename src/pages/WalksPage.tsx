import React, { useState } from 'react';
import { WALKS } from '../data/walks';
import { WalkCard } from '../components/WalkCard';

export const WalksPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Heritage', 'Food', 'Culture', 'Nature'];

  const filteredWalks =
    selectedCategory === 'All'
      ? WALKS
      : WALKS.filter((w) => w.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      {/* Page Header (Screen 5 Reference) */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: '#f5eee6',
            marginBottom: '0.65rem'
          }}
        >
          Curated Walks
        </h1>
        <p style={{ color: '#c9bcaf', fontSize: '1.05rem', maxWidth: '640px' }}>
          Explore themed walking routes that bring Pune's history, architecture and culture to life.
        </p>
      </div>

      {/* Filter Category Pills (Screen 5 Reference) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '2.5rem' }}>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                backgroundColor: isSelected ? '#c28b5b' : 'rgba(39, 30, 26, 0.8)',
                color: isSelected ? '#15100d' : '#e2d7c9',
                border: isSelected ? '1px solid #c28b5b' : '1px solid rgba(194, 139, 91, 0.25)',
                fontWeight: isSelected ? 700 : 500,
                fontSize: '0.875rem',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Walks Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem'
        }}
      >
        {filteredWalks.map((walk) => (
          <WalkCard key={walk.id} walk={walk} />
        ))}
      </div>
    </div>
  );
};
