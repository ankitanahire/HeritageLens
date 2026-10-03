import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Trash2,
  ChevronUp,
  ChevronDown,
  Edit2,
  Plus,
  Sparkles,
  Map,
  Check,
  CalendarDays,
  Heart
} from 'lucide-react';
import { useSaved } from '../context/SavedContext';
import { MONUMENTS } from '../data/monuments';
import { EXPERIENCES } from '../data/experiences';
import { WALKS } from '../data/walks';
import { HeritageCard } from '../components/HeritageCard';
import { ExperienceCard } from '../components/ExperienceCard';
import type { ItineraryItem } from '../types';

interface MyTripPageProps {
  onOpenBuildTrip: () => void;
}

const walkStops = WALKS.flatMap((walk) => walk.stops);

const sameItemKey = (left: string, right: string | undefined): boolean =>
  !!right && left.trim().toLowerCase() === right.trim().toLowerCase();

const getItineraryImage = (item: ItineraryItem): string => {
  return MONUMENTS.find((monument) =>
    sameItemKey(monument.id, item.placeId) || sameItemKey(monument.name, item.title)
  )?.heroImage
    ?? EXPERIENCES.find((experience) =>
      sameItemKey(experience.id, item.placeId) || sameItemKey(experience.title, item.title)
    )?.image
    ?? WALKS.find((walk) =>
      sameItemKey(walk.id, item.placeId) || sameItemKey(walk.title, item.title)
    )?.image
    ?? walkStops.find((stop) =>
      sameItemKey(stop.id, item.placeId) || sameItemKey(stop.name, item.title)
    )?.image
    ?? item.image;
};

export const MyTripPage: React.FC<MyTripPageProps> = ({ onOpenBuildTrip }) => {
  const {
    savedIds,
    itinerary,
    removeFromItinerary,
    reorderItinerary,
    updateItineraryItem,
    addToItinerary
  } = useSaved();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'saved' | 'itinerary'>('itinerary');
  const [tripTitle, setTripTitle] = useState<string>('Pune Heritage Trail');
  const [tripDate] = useState<string>('12 Mar 2027 • 1 day');
  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<ItineraryItem | null>(null);

  // Edit time modal state
  const [newTime, setNewTime] = useState<string>('');
  const [newDuration, setNewDuration] = useState<string>('');

  // Collect saved monuments and experiences
  const savedMonuments = MONUMENTS.filter((m) => savedIds.includes(m.id));
  const savedExperiences = EXPERIENCES.filter((e) => savedIds.includes(e.id));
  const totalSaved = savedMonuments.length + savedExperiences.length;

  const handleEditClick = (item: ItineraryItem) => {
    setEditingItem(item);
    setNewTime(item.time);
    setNewDuration(item.duration);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      updateItineraryItem(editingItem.id, {
        time: newTime,
        duration: newDuration
      });
      setEditingItem(null);
    }
  };

  return (
    <div className="container my-trip-page" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      {/* Page Header (Screen 7 from Reference) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: '#f5eee6',
              marginBottom: '0.4rem'
            }}
          >
            My Trip
          </h1>
          <p style={{ color: '#c9bcaf', fontSize: '1.05rem' }}>
            Your saved places, walks and planned visits.
          </p>
        </div>

        {/* Build With Smart Planner Action */}
        <button
          onClick={onOpenBuildTrip}
          className="btn-primary"
          style={{ padding: '0.75rem 1.4rem' }}
        >
          <Sparkles size={16} />
          Build Your Trip with AI Planner
        </button>
      </div>

      {/* Tabs: Saved Places & Planned Itinerary (Screen 7 Reference) */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          borderBottom: '1px solid rgba(194, 139, 91, 0.2)',
          marginBottom: '2.5rem'
        }}
      >
        <button
          onClick={() => setActiveTab('itinerary')}
          style={{
            padding: '0.75rem 1.25rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            fontWeight: activeTab === 'itinerary' ? 700 : 500,
            color: activeTab === 'itinerary' ? '#f5eee6' : '#8e8073',
            borderBottom: activeTab === 'itinerary' ? '2px solid #c28b5b' : '2px solid transparent',
            marginBottom: '-1px',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span>Planned Itinerary</span>
          <span
            style={{
              fontSize: '0.75rem',
              padding: '0.15rem 0.5rem',
              borderRadius: '999px',
              backgroundColor: activeTab === 'itinerary' ? '#c28b5b' : 'rgba(39, 30, 26, 0.8)',
              color: activeTab === 'itinerary' ? '#15100d' : '#c9bcaf',
              fontWeight: 700
            }}
          >
            {itinerary.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('saved')}
          style={{
            padding: '0.75rem 1.25rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            fontWeight: activeTab === 'saved' ? 700 : 500,
            color: activeTab === 'saved' ? '#f5eee6' : '#8e8073',
            borderBottom: activeTab === 'saved' ? '2px solid #c28b5b' : '2px solid transparent',
            marginBottom: '-1px',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span>Saved Places</span>
          <span
            style={{
              fontSize: '0.75rem',
              padding: '0.15rem 0.5rem',
              borderRadius: '999px',
              backgroundColor: activeTab === 'saved' ? '#c28b5b' : 'rgba(39, 30, 26, 0.8)',
              color: activeTab === 'saved' ? '#15100d' : '#c9bcaf',
              fontWeight: 700
            }}
          >
            {totalSaved}
          </span>
        </button>
      </div>

      {/* =================================================================
          TAB 1: PLANNED ITINERARY (Screen 7 from Reference)
          ================================================================= */}
      {activeTab === 'itinerary' && (
        <div className="my-trip-itinerary-content">
          {/* Trip Header Box */}
          <div
            style={{
              backgroundColor: '#1f1714',
              borderRadius: '12px',
              border: '1px solid rgba(194, 139, 91, 0.25)',
              padding: '1.5rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              {isEditingTitle ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="text"
                    value={tripTitle}
                    onChange={(e) => setTripTitle(e.target.value)}
                    style={{ fontSize: '1.25rem', fontWeight: 700 }}
                  />
                  <button
                    onClick={() => setIsEditingTitle(false)}
                    className="btn-primary"
                    style={{ padding: '0.5rem 0.75rem' }}
                  >
                    <Check size={16} />
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: '#f5eee6'
                    }}
                  >
                    {tripTitle}
                  </h2>
                  <button
                    onClick={() => setIsEditingTitle(true)}
                    aria-label="Edit Trip Name"
                    style={{ color: '#8e8073', padding: '0.2rem' }}
                  >
                    <Edit2 size={15} />
                  </button>
                </div>
              )}

              <p style={{ color: '#c28b5b', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {tripDate} • {itinerary.length} scheduled visits
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => navigate('/map')}
                className="btn-primary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
              >
                <Map size={16} />
                View on Map →
              </button>
            </div>
          </div>

          {/* Timeline List of Itinerary Items */}
          {itinerary.length === 0 ? (
            <div
              style={{
                backgroundColor: '#1f1714',
                borderRadius: '12px',
                border: '1px solid rgba(194, 139, 91, 0.2)',
                padding: '4rem 2rem',
                textAlign: 'center'
              }}
            >
              <CalendarDays size={40} color="#8e8073" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#f5eee6', marginBottom: '0.5rem' }}>
                Your Itinerary is Currently Empty
              </h3>
              <p style={{ color: '#8e8073', marginBottom: '1.5rem', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                Build a tailored heritage route using our intelligent trip planner or add places from your Saved list.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button onClick={onOpenBuildTrip} className="btn-primary">
                  <Sparkles size={16} /> Build Your Trip
                </button>
                <button onClick={() => navigate('/explore')} className="btn-secondary">
                  Explore Places
                </button>
              </div>
            </div>
          ) : (
            <div className="my-trip-itinerary-grid">
              {itinerary.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: '#1f1714',
                    border: '1px solid rgba(194, 139, 91, 0.2)',
                    borderRadius: '10px',
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    transition: 'all 0.2s ease'
                  }}
                  className="heritage-card my-trip-itinerary-card"
                >
                  {/* Time Badge */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      minWidth: '75px',
                      textAlign: 'center'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: '#d89e68'
                      }}
                    >
                      {item.time}
                    </span>
                    <span style={{ fontSize: '0.725rem', color: '#8e8073' }}>
                      {item.duration}
                    </span>
                  </div>

                  {/* Thumbnail Image */}
                  <img
                    src={getItineraryImage(item)}
                    alt={item.title}
                    style={{
                      borderRadius: '6px',
                      objectFit: 'cover',
                      flexShrink: 0
                    }}
                  />

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.15rem',
                        color: '#f5eee6',
                        marginBottom: '0.2rem'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: '#8e8073', fontSize: '0.825rem' }}>
                      {item.category} • {item.location}
                    </p>
                  </div>

                  {/* Reorder and Action Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
                    {/* Reorder Up */}
                    <button
                      disabled={index === 0}
                      onClick={() => reorderItinerary(index, index - 1)}
                      aria-label="Move Up"
                      style={{
                        width: '1.85rem',
                        height: '1.85rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(39, 30, 26, 0.8)',
                        color: index === 0 ? '#4a3b34' : '#c9bcaf',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(194, 139, 91, 0.15)'
                      }}
                    >
                      <ChevronUp size={15} />
                    </button>

                    {/* Reorder Down */}
                    <button
                      disabled={index === itinerary.length - 1}
                      onClick={() => reorderItinerary(index, index + 1)}
                      aria-label="Move Down"
                      style={{
                        width: '1.85rem',
                        height: '1.85rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(39, 30, 26, 0.8)',
                        color: index === itinerary.length - 1 ? '#4a3b34' : '#c9bcaf',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(194, 139, 91, 0.15)'
                      }}
                    >
                      <ChevronDown size={15} />
                    </button>

                    {/* Edit Time */}
                    <button
                      onClick={() => handleEditClick(item)}
                      aria-label="Edit Timing"
                      style={{
                        width: '1.85rem',
                        height: '1.85rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(39, 30, 26, 0.8)',
                        color: '#c28b5b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(194, 139, 91, 0.15)'
                      }}
                    >
                      <Edit2 size={13} />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => removeFromItinerary(item.id)}
                      aria-label="Remove item"
                      style={{
                        width: '1.85rem',
                        height: '1.85rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(39, 30, 26, 0.8)',
                        color: '#a86242',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(168, 98, 66, 0.3)'
                      }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* =================================================================
          TAB 2: SAVED PLACES & EXPERIENCES
          ================================================================= */}
      {activeTab === 'saved' && (
        <div>
          {totalSaved === 0 ? (
            <div
              style={{
                backgroundColor: '#1f1714',
                borderRadius: '12px',
                border: '1px solid rgba(194, 139, 91, 0.2)',
                padding: '4rem 2rem',
                textAlign: 'center'
              }}
            >
              <Heart size={40} color="#8e8073" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#f5eee6', marginBottom: '0.5rem' }}>
                You Have Not Saved Any Places Yet
              </h3>
              <p style={{ color: '#8e8073', marginBottom: '1.5rem', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                Browse our monuments and local experiences, and click the heart icon to save them for your trip.
              </p>
              <button onClick={() => navigate('/explore')} className="btn-primary">
                Explore Pune Monuments
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {/* Saved Monuments */}
              {savedMonuments.length > 0 && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      color: '#f5eee6',
                      marginBottom: '1.25rem'
                    }}
                  >
                    Saved Heritage Places ({savedMonuments.length})
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                      gap: '1.75rem'
                    }}
                  >
                    {savedMonuments.map((m) => (
                      <div key={m.id} style={{ display: 'flex', flexDirection: 'column' }}>
                        <HeritageCard monument={m} />
                        <button
                          onClick={() => {
                            addToItinerary({
                              placeId: m.id,
                              type: 'monument',
                              title: m.name,
                              time: '01:00 PM',
                              duration: m.estimatedTime.split('–')[0].trim() || '1 hr',
                              category: `${m.category} • ${m.historicalPeriod}`,
                              location: m.area,
                              image: m.heroImage,
                              latitude: m.latitude,
                              longitude: m.longitude
                            });
                          }}
                          style={{
                            marginTop: '0.5rem',
                            padding: '0.5rem',
                            backgroundColor: 'rgba(39, 30, 26, 0.8)',
                            border: '1px solid rgba(194, 139, 91, 0.25)',
                            borderRadius: '6px',
                            color: '#c28b5b',
                            fontSize: '0.825rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.35rem'
                          }}
                        >
                          <Plus size={14} /> Add to Itinerary
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Saved Experiences */}
              {savedExperiences.length > 0 && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      color: '#f5eee6',
                      marginBottom: '1.25rem'
                    }}
                  >
                    Saved Cultural Experiences ({savedExperiences.length})
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                      gap: '1.75rem'
                    }}
                  >
                    {savedExperiences.map((e) => (
                      <div key={e.id} style={{ display: 'flex', flexDirection: 'column' }}>
                        <ExperienceCard experience={e} />
                        <button
                          onClick={() => {
                            addToItinerary({
                              placeId: e.id,
                              type: 'experience',
                              title: e.title,
                              time: '05:00 PM',
                              duration: e.duration,
                              category: `Experience • ${e.category}`,
                              location: e.location,
                              image: e.image,
                              latitude: e.latitude,
                              longitude: e.longitude
                            });
                          }}
                          style={{
                            marginTop: '0.5rem',
                            padding: '0.5rem',
                            backgroundColor: 'rgba(39, 30, 26, 0.8)',
                            border: '1px solid rgba(194, 139, 91, 0.25)',
                            borderRadius: '6px',
                            color: '#c28b5b',
                            fontSize: '0.825rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.35rem'
                          }}
                        >
                          <Plus size={14} /> Add to Itinerary
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Edit Timing Modal */}
      {editingItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(10, 7, 6, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setEditingItem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#1f1714',
              border: '1px solid rgba(194, 139, 91, 0.3)',
              borderRadius: '12px',
              padding: '1.5rem',
              width: '100%',
              maxWidth: '400px'
            }}
          >
            <h4 style={{ color: '#f5eee6', fontSize: '1.15rem', marginBottom: '1rem' }}>
              Edit Timing for {editingItem.title}
            </h4>
            <form onSubmit={handleSaveEdit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#c9bcaf', marginBottom: '0.3rem' }}>
                  Scheduled Time (e.g. 09:30 AM)
                </label>
                <input
                  type="text"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#c9bcaf', marginBottom: '0.3rem' }}>
                  Duration (e.g. 1.5 hrs)
                </label>
                <input
                  type="text"
                  value={newDuration}
                  onChange={(e) => setNewDuration(e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="btn-secondary"
                  style={{ flex: 1 }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
