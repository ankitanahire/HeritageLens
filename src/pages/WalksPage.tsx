import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WALKS } from '../data/walks';
import { FullScreenCarousel } from '../components/FullScreenCarousel';

export const WalksPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const navigate = useNavigate();

  const categories = ['All', 'Heritage', 'Food', 'Culture', 'Nature'];

  const filteredWalks =
    selectedCategory === 'All'
      ? WALKS
      : WALKS.filter((w) => w.category.toLowerCase() === selectedCategory.toLowerCase());

  const slides = filteredWalks.map((walk) => ({
    id: walk.id,
    title: walk.title,
    category: `${walk.category} Walk`,
    image: walk.image,
    description: walk.description,
    badge: walk.difficulty,
    metadata: [walk.duration, walk.distance, `${walk.stops.length} stops`],
    primaryActionLabel: 'Explore Walk & Route',
    onPrimaryAction: () => navigate(`/walks/${walk.id}`)
  }));

  return (
    <FullScreenCarousel
      eyebrow="Curated Pune Walks"
      slides={slides}
      toolbar={(
        <div className="full-screen-showcase__filters" role="group" aria-label="Filter walks">
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
  );
};
