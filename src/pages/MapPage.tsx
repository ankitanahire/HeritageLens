import React, { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, Navigation, ArrowRight, Heart, Plus } from 'lucide-react';
import { MONUMENTS } from '../data/monuments';
import { WALKS } from '../data/walks';
import { EXPERIENCES } from '../data/experiences';
import { MapView } from '../components/MapView';
import { useSaved } from '../context/SavedContext';

export const MapPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isSaved, toggleSave, addToItinerary } = useSaved();

  const initialPlaceId = searchParams.get('place');
  const initialMonument = MONUMENTS.find((m) => m.id === initialPlaceId);

  const [searchQuery, setSearchQuery] = useState('');
  const [showHeritage, setShowHeritage] = useState(true);
  const [showWalks, setShowWalks] = useState(true);
  const [showExperiences, setShowExperiences] = useState(true);

  // Popular category checkboxes matching Screen 3 reference
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<any>(initialMonument || MONUMENTS[0]);
  const [selectedType, setSelectedType] = useState<'monument' | 'walk' | 'experience'>('monument');

  const popularFilters = ['Fort', 'Wada', 'Temple', 'Palace', 'Cave Temple'];

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  // Filter places based on search input
  const filteredMonuments = useMemo(() => {
    if (!searchQuery.trim()) return MONUMENTS;
    const q = searchQuery.toLowerCase().trim();
    return MONUMENTS.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.area.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleSelectMarker = (place: any, type: 'monument' | 'walk' | 'experience') => {
    setSelectedPlace(place);
    setSelectedType(type);
  };

  const saved = selectedPlace ? isSaved(selectedPlace.id) : false;

  const handleGetDirections = () => {
    if (!selectedPlace) return;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${selectedPlace.latitude},${selectedPlace.longitude}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddToItinerary = () => {
    if (!selectedPlace) return;
    addToItinerary({
      placeId: selectedPlace.id,
      type: selectedType,
      title: selectedPlace.name || selectedPlace.title,
      time: '11:00 AM',
      duration: '1 hr',
      category: selectedPlace.category || 'Heritage',
      location: selectedPlace.area || selectedPlace.location || 'Pune',
      image: selectedPlace.heroImage || selectedPlace.image,
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 4.5rem)'
      }}
    >
      <div
        className="container map-layout-grid"
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '2rem',
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 360px) 1fr',
          gap: '1.75rem',
          alignItems: 'stretch'
        }}
      >
        {/* Left Control Panel (Screen 3 Reference) */}
        <div
          style={{
            backgroundColor: '#1f1714',
            border: '1px solid rgba(194, 139, 91, 0.25)',
            borderRadius: '12px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          {/* Header */}
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.85rem',
                color: '#f5eee6',
                marginBottom: '0.4rem'
              }}
            >
              Explore Pune
            </h1>
            <p style={{ color: '#c9bcaf', fontSize: '0.875rem', lineHeight: 1.5 }}>
              Find heritage sites, walks and experiences on the map and plan your route.
            </p>
          </div>

          {/* Search on Map Input */}
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search on map..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                paddingLeft: '2.4rem',
                backgroundColor: '#15100d',
                borderColor: 'rgba(194, 139, 91, 0.3)'
              }}
            />
            <Search
              size={17}
              color="#8e8073"
              style={{
                position: 'absolute',
                left: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            />
          </div>

          {/* Map Legend (Screen 3 Reference) */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#15100d',
              borderRadius: '8px',
              border: '1px solid rgba(194, 139, 91, 0.15)'
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#8e8073',
                marginBottom: '0.75rem',
                fontWeight: 700
              }}
            >
              Map Layers & Legend
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.875rem',
                  color: '#f5eee6',
                  cursor: 'pointer'
                }}
              >
                <input
                  type="checkbox"
                  checked={showHeritage}
                  onChange={(e) => setShowHeritage(e.target.checked)}
                  style={{ accentColor: '#d9884e' }}
                />
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#d9884e',
                    boxShadow: '0 0 6px #d9884e'
                  }}
                />
                <span>Heritage Places ({filteredMonuments.length})</span>
              </label>

              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.875rem',
                  color: '#f5eee6',
                  cursor: 'pointer'
                }}
              >
                <input
                  type="checkbox"
                  checked={showWalks}
                  onChange={(e) => setShowWalks(e.target.checked)}
                  style={{ accentColor: '#5fa874' }}
                />
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#5fa874',
                    boxShadow: '0 0 6px #5fa874'
                  }}
                />
                <span>Walk Routes ({WALKS.length})</span>
              </label>

              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.875rem',
                  color: '#f5eee6',
                  cursor: 'pointer'
                }}
              >
                <input
                  type="checkbox"
                  checked={showExperiences}
                  onChange={(e) => setShowExperiences(e.target.checked)}
                  style={{ accentColor: '#5694c9' }}
                />
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#5694c9',
                    boxShadow: '0 0 6px #5694c9'
                  }}
                />
                <span>Experiences ({EXPERIENCES.length})</span>
              </label>
            </div>
          </div>

          {/* Popular Filters Checkboxes (Screen 3 Reference) */}
          <div>
            <div
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#8e8073',
                marginBottom: '0.75rem',
                fontWeight: 700
              }}
            >
              Popular Filters
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {popularFilters.map((cat) => (
                <label
                  key={cat}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    fontSize: '0.875rem',
                    color: '#c9bcaf',
                    cursor: 'pointer'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    style={{ accentColor: '#c28b5b' }}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Center / Right Map Area with Floating Card */}
        <div style={{ position: 'relative', height: '100%', minHeight: '600px' }}>
          <MapView
            monuments={filteredMonuments}
            walks={WALKS}
            experiences={EXPERIENCES}
            selectedPlace={selectedPlace}
            onSelectPlace={handleSelectMarker}
            showMonuments={showHeritage}
            showWalks={showWalks}
            showExperiences={showExperiences}
            categoryFilter={selectedCategories}
          />

          {/* Selected Place Floating Card (Bottom Right of Map, Screen 3 Reference) */}
          {selectedPlace && (
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                zIndex: 1000,
                width: 'calc(100% - 3rem)',
                maxWidth: '380px',
                backgroundColor: '#1f1714',
                border: '1px solid #c28b5b',
                borderRadius: '12px',
                padding: '1rem',
                boxShadow: 'var(--shadow-lg), 0 0 20px rgba(194, 139, 91, 0.25)',
                display: 'flex',
                gap: '0.85rem',
                alignItems: 'center'
              }}
              className="animate-fade-in"
            >
              <img
                src={selectedPlace.heroImage || selectedPlace.image}
                alt={selectedPlace.name || selectedPlace.title}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  flexShrink: 0
                }}
              />

              <div style={{ flex: 1, minWidth: 0 }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.05rem',
                    color: '#f5eee6',
                    marginBottom: '0.2rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {selectedPlace.name || selectedPlace.title}
                </h4>

                <p style={{ color: '#c9bcaf', fontSize: '0.785rem', marginBottom: '0.5rem' }}>
                  {selectedPlace.category || 'Trail'} • {selectedPlace.historicalPeriod || selectedPlace.area || selectedPlace.duration}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => {
                      if (selectedType === 'monument') {
                        navigate(`/monument/${selectedPlace.id}`);
                      } else if (selectedType === 'walk') {
                        navigate(`/walks/${selectedPlace.id}`);
                      } else {
                        navigate(`/experiences/${selectedPlace.id}`);
                      }
                    }}
                    style={{
                      fontSize: '0.8rem',
                      color: '#d89e68',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <span>View details</span>
                    <ArrowRight size={13} />
                  </button>

                  <button
                    onClick={handleGetDirections}
                    style={{
                      fontSize: '0.8rem',
                      color: '#c9bcaf',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.2rem'
                    }}
                  >
                    <Navigation size={12} color="#c28b5b" />
                    <span>Directions</span>
                  </button>

                  <button
                    onClick={() => toggleSave(selectedPlace.id, selectedPlace.name || selectedPlace.title)}
                    aria-label="Save"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: saved ? '#c28b5b' : '#8e8073',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.2rem'
                    }}
                  >
                    <Heart size={14} fill={saved ? '#c28b5b' : 'none'} />
                  </button>

                  <button
                    onClick={handleAddToItinerary}
                    aria-label="Add to Itinerary"
                    title="Add to Itinerary"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#c28b5b',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.2rem'
                    }}
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .map-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
