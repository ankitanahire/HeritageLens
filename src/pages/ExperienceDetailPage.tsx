import React, { useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Heart,
  Calendar,
  ShieldCheck,
  Check
} from 'lucide-react';
import { EXPERIENCES } from '../data/experiences';
import { useSaved } from '../context/SavedContext';
import { BookingModal } from '../components/BookingModal';
import type { UpcomingSlot } from '../types';

export const ExperienceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const { isSaved, toggleSave } = useSaved();

  const experience = EXPERIENCES.find((e) => e.id === id) || EXPERIENCES[0];
  const [selectedSlot, setSelectedSlot] = useState<UpcomingSlot>(experience.upcomingDates[0]);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(searchParams.get('book') === 'true');

  const saved = isSaved(experience.id);

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      {/* Back to Experiences */}
      <Link
        to="/experiences"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#c28b5b',
          fontWeight: 600,
          fontSize: '0.9rem',
          marginBottom: '2rem'
        }}
      >
        <ArrowLeft size={18} />
        <span>Back to Experiences</span>
      </Link>

      {/* Main Experience Layout (Screen 6 from Reference) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3.5rem',
          alignItems: 'flex-start'
        }}
      >
        {/* Left Column: Large Hero Image & What's Included */}
        <div>
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#15100d',
              border: '1px solid rgba(194, 139, 91, 0.25)',
              boxShadow: 'var(--shadow-lg)',
              marginBottom: '2rem'
            }}
          >
            <img
              src={experience.image}
              alt={experience.title}
              style={{
                width: '100%',
                aspectRatio: '16 / 10',
                objectFit: 'cover'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem'
              }}
            >
              <span className="badge badge-exp">{experience.category}</span>
            </div>
          </div>

          {/* Included Features */}
          <div
            style={{
              backgroundColor: '#1f1714',
              borderRadius: '10px',
              border: '1px solid rgba(194, 139, 91, 0.2)',
              padding: '1.5rem'
            }}
          >
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: '#f5eee6',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <ShieldCheck size={18} color="#c28b5b" /> What's Included
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {experience.included.map((inc, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.9rem',
                    color: '#c9bcaf'
                  }}
                >
                  <Check size={16} color="#5fa874" aria-hidden="true" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Title, Metadata, Description, Dates & Booking (Screen 6 Reference) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div>
            <span
              style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#c28b5b',
                fontWeight: 700,
                display: 'block',
                marginBottom: '0.35rem'
              }}
            >
              EXPERIENCE
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.25rem, 4vw, 2.85rem)',
                color: '#f5eee6',
                lineHeight: 1.2,
                marginBottom: '0.85rem'
              }}
            >
              {experience.title}
            </h1>

            {/* Badges Bar (2 hours • ₹1000 • Limited Seats) matching Screen 6 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                fontSize: '0.95rem',
                color: '#c9bcaf',
                marginBottom: '1.5rem',
                flexWrap: 'wrap'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={16} color="#c28b5b" /> {experience.duration}
              </span>
              <span>•</span>
              <strong style={{ color: '#f5eee6', fontSize: '1.1rem' }}>
                {experience.priceFormatted}
              </strong>
              <span>•</span>
              <span className="badge badge-heritage">{experience.badge}</span>
            </div>

            <p style={{ color: '#c9bcaf', fontSize: '1.05rem', lineHeight: 1.65 }}>
              {experience.description}
            </p>
          </div>

          {/* Action Buttons: Book Now & Save (Screen 6 Reference) */}
          <div style={{ display: 'flex', gap: '0.85rem' }}>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="btn-primary"
              style={{
                flex: 2,
                padding: '0.9rem 1.5rem',
                fontSize: '1rem'
              }}
            >
              <Calendar size={18} />
              Book Now
            </button>

            <button
              onClick={() => toggleSave(experience.id, experience.title)}
              className="btn-secondary"
              style={{
                flex: 1,
                padding: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem'
              }}
            >
              <Heart
                size={18}
                fill={saved ? '#c28b5b' : 'none'}
                color={saved ? '#c28b5b' : '#f5eee6'}
              />
              <span>{saved ? 'Saved' : 'Save'}</span>
            </button>
          </div>

          {/* Highlights Section (Screen 6 Reference) */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: '#1f1714',
              borderRadius: '10px',
              border: '1px solid rgba(194, 139, 91, 0.2)'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: '#f5eee6',
                marginBottom: '1rem'
              }}
            >
              Highlights
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {experience.highlights.map((h, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    color: '#c9bcaf',
                    fontSize: '0.925rem'
                  }}
                >
                  <span style={{ color: '#c28b5b' }}>•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Dates Selector (Screen 6 Reference) */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: '#1f1714',
              borderRadius: '10px',
              border: '1px solid rgba(194, 139, 91, 0.2)'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: '#f5eee6',
                marginBottom: '1rem'
              }}
            >
              Upcoming Dates
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {experience.upcomingDates.map((slot, idx) => {
                const isSelected = selectedSlot.date === slot.date;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedSlot(slot)}
                    style={{
                      padding: '0.9rem 1.15rem',
                      borderRadius: '8px',
                      backgroundColor: isSelected ? 'rgba(194, 139, 91, 0.18)' : '#15100d',
                      border: isSelected
                        ? '1.5px solid #c28b5b'
                        : '1px solid rgba(194, 139, 91, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Calendar size={18} color={isSelected ? '#c28b5b' : '#8e8073'} />
                      <div>
                        <div style={{ color: '#f5eee6', fontWeight: 600, fontSize: '0.95rem' }}>
                          {slot.date}
                        </div>
                        <div style={{ color: '#c9bcaf', fontSize: '0.8rem' }}>
                          {slot.time}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: '#d89e68',
                          fontWeight: 600
                        }}
                      >
                        {slot.seatsLeft} seats left
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Flow Modal */}
      <BookingModal
        experience={experience}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedSlot={selectedSlot}
      />
    </div>
  );
};
