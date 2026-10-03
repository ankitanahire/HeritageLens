import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Check,
  Navigation,
  Headphones,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  MapPin,
  Plus
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WALKS } from '../data/walks';
import { useSaved } from '../context/SavedContext';
import { useAudio } from '../context/AudioContext';
import { MapView } from '../components/MapView';

export const WalkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToItinerary, showToast } = useSaved();
  const { playMonument } = useAudio();

  const walk = WALKS.find((w) => w.id === id) || WALKS[0];

  // Interactive "Start Walk" Navigation Mode state
  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  const [currentStopIndex, setCurrentStopIndex] = useState<number>(0);
  const [completedStops, setCompletedStops] = useState<string[]>([]);

  const currentStop = walk.stops[currentStopIndex];
  const nextStop = walk.stops[currentStopIndex + 1];

  const handleStartWalk = () => {
    setIsNavigating(true);
    setCurrentStopIndex(0);
    window.scrollTo({ top: 300, behavior: 'smooth' });
    showToast(`Started ${walk.title}! Follow the interactive trail guide.`, 'success');
  };

  const handleMarkCompleted = () => {
    if (!completedStops.includes(currentStop.id)) {
      const updated = [...completedStops, currentStop.id];
      setCompletedStops(updated);

      if (updated.length === walk.stops.length) {
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.5 },
            colors: ['#5fa874', '#c28b5b', '#f5eee6']
          });
        } catch {}
        showToast(`Congratulations! You have completed the entire ${walk.title}!`, 'success');
      } else {
        showToast(`Completed stop: ${currentStop.name}`, 'info');
      }
    }

    if (currentStopIndex < walk.stops.length - 1) {
      setCurrentStopIndex((prev) => prev + 1);
    }
  };

  const handleListenStopStory = () => {
    if (currentStop.monumentId) {
      playMonument(currentStop.monumentId, 0);
    } else {
      // Speak the stop description using Web Speech
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const text = `You are at ${currentStop.name}. ${currentStop.description}`;
        const u = new SpeechSynthesisUtterance(text);
        u.rate = 1.0;
        window.speechSynthesis.speak(u);
        showToast(`Narrating story for ${currentStop.name}`, 'success');
      }
    }
  };

  const handleAddAllToItinerary = () => {
    walk.stops.forEach((stop, idx) => {
      const hours = 9 + Math.floor(idx * 0.75);
      const minutes = (idx * 45) % 60;
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;

      addToItinerary({
        placeId: stop.id,
        type: 'monument',
        title: stop.name,
        time: formattedTime,
        duration: stop.estimatedTime,
        category: `Trail Stop • ${walk.title}`,
        location: 'Pune',
        image: stop.image,
        latitude: stop.latitude,
        longitude: stop.longitude
      });
    });
    showToast(`Added all ${walk.stops.length} stops from ${walk.title} to your planned itinerary!`, 'success');
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      {/* Back Button */}
      <Link
        to="/walks"
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
        <span>Back to Curated Walks</span>
      </Link>

      {/* Hero Overview Card */}
      <div
        style={{
          position: 'relative',
          borderRadius: '14px',
          overflow: 'hidden',
          backgroundColor: '#1f1714',
          border: '1px solid rgba(194, 139, 91, 0.25)',
          marginBottom: '3rem',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div style={{ height: '320px', position: 'relative' }}>
          <img
            src={walk.image}
            alt={walk.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #1f1714 0%, rgba(21, 16, 13, 0.5) 60%, rgba(21, 16, 13, 0.8) 100%)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem'
            }}
          >
            <span className="badge badge-walk" style={{ marginBottom: '0.5rem' }}>
              {walk.category} Trail • {walk.difficulty}
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#f5eee6',
                marginBottom: '0.5rem'
              }}
            >
              {walk.title}
            </h1>
            <p style={{ color: '#c9bcaf', maxWidth: '720px', fontSize: '1rem', lineHeight: 1.5 }}>
              {walk.description}
            </p>
          </div>
        </div>

        {/* Trail Metrics Bar & Action Buttons */}
        <div
          style={{
            padding: '1.5rem 2rem',
            backgroundColor: '#18120f',
            borderTop: '1px solid rgba(194, 139, 91, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <div>
              <span style={{ color: '#8e8073', fontSize: '0.75rem', textTransform: 'uppercase', display: 'block' }}>
                Distance
              </span>
              <strong style={{ color: '#f5eee6', fontSize: '1.1rem' }}>{walk.distance}</strong>
            </div>

            <div>
              <span style={{ color: '#8e8073', fontSize: '0.75rem', textTransform: 'uppercase', display: 'block' }}>
                Estimated Duration
              </span>
              <strong style={{ color: '#f5eee6', fontSize: '1.1rem' }}>{walk.duration}</strong>
            </div>

            <div>
              <span style={{ color: '#8e8073', fontSize: '0.75rem', textTransform: 'uppercase', display: 'block' }}>
                Start / End Points
              </span>
              <span style={{ color: '#c9bcaf' }}>
                {walk.startPoint.split('(')[0]} → {walk.endPoint.split('(')[0]}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={handleAddAllToItinerary}
              className="btn-secondary"
              style={{ padding: '0.75rem 1.25rem' }}
            >
              <Plus size={16} color="#c28b5b" />
              Add Trail to My Trip
            </button>

            {!isNavigating ? (
              <button
                onClick={handleStartWalk}
                className="btn-primary"
                style={{ padding: '0.75rem 1.5rem', backgroundColor: '#5fa874' }}
              >
                <Navigation size={18} />
                Start Walk Navigation
              </button>
            ) : (
              <button
                onClick={() => setIsNavigating(false)}
                className="btn-secondary"
                style={{ padding: '0.75rem 1.25rem' }}
              >
                Exit Active Navigation
              </button>
            )}
          </div>
        </div>
      </div>

      {/* =================================================================
          ACTIVE "START WALK" NAVIGATION HUD (Section 12 of Requirements)
          ================================================================= */}
      {isNavigating && (
        <div
          style={{
            backgroundColor: '#1f1714',
            border: '2px solid #5fa874',
            borderRadius: '14px',
            padding: '2rem',
            marginBottom: '3rem',
            boxShadow: 'var(--shadow-lg), 0 0 24px rgba(95, 168, 116, 0.25)'
          }}
          className="animate-fade-in"
        >
          {/* Progress Bar */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#c9bcaf', marginBottom: '0.4rem' }}>
              <span style={{ color: '#7ece94', fontWeight: 700, textTransform: 'uppercase' }}>
                Active Navigation • Stop {currentStopIndex + 1} of {walk.stops.length}
              </span>
              <span>
                {completedStops.length} of {walk.stops.length} Completed (
                {Math.round((completedStops.length / walk.stops.length) * 100)}%)
              </span>
            </div>

            <div style={{ height: '8px', backgroundColor: '#15100d', borderRadius: '4px', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${((currentStopIndex + 1) / walk.stops.length) * 100}%`,
                  backgroundColor: '#5fa874',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
          </div>

          {/* Navigation HUD Box matching prompt instructions */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
              backgroundColor: '#15100d',
              padding: '1.5rem',
              borderRadius: '10px',
              border: '1px solid rgba(95, 168, 116, 0.3)',
              marginBottom: '1.5rem'
            }}
          >
            {/* Current Stop */}
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#7ece94',
                  fontWeight: 800,
                  marginBottom: '0.35rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <MapPin size={15} /> YOU ARE HERE (STOP {currentStopIndex + 1})
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#f5eee6', marginBottom: '0.5rem' }}>
                {currentStop.name}
              </h3>
              <p style={{ color: '#c9bcaf', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                {currentStop.description}
              </p>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={handleListenStopStory}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.6rem 1rem',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(194, 139, 91, 0.2)',
                    border: '1px solid #c28b5b',
                    color: '#d89e68',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  <Headphones size={15} />
                  Listen to this location's story
                </button>

                <button
                  onClick={handleMarkCompleted}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.6rem 1rem',
                    borderRadius: '6px',
                    backgroundColor: completedStops.includes(currentStop.id) ? '#5fa874' : 'rgba(95, 168, 116, 0.2)',
                    border: '1px solid #5fa874',
                    color: completedStops.includes(currentStop.id) ? '#15100d' : '#7ece94',
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}
                >
                  <CheckCircle2 size={16} />
                  {completedStops.includes(currentStop.id) ? 'Completed' : 'Mark Stop Completed'}
                </button>
              </div>
            </div>

            {/* Next Stop Indicator */}
            {nextStop ? (
              <div
                style={{
                  padding: '1.25rem',
                  backgroundColor: '#1f1714',
                  borderRadius: '8px',
                  border: '1px solid rgba(194, 139, 91, 0.2)'
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#c28b5b', fontWeight: 700, marginBottom: '0.25rem' }}>
                  Next Stop
                </div>
                <h4 style={{ color: '#f5eee6', fontSize: '1.15rem', marginBottom: '0.35rem' }}>
                  {nextStop.name}
                </h4>
                <div style={{ color: '#8e8073', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  Distance: <strong style={{ color: '#c28b5b' }}>{nextStop.distanceFromPrev} away</strong>
                </div>
                <p style={{ color: '#c9bcaf', fontSize: '0.8rem', lineHeight: 1.4 }}>
                  {nextStop.description}
                </p>
              </div>
            ) : (
              <div
                style={{
                  padding: '1.25rem',
                  backgroundColor: '#1f1714',
                  borderRadius: '8px',
                  border: '1px solid #5fa874',
                  textAlign: 'center'
                }}
              >
                <Sparkles size={28} color="#7ece94" style={{ margin: '0 auto 0.5rem auto' }} />
                <h4 style={{ color: '#f5eee6', fontSize: '1.1rem' }}>Final Stop on this Trail!</h4>
                <p style={{ color: '#c9bcaf', fontSize: '0.85rem' }}>
                  You have completed the full walking route.
                </p>
              </div>
            )}
          </div>

          {/* Stepper Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              disabled={currentStopIndex === 0}
              onClick={() => setCurrentStopIndex((prev) => Math.max(0, prev - 1))}
              className="btn-secondary"
              style={{ opacity: currentStopIndex === 0 ? 0.5 : 1 }}
            >
              <ChevronLeft size={16} /> Previous Stop
            </button>

            <span style={{ color: '#c9bcaf', fontSize: '0.9rem' }}>
              Stop {currentStopIndex + 1} of {walk.stops.length}
            </span>

            <button
              disabled={currentStopIndex === walk.stops.length - 1}
              onClick={() => setCurrentStopIndex((prev) => Math.min(walk.stops.length - 1, prev + 1))}
              className="btn-secondary"
              style={{ opacity: currentStopIndex === walk.stops.length - 1 ? 0.5 : 1 }}
            >
              Next Stop <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* =================================================================
          STOPS CHECKLIST & ROUTE PREVIEW
          ================================================================= */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {/* Stops List */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.65rem',
              color: '#f5eee6',
              marginBottom: '1.25rem'
            }}
          >
            Trail Itinerary ({walk.stops.length} Stops)
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {walk.stops.map((stop, index) => {
              const isDone = completedStops.includes(stop.id);
              const isCurrent = isNavigating && currentStopIndex === index;

              return (
                <div
                  key={stop.id}
                  onClick={() => {
                    if (isNavigating) setCurrentStopIndex(index);
                  }}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: isCurrent ? 'rgba(95, 168, 116, 0.15)' : '#1f1714',
                    border: isCurrent
                      ? '1.5px solid #5fa874'
                      : '1px solid rgba(194, 139, 91, 0.2)',
                    borderRadius: '10px',
                    transition: 'all 0.2s ease',
                    cursor: isNavigating ? 'pointer' : 'default'
                  }}
                >
                  {/* Step Number Circle */}
                  <div
                    style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '50%',
                      backgroundColor: isDone ? '#5fa874' : isCurrent ? '#c28b5b' : 'rgba(39, 30, 26, 0.8)',
                      border: '1px solid rgba(194, 139, 91, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isDone || isCurrent ? '#ffffff' : '#c9bcaf',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      flexShrink: 0
                    }}
                  >
                    {isDone ? <Check size={16} /> : index + 1}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <h4 style={{ color: '#f5eee6', fontSize: '1.05rem', fontWeight: 600 }}>
                        {stop.name}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: '#8e8073' }}>
                        {stop.estimatedTime}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.8rem', color: '#c28b5b', marginBottom: '0.4rem' }}>
                      {stop.category} • {stop.distanceFromPrev}
                    </div>

                    <p style={{ color: '#c9bcaf', fontSize: '0.875rem', lineHeight: 1.5 }}>
                      {stop.description}
                    </p>

                    {stop.monumentId && (
                      <Link
                        to={`/monument/${stop.monumentId}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          color: '#d89e68',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          marginTop: '0.5rem'
                        }}
                      >
                        <span>View monument guide</span>
                        <ChevronRight size={13} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trail Route Map */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.65rem',
              color: '#f5eee6',
              marginBottom: '1.25rem'
            }}
          >
            Route Geography
          </h2>

          <div style={{ height: '440px', borderRadius: '12px', overflow: 'hidden' }}>
            <MapView
              monuments={[]}
              walks={[walk]}
              experiences={[]}
              selectedPlace={walk}
              onSelectPlace={() => {}}
              showMonuments={false}
              showWalks={true}
              showExperiences={false}
            />
          </div>

          <div
            style={{
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#1f1714',
              borderRadius: '8px',
              border: '1px solid rgba(194, 139, 91, 0.2)',
              fontSize: '0.85rem',
              color: '#c9bcaf'
            }}
          >
            Green line indicates walking path. Numbers indicate walking stops along the trail.
          </div>
        </div>
      </div>
    </div>
  );
};
