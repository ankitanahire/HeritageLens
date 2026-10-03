import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EXPERIENCES } from '../data/experiences';
import { BookingModal } from '../components/BookingModal';
import { FullScreenCarousel } from '../components/FullScreenCarousel';
import { useSaved } from '../context/SavedContext';
import type { Experience } from '../types';

export const ExperiencesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [bookingExperience, setBookingExperience] = useState<Experience | null>(null);
  const navigate = useNavigate();
  const { isSaved, toggleSave } = useSaved();

  const categories = ['All', 'Food', 'Art', 'Culture', 'Music', 'Workshops'];

  const filteredExperiences =
    selectedCategory === 'All'
      ? EXPERIENCES
      : EXPERIENCES.filter((e) => e.category.toLowerCase() === selectedCategory.toLowerCase());

  const slides = filteredExperiences.map((experience) => ({
    id: experience.id,
    title: experience.title,
    category: experience.category,
    image: experience.image,
    description: experience.description,
    badge: experience.badge,
    metadata: [experience.duration, experience.priceFormatted, experience.location.split(',')[0]],
    primaryActionLabel: 'Book Now',
    onPrimaryAction: () => setBookingExperience(experience),
    secondaryActionLabel: 'View Experience',
    onSecondaryAction: () => navigate(`/experiences/${experience.id}`),
    isSaved: isSaved(experience.id),
    onToggleSave: () => toggleSave(experience.id, experience.title)
  }));

  return (
    <>
      <FullScreenCarousel
        eyebrow="Pune Experiences"
        slides={slides}
        toolbar={(
          <div className="full-screen-showcase__filters" role="group" aria-label="Filter experiences">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`full-screen-showcase__filter${selectedCategory === category ? ' is-active' : ''}`}
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      />

      {/* Booking Modal */}
      {bookingExperience && (
        <BookingModal
          experience={bookingExperience}
          isOpen={!!bookingExperience}
          onClose={() => setBookingExperience(null)}
        />
      )}
    </>
  );
};
