import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, User, Volume2 } from 'lucide-react';
import { useSaved } from '../context/SavedContext';
import { useAudio } from '../context/AudioContext';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { savedIds, itinerary, bookings } = useSaved();
  const { playbackRate, setRate } = useAudio();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9995,
        backgroundColor: 'rgba(10, 7, 6, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '540px',
          backgroundColor: '#1f1714',
          border: '1px solid rgba(194, 139, 91, 0.3)',
          borderRadius: '14px',
          boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '85vh'
        }}
        className="animate-fade-in"
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid rgba(194, 139, 91, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#18120f'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(194, 139, 91, 0.25)',
                border: '1px solid #c28b5b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f5eee6'
              }}
            >
              <User size={20} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#f5eee6' }}>
                Ananya Sharma
              </h3>
              <p style={{ color: '#c28b5b', fontSize: '0.8rem', fontWeight: 600 }}>
                Pune Heritage Explorer
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(39, 30, 26, 0.8)',
              border: '1px solid rgba(194, 139, 91, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#c9bcaf'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Stats Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
              textAlign: 'center'
            }}
          >
            <div
              onClick={() => {
                onClose();
                navigate('/saved');
              }}
              style={{
                padding: '0.85rem 0.5rem',
                backgroundColor: '#15100d',
                borderRadius: '8px',
                border: '1px solid rgba(194, 139, 91, 0.15)',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f5eee6' }}>
                {savedIds.length}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#c28b5b' }}>Saved Places</div>
            </div>

            <div
              onClick={() => {
                onClose();
                navigate('/saved');
              }}
              style={{
                padding: '0.85rem 0.5rem',
                backgroundColor: '#15100d',
                borderRadius: '8px',
                border: '1px solid rgba(194, 139, 91, 0.15)',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f5eee6' }}>
                {itinerary.length}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#c28b5b' }}>Planned Stops</div>
            </div>

            <div
              style={{
                padding: '0.85rem 0.5rem',
                backgroundColor: '#15100d',
                borderRadius: '8px',
                border: '1px solid rgba(194, 139, 91, 0.15)'
              }}
            >
              <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f5eee6' }}>
                {bookings.length}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#c28b5b' }}>Bookings</div>
            </div>
          </div>

          {/* Active Bookings List */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#8e8073',
                marginBottom: '0.75rem'
              }}
            >
              My Booked Experiences ({bookings.length})
            </h4>

            {bookings.length === 0 ? (
              <div
                style={{
                  padding: '1.25rem',
                  backgroundColor: '#15100d',
                  borderRadius: '8px',
                  textAlign: 'center',
                  color: '#8e8073',
                  fontSize: '0.875rem'
                }}
              >
                No active bookings yet. Browse{' '}
                <span
                  onClick={() => {
                    onClose();
                    navigate('/experiences');
                  }}
                  style={{ color: '#c28b5b', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Local Experiences
                </span>{' '}
                to reserve seats.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    style={{
                      padding: '1rem',
                      backgroundColor: '#15100d',
                      borderRadius: '8px',
                      border: '1px solid rgba(194, 139, 91, 0.25)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                      <span style={{ fontWeight: 600, color: '#f5eee6', fontSize: '0.95rem' }}>
                        {b.experienceTitle}
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          backgroundColor: 'rgba(95, 168, 116, 0.2)',
                          color: '#7ece94',
                          border: '1px solid rgba(95, 168, 116, 0.3)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          fontWeight: 700
                        }}
                      >
                        Confirmed
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: '#c9bcaf', marginBottom: '0.35rem' }}>
                      <span>Date: {b.date}</span>
                      <span>Time: {b.time}</span>
                      <span>Guests: {b.guests}</span>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: '#8e8073', fontFamily: 'monospace' }}>
                      Ref: <strong style={{ color: '#d89e68' }}>{b.bookingReference}</strong>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Voice Preferences */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#15100d',
              borderRadius: '8px',
              border: '1px solid rgba(194, 139, 91, 0.15)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Volume2 size={16} color="#c28b5b" />
              <span style={{ fontSize: '0.9rem', color: '#f5eee6', fontWeight: 600 }}>
                Default Narration Speed
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[0.75, 1.0, 1.25, 1.5].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setRate(rate)}
                  style={{
                    flex: 1,
                    padding: '0.4rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    backgroundColor: playbackRate === rate ? '#c28b5b' : 'rgba(39, 30, 26, 0.8)',
                    color: playbackRate === rate ? '#15100d' : '#c9bcaf',
                    border: '1px solid rgba(194, 139, 91, 0.25)'
                  }}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
