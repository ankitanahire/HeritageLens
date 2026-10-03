import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Heart, Headphones } from 'lucide-react';
import type { Monument } from '../types';
import { useSaved } from '../context/SavedContext';
import { useAudio } from '../context/AudioContext';

interface HeritageCardProps {
  monument: Monument;
}

export const HeritageCard: React.FC<HeritageCardProps> = ({ monument }) => {
  const { isSaved, toggleSave } = useSaved();
  const { playMonument, activeMonument, isPlaying } = useAudio();
  const navigate = useNavigate();

  const saved = isSaved(monument.id);
  const isCurrentlyPlaying = isPlaying && activeMonument?.id === monument.id;

  const handleAudioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    playMonument(monument.id, 0);
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSave(monument.id, monument.name);
  };

  return (
    <div
      onClick={() => navigate(`/monument/${monument.id}`)}
      className="heritage-card"
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      {/* Image Container */}
      <div
        className="card-image-wrapper"
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          position: 'relative'
        }}
      >
        <img
          src={monument.heroImage}
          alt={monument.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        {/* Gradient overlay for text contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(21, 16, 13, 0.75) 0%, transparent 60%)'
          }}
        />

        {/* Category Tag Badge */}
        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            left: '0.85rem'
          }}
        >
          <span
            className="badge badge-heritage"
            style={{
              backdropFilter: 'blur(6px)',
              fontWeight: 700
            }}
          >
            {monument.category}
          </span>
        </div>

        {/* Top-Right Save Heart Button */}
        <button
          onClick={handleSaveClick}
          aria-label={saved ? 'Remove from saved' : 'Save place'}
          style={{
            position: 'absolute',
            top: '0.85rem',
            right: '0.85rem',
            width: '2.25rem',
            height: '2.25rem',
            borderRadius: '50%',
            backgroundColor: saved ? 'rgba(194, 139, 91, 0.9)' : 'rgba(21, 16, 13, 0.65)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(194, 139, 91, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: saved ? '#ffffff' : '#f5eee6',
            transition: 'all 0.2s ease',
            zIndex: 2
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <Heart size={15} fill={saved ? '#ffffff' : 'none'} color={saved ? '#ffffff' : '#f5eee6'} />
        </button>

        {/* Quick Audio Listen Button */}
        <button
          onClick={handleAudioClick}
          aria-label="Listen to history"
          title="Listen to historical story"
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            right: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.35rem 0.65rem',
            borderRadius: '999px',
            backgroundColor: isCurrentlyPlaying ? '#c28b5b' : 'rgba(21, 16, 13, 0.75)',
            border: '1px solid rgba(194, 139, 91, 0.4)',
            color: isCurrentlyPlaying ? '#15100d' : '#f5eee6',
            fontSize: '0.75rem',
            fontWeight: 600,
            backdropFilter: 'blur(6px)',
            transition: 'all 0.2s ease',
            zIndex: 2
          }}
        >
          <Headphones size={13} />
          <span>{isCurrentlyPlaying ? 'Playing' : 'Listen'}</span>
        </button>
      </div>

      {/* Card Info Content */}
      <div
        style={{
          padding: '1.15rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          flex: 1
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: '#f5eee6',
              marginBottom: '0.25rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {monument.name}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              color: '#c9bcaf',
              letterSpacing: '0.02em'
            }}
          >
            {monument.area} • {monument.historicalPeriod}
          </p>
        </div>

        {/* Arrow Action */}
        <div
          style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            backgroundColor: 'rgba(194, 139, 91, 0.1)',
            border: '1px solid rgba(194, 139, 91, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#c28b5b',
            flexShrink: 0,
            transition: 'all 0.2s ease'
          }}
          className="card-arrow"
        >
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
};
