import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { MONUMENTS } from '../data/monuments';
import { WALKS } from '../data/walks';
import { EXPERIENCES } from '../data/experiences';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  initialQuery = ''
}) => {
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, initialQuery]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Search monuments
  const filteredMonuments = q
    ? MONUMENTS.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.category.toLowerCase().includes(q) ||
          m.area.toLowerCase().includes(q) ||
          m.historicalPeriod.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q)
      )
    : [];

  // Search walks
  const filteredWalks = q
    ? WALKS.filter(
        (w) =>
          w.title.toLowerCase().includes(q) ||
          w.category.toLowerCase().includes(q) ||
          w.description.toLowerCase().includes(q) ||
          w.stops.some((s) => s.name.toLowerCase().includes(q))
      )
    : [];

  // Search experiences
  const filteredExperiences = q
    ? EXPERIENCES.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.location.toLowerCase().includes(q)
      )
    : [];

  const totalResults =
    filteredMonuments.length + filteredWalks.length + filteredExperiences.length;

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  const popularSearches = [
    'Shaniwar Wada',
    'Lal Mahal',
    'Aga Khan Palace',
    'Sinhagad',
    'Peshwa Heritage Walk',
    'Classical Music Evening',
    'Misal Food'
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9995,
        backgroundColor: 'rgba(10, 7, 6, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '3rem 1rem 1rem 1rem'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          backgroundColor: '#1f1714',
          border: '1px solid rgba(194, 139, 91, 0.35)',
          borderRadius: '12px',
          boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
        className="animate-fade-in"
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid rgba(194, 139, 91, 0.2)',
            backgroundColor: '#18120f'
          }}
        >
          <Search size={22} color="#c28b5b" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search places, walks, experiences (e.g., Shaniwar Wada, Food, Fort)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              padding: 0,
              fontSize: '1.05rem',
              color: '#f5eee6',
              boxShadow: 'none'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ color: '#8e8073', padding: '0.2rem' }}
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Search Content */}
        <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: '1.25rem 1.5rem' }}>
          {!q ? (
            <div>
              <p
                style={{
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#8e8073',
                  marginBottom: '0.75rem',
                  fontWeight: 600
                }}
              >
                Suggested Pune Searches
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: '999px',
                      backgroundColor: 'rgba(39, 30, 26, 0.8)',
                      border: '1px solid rgba(194, 139, 91, 0.2)',
                      color: '#c9bcaf',
                      fontSize: '0.825rem',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <div
                style={{
                  fontSize: '2rem',
                  marginBottom: '0.5rem',
                  color: '#8e8073'
                }}
              >
                🔍
              </div>
              <h4 style={{ color: '#f5eee6', fontSize: '1.1rem', marginBottom: '0.35rem' }}>
                No results found for "{query}"
              </h4>
              <p style={{ color: '#8e8073', fontSize: '0.85rem' }}>
                Try searching for "Shaniwar Wada", "Lal Mahal", "Aga Khan Palace", "Walk", or "Music".
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Monuments Section */}
              {filteredMonuments.length > 0 && (
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#c28b5b',
                      fontWeight: 700,
                      marginBottom: '0.65rem'
                    }}
                  >
                    Heritage Places ({filteredMonuments.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {filteredMonuments.map((m) => (
                      <div
                        key={m.id}
                        onClick={() => handleSelect(`/monument/${m.id}`)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.85rem',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '8px',
                          backgroundColor: '#15100d',
                          border: '1px solid rgba(194, 139, 91, 0.15)',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <img
                          src={m.heroImage}
                          alt={m.name}
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '4px',
                            objectFit: 'cover'
                          }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ color: '#f5eee6', fontWeight: 600, fontSize: '0.95rem' }}>
                            {m.name}
                          </div>
                          <div style={{ color: '#8e8073', fontSize: '0.775rem' }}>
                            {m.category} • {m.area} • {m.historicalPeriod}
                          </div>
                        </div>
                        <ArrowRight size={15} color="#c28b5b" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Walks Section */}
              {filteredWalks.length > 0 && (
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#5fa874',
                      fontWeight: 700,
                      marginBottom: '0.65rem'
                    }}
                  >
                    Walking Routes ({filteredWalks.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {filteredWalks.map((w) => (
                      <div
                        key={w.id}
                        onClick={() => handleSelect(`/walks/${w.id}`)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.85rem',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '8px',
                          backgroundColor: '#15100d',
                          border: '1px solid rgba(95, 168, 116, 0.2)',
                          cursor: 'pointer'
                        }}
                      >
                        <img
                          src={w.image}
                          alt={w.title}
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '4px',
                            objectFit: 'cover'
                          }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ color: '#f5eee6', fontWeight: 600, fontSize: '0.95rem' }}>
                            {w.title}
                          </div>
                          <div style={{ color: '#8e8073', fontSize: '0.775rem' }}>
                            {w.category} Walk • {w.distance} • {w.duration}
                          </div>
                        </div>
                        <ArrowRight size={15} color="#5fa874" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experiences Section */}
              {filteredExperiences.length > 0 && (
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#5694c9',
                      fontWeight: 700,
                      marginBottom: '0.65rem'
                    }}
                  >
                    Local Experiences ({filteredExperiences.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {filteredExperiences.map((e) => (
                      <div
                        key={e.id}
                        onClick={() => handleSelect(`/experiences/${e.id}`)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.85rem',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '8px',
                          backgroundColor: '#15100d',
                          border: '1px solid rgba(86, 148, 201, 0.2)',
                          cursor: 'pointer'
                        }}
                      >
                        <img
                          src={e.image}
                          alt={e.title}
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '4px',
                            objectFit: 'cover'
                          }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ color: '#f5eee6', fontWeight: 600, fontSize: '0.95rem' }}>
                            {e.title}
                          </div>
                          <div style={{ color: '#8e8073', fontSize: '0.775rem' }}>
                            {e.category} • {e.priceFormatted} • {e.duration}
                          </div>
                        </div>
                        <ArrowRight size={15} color="#5694c9" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
