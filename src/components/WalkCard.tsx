import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Footprints, ArrowRight } from 'lucide-react';
import type { Walk } from '../types';

interface WalkCardProps {
  walk: Walk;
}

export const WalkCard: React.FC<WalkCardProps> = ({ walk }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/walks/${walk.id}`)}
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
          src={walk.image}
          alt={walk.title}
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
          <span className="badge badge-walk" style={{ backdropFilter: 'blur(6px)' }}>
            {walk.category} Walk
          </span>
        </div>

        {/* Difficulty Badge */}
        <div style={{ position: 'absolute', top: '0.85rem', right: '0.85rem' }}>
          <span
            style={{
              padding: '0.2rem 0.55rem',
              borderRadius: '4px',
              backgroundColor: 'rgba(21, 16, 13, 0.75)',
              border: '1px solid rgba(194, 139, 91, 0.3)',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#f5eee6'
            }}
          >
            {walk.difficulty}
          </span>
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
              fontSize: '1.2rem',
              color: '#f5eee6',
              marginBottom: '0.5rem'
            }}
          >
            {walk.title}
          </h3>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '0.8125rem',
              color: '#c28b5b',
              marginBottom: '0.75rem',
              fontWeight: 500
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Clock size={14} /> {walk.duration}
            </span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Footprints size={14} /> {walk.distance}
            </span>
            <span>•</span>
            <span>{walk.stops.length} stops</span>
          </div>

          <p
            style={{
              color: '#c9bcaf',
              fontSize: '0.875rem',
              lineHeight: 1.5,
              marginBottom: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {walk.description}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(194, 139, 91, 0.15)',
            fontSize: '0.85rem',
            color: '#c28b5b',
            fontWeight: 600
          }}
        >
          <span>Explore Trail & Route</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};
