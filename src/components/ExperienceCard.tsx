import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, MapPin, Heart, Calendar } from 'lucide-react';
import type { Experience } from '../types';
import { useSaved } from '../context/SavedContext';

interface ExperienceCardProps {
  experience: Experience;
  onBookNow?: (experience: Experience) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onBookNow }) => {
  const navigate = useNavigate();
  const { isSaved, toggleSave } = useSaved();
  const saved = isSaved(experience.id);

  const handleCardClick = () => {
    navigate(`/experiences/${experience.id}`);
  };

  const handleBookClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onBookNow) {
      onBookNow(experience);
    } else {
      navigate(`/experiences/${experience.id}?book=true`);
    }
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSave(experience.id, experience.title);
  };

  return (
    <div
      onClick={handleCardClick}
      className="heritage-card"
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div
        className="card-image-wrapper"
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          position: 'relative'
        }}
      >
        <img
          src={experience.image}
          alt={experience.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(21, 16, 13, 0.8) 0%, transparent 60%)'
          }}
        />

        {/* Category Badge */}
        <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem' }}>
          <span className="badge badge-exp" style={{ backdropFilter: 'blur(6px)' }}>
            {experience.category}
          </span>
        </div>

        {/* Feature/Seats Badge */}
        <div style={{ position: 'absolute', top: '0.85rem', right: '0.85rem' }}>
          <span
            style={{
              padding: '0.2rem 0.55rem',
              borderRadius: '4px',
              backgroundColor: 'rgba(21, 16, 13, 0.75)',
              border: '1px solid rgba(194, 139, 91, 0.3)',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#d89e68'
            }}
          >
            {experience.badge}
          </span>
        </div>

        {/* Price Tag in Bottom Left */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            left: '0.85rem',
            backgroundColor: 'rgba(21, 16, 13, 0.85)',
            border: '1px solid rgba(194, 139, 91, 0.3)',
            padding: '0.25rem 0.65rem',
            borderRadius: '4px',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#f5eee6'
          }}
        >
          {experience.priceFormatted}
        </div>
      </div>

      <div
        style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              color: '#f5eee6',
              marginBottom: '0.4rem'
            }}
          >
            {experience.title}
          </h3>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              color: '#c9bcaf',
              marginBottom: '0.75rem'
            }}
          >
            <Clock size={13} color="#c28b5b" />
            <span>{experience.duration}</span>
            <span>•</span>
            <MapPin size={13} color="#c28b5b" />
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {experience.location.split(',')[0]}
            </span>
          </div>

          <p
            style={{
              color: '#c9bcaf',
              fontSize: '0.85rem',
              lineHeight: 1.5,
              marginBottom: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {experience.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(194, 139, 91, 0.15)'
          }}
        >
          <button
            onClick={handleBookClick}
            className="btn-primary"
            style={{
              flex: 1,
              padding: '0.65rem 1rem',
              fontSize: '0.875rem'
            }}
          >
            <Calendar size={15} />
            Book Now
          </button>

          <button
            onClick={handleSaveClick}
            aria-label={saved ? 'Remove from saved' : 'Save experience'}
            style={{
              width: '2.4rem',
              height: '2.4rem',
              borderRadius: '6px',
              backgroundColor: saved ? 'rgba(194, 139, 91, 0.9)' : 'rgba(39, 30, 26, 0.8)',
              border: '1px solid rgba(194, 139, 91, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: saved ? '#ffffff' : '#f5eee6',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
          >
            <Heart size={16} fill={saved ? '#ffffff' : 'none'} color={saved ? '#ffffff' : '#f5eee6'} />
          </button>
        </div>
      </div>
    </div>
  );
};
