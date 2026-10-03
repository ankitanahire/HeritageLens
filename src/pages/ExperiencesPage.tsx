import React, { useState } from 'react';
import { EXPERIENCES } from '../data/experiences';
import { ExperienceCard } from '../components/ExperienceCard';
import { BookingModal } from '../components/BookingModal';
import type { Experience } from '../types';

export const ExperiencesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [bookingExperience, setBookingExperience] = useState<Experience | null>(null);

  const categories = ['All', 'Food', 'Art', 'Culture', 'Music', 'Workshops'];

  const filteredExperiences =
    selectedCategory === 'All'
      ? EXPERIENCES
      : EXPERIENCES.filter((e) => e.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: '#f5eee6',
            marginBottom: '0.65rem'
          }}
        >
          Local Experiences & Culture
        </h1>
        <p style={{ color: '#c9bcaf', fontSize: '1.05rem', maxWidth: '640px' }}>
          Immerse yourself in authentic Pune traditions: classical music baithaks, artisan workshops, and heritage culinary feasts.
        </p>
      </div>

      {/* Category Pills */}
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

      {/* Experiences Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem'
        }}
      >
        {filteredExperiences.map((exp) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            onBookNow={(selected) => setBookingExperience(selected)}
          />
        ))}
      </div>

      {/* Booking Modal */}
      {bookingExperience && (
        <BookingModal
          experience={bookingExperience}
          isOpen={!!bookingExperience}
          onClose={() => setBookingExperience(null)}
        />
      )}
    </div>
  );
};
