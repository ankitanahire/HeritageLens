import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  Clock,
  Ticket,
  Hourglass,
  MapPin,
  Navigation,
  Headphones,
  SlidersHorizontal,
  Plus,
  ExternalLink
} from 'lucide-react';
import { MONUMENTS } from '../data/monuments';
import { EXPERIENCES } from '../data/experiences';
import { useSaved } from '../context/SavedContext';
import { useAudio } from '../context/AudioContext';
import { ThenNowSlider } from '../components/ThenNowSlider';
import { AudioPlayer } from '../components/AudioPlayer';
import { ExperienceCard } from '../components/ExperienceCard';

export const MonumentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isSaved, toggleSave, addToItinerary } = useSaved();
  const { playMonument } = useAudio();

  const monument = MONUMENTS.find((m) => m.id === id) || MONUMENTS[0];
  const [activeImage, setActiveImage] = useState<string>(monument.heroImage);

  const saved = isSaved(monument.id);

  // Filter nearby experiences
  const nearbyExperiences = EXPERIENCES.filter((e) =>
    monument.nearbyExperienceIds.includes(e.id)
  );

  const handleGetDirections = () => {
    // Open Google Maps directions in new tab
    const url = `https://www.google.com/maps/dir/?api=1&destination=${monument.latitude},${monument.longitude}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddToItinerary = () => {
    addToItinerary({
      placeId: monument.id,
      type: 'monument',
      title: monument.name,
      time: '10:00 AM',
      duration: monument.estimatedTime.split('–')[0].trim() || '1 hr',
      category: `${monument.category} • ${monument.historicalPeriod}`,
      location: monument.area,
      image: monument.heroImage,
      latitude: monument.latitude,
      longitude: monument.longitude
    });
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      {/* Back Button */}
      <Link
        to="/explore"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#c28b5b',
          fontWeight: 600,
          fontSize: '0.9rem',
          marginBottom: '2rem',
          transition: 'color 0.2s'
        }}
      >
        <ArrowLeft size={18} />
        <span>Back to Explore</span>
      </Link>

      {/* Main 2-Column Monument Section (Screen 4 from Reference) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3rem',
          alignItems: 'flex-start',
          marginBottom: '4rem'
        }}
      >
        {/* Left Column: Monument Details & Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span className="badge badge-heritage">{monument.category}</span>
              <span style={{ color: '#c28b5b', fontSize: '0.85rem' }}>
                {monument.area} • {monument.historicalPeriod}
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
                color: '#f5eee6',
                lineHeight: 1.15,
                marginBottom: '1rem'
              }}
            >
              {monument.name}
            </h1>

            <p style={{ color: '#c9bcaf', fontSize: '1.05rem', lineHeight: 1.65 }}>
              {monument.description}
            </p>
          </div>

          {/* Quick Info Grid (Opening Hours, Entry Fee, Estimated Time) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              backgroundColor: '#1f1714',
              borderRadius: '10px',
              border: '1px solid rgba(194, 139, 91, 0.2)',
              padding: '1.25rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#c28b5b', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: 600 }}>
                <Clock size={14} /> Opening Hours
              </div>
              <div style={{ color: '#f5eee6', fontSize: '0.875rem', fontWeight: 600 }}>
                {monument.openingHours}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#c28b5b', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: 600 }}>
                <Ticket size={14} /> Entry Fee
              </div>
              <div style={{ color: '#f5eee6', fontSize: '0.875rem', fontWeight: 600 }}>
                {monument.entryFee}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#c28b5b', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: 600 }}>
                <Hourglass size={14} /> Time to Explore
              </div>
              <div style={{ color: '#f5eee6', fontSize: '0.875rem', fontWeight: 600 }}>
                {monument.estimatedTime}
              </div>
            </div>
          </div>

          {/* Interactive Feature Action Buttons (Screen 4 Reference) */}
          <div>
            <div
              style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#8e8073',
                marginBottom: '0.75rem',
                fontWeight: 600
              }}
            >
              Explore This Heritage Site
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {/* 📸 Then & Now */}
              <button
                onClick={() => {
                  const el = document.getElementById('then-now');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
                style={{ padding: '0.75rem 1.15rem' }}
              >
                <SlidersHorizontal size={16} color="#c28b5b" />
                <span>📸 Then & Now</span>
              </button>

              {/* 🎧 Listen to the Story */}
              <button
                onClick={() => {
                  playMonument(monument.id, 0);
                  const el = document.getElementById('audio-story');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
                style={{ padding: '0.75rem 1.15rem' }}
              >
                <Headphones size={16} color="#c28b5b" />
                <span>🎧 Listen to the Story</span>
              </button>

              {/* 🗺️ Add to Heritage Walk */}
              <button
                onClick={handleAddToItinerary}
                className="btn-secondary"
                style={{ padding: '0.75rem 1.15rem' }}
              >
                <Plus size={16} color="#c28b5b" />
                <span>🗺️ Add to Heritage Walk</span>
              </button>

              {/* ❤️ Save */}
              <button
                onClick={() => toggleSave(monument.id, monument.name)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.15rem',
                  borderRadius: '6px',
                  backgroundColor: saved ? 'rgba(194, 139, 91, 0.25)' : 'rgba(39, 30, 26, 0.8)',
                  border: saved ? '1px solid #c28b5b' : '1px solid rgba(194, 139, 91, 0.25)',
                  color: saved ? '#d89e68' : '#f5eee6',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}
              >
                <Heart size={16} fill={saved ? '#c28b5b' : 'none'} color={saved ? '#c28b5b' : '#f5eee6'} />
                <span>{saved ? '❤️ Saved' : '❤️ Save'}</span>
              </button>

              {/* 📍 Get Directions */}
              <button
                onClick={handleGetDirections}
                className="btn-primary"
                style={{ padding: '0.75rem 1.25rem' }}
              >
                <Navigation size={16} />
                <span>📍 Get Directions</span>
              </button>
            </div>
          </div>

          {/* Location Bar with Map Trigger */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#1f1714',
              borderRadius: '10px',
              border: '1px solid rgba(194, 139, 91, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(194, 139, 91, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c28b5b'
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ color: '#f5eee6', fontWeight: 600, fontSize: '0.95rem' }}>
                  {monument.area}, Pune
                </div>
                <div style={{ color: '#8e8073', fontSize: '0.8rem' }}>
                  Lat: {monument.latitude}, Long: {monument.longitude}
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate(`/map?place=${monument.id}`)}
              style={{
                color: '#c28b5b',
                fontWeight: 600,
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <span>View on Map</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>

        {/* Right Column: Hero Image with Vertical Gallery Selectors (Screen 4 Reference) */}
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
          {/* Main Large Photograph */}
          <div
            style={{
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#15100d',
              border: '1px solid rgba(194, 139, 91, 0.25)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <img
              src={activeImage}
              alt={monument.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Gallery Thumbnails List */}
          <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {monument.gallery.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(imgUrl)}
                style={{
                  width: '90px',
                  height: '65px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: activeImage === imgUrl ? '2px solid #c28b5b' : '1px solid rgba(194, 139, 91, 0.2)',
                  opacity: activeImage === imgUrl ? 1 : 0.65,
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
              >
                <img
                  src={imgUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================
          INTERACTIVE SECTIONS: AI VOICE NARRATOR & THEN/NOW COMPARISON
          ================================================================= */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        {/* Feature 1: AI Voice Narration */}
        <section id="audio-story">
          <AudioPlayer monument={monument} />
        </section>

        {/* Feature 2: Then & Now Historical Slider */}
        {monument.thenNow && (
          <section id="then-now">
            <ThenNowSlider
              title={monument.name}
              description={monument.thenNow.description}
              thenImage={monument.thenNow.thenImage}
              nowImage={monument.thenNow.nowImage}
              thenLabel={monument.thenNow.thenLabel}
              nowLabel={monument.thenNow.nowLabel}
            />
          </section>
        )}

        {/* Feature 3: Historical Timeline & Chronicle */}
        <section
          style={{
            backgroundColor: '#1f1714',
            borderRadius: '12px',
            border: '1px solid rgba(194, 139, 91, 0.2)',
            padding: '2rem'
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              color: '#f5eee6',
              marginBottom: '1rem'
            }}
          >
            Historical Chronicle & Heritage Significance
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#c28b5b', fontWeight: 600 }}>
                Year Constructed
              </span>
              <p style={{ color: '#f5eee6', fontSize: '1.1rem', fontWeight: 600 }}>
                {monument.history.builtYear}
              </p>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#c28b5b', fontWeight: 600 }}>
                Commissioned By
              </span>
              <p style={{ color: '#f5eee6', fontSize: '1.1rem', fontWeight: 600 }}>
                {monument.history.builder}
              </p>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#c28b5b', fontWeight: 600 }}>
                Architectural Style
              </span>
              <p style={{ color: '#f5eee6', fontSize: '0.95rem' }}>
                {monument.history.architectureStyle}
              </p>
            </div>
          </div>

          <h4
            style={{
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#8e8073',
              marginBottom: '1rem',
              fontWeight: 700
            }}
          >
            Key Historical Milestones
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {monument.history.keyEvents.map((ev, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  padding: '0.85rem 1rem',
                  backgroundColor: '#15100d',
                  borderRadius: '6px',
                  borderLeft: '3px solid #c28b5b'
                }}
              >
                <span
                  style={{
                    color: '#d89e68',
                    fontWeight: 700,
                    fontFamily: 'monospace',
                    fontSize: '1rem',
                    minWidth: '55px'
                  }}
                >
                  {ev.year}
                </span>
                <span style={{ color: '#c9bcaf', fontSize: '0.925rem' }}>
                  {ev.event}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Feature 4: Nearby Cultural Experiences */}
        {nearbyExperiences.length > 0 && (
          <section>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div>
                <span className="badge badge-exp" style={{ marginBottom: '0.35rem' }}>
                  Near {monument.name}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', color: '#f5eee6' }}>
                  Nearby Experiences & Food
                </h3>
              </div>
              <Link to="/experiences" style={{ color: '#c28b5b', fontSize: '0.9rem', fontWeight: 600 }}>
                See All Experiences →
              </Link>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.75rem'
              }}
            >
              {nearbyExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
