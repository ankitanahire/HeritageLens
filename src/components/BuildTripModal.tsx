import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Sparkles, ArrowRight, Check } from 'lucide-react';
import { useSaved } from '../context/SavedContext';
import type { ItineraryItem } from '../types';

interface BuildTripModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BuildTripModal: React.FC<BuildTripModalProps> = ({ isOpen, onClose }) => {
  const { setFullItinerary } = useSaved();
  const navigate = useNavigate();

  const [duration, setDuration] = useState<'2hours' | 'halfday' | 'fullday' | 'multiday'>('fullday');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['History', 'Architecture', 'Food']);
  const [travelStyle, setTravelStyle] = useState<'Relaxed' | 'Fast-paced' | 'Family' | 'Solo' | 'Couple'>('Relaxed');
  const [budget, setBudget] = useState<'Budget' | 'Moderate' | 'Premium'>('Moderate');
  const [generatedItinerary, setGeneratedItinerary] = useState<ItineraryItem[] | null>(null);

  if (!isOpen) return null;

  const durationOptions = [
    { id: '2hours', label: '2 Hours', desc: 'Quick signature landmark & tea' },
    { id: 'halfday', label: 'Half Day (4 hrs)', desc: 'Morning or afternoon heritage trail' },
    { id: 'fullday', label: 'Full Day (8 hrs)', desc: 'Complete history, food & evening culture' },
    { id: 'multiday', label: 'Multiple Days', desc: 'Deep dive into forts, wadas & workshops' }
  ];

  const interestOptions = [
    'History',
    'Architecture',
    'Food',
    'Culture',
    'Photography',
    'Nature'
  ];

  const styleOptions: ('Relaxed' | 'Fast-paced' | 'Family' | 'Solo' | 'Couple')[] = [
    'Relaxed',
    'Fast-paced',
    'Family',
    'Solo',
    'Couple'
  ];

  const budgetOptions: ('Budget' | 'Moderate' | 'Premium')[] = [
    'Budget',
    'Moderate',
    'Premium'
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleGenerate = () => {
    const items: ItineraryItem[] = [];

    if (duration === '2hours') {
      items.push({
        id: `gen-${Date.now()}-1`,
        placeId: 'shaniwar-wada',
        type: 'monument',
        title: 'Shaniwar Wada',
        time: '10:00 AM',
        duration: '1 hr 15 min',
        category: 'Fort • 18th century',
        location: 'Shaniwar Peth',
        image: '/images/monuments/shaniwar-wada-hero.jpg',
        latitude: 18.5191,
        longitude: 73.8555
      });
      items.push({
        id: `gen-${Date.now()}-2`,
        placeId: 'traditional-maharashtrian-feast',
        type: 'experience',
        title: 'Iconic Tea & Bakarwadi Break',
        time: '11:30 AM',
        duration: '45 mins',
        category: 'Food • Cultural Snack',
        location: 'Appa Balwant Chowk',
        image: '/images/experiences/maharashtrian-food.jpg',
        latitude: 18.5170,
        longitude: 73.8535
      });
    } else if (duration === 'halfday') {
      items.push({
        id: `gen-${Date.now()}-1`,
        placeId: 'shaniwar-wada',
        type: 'monument',
        title: 'Shaniwar Wada',
        time: '09:00 AM',
        duration: '1 hr 30 min',
        category: 'Fort • 18th century',
        location: 'Shaniwar Peth',
        image: '/images/monuments/shaniwar-wada-hero.jpg',
        latitude: 18.5191,
        longitude: 73.8555
      });
      items.push({
        id: `gen-${Date.now()}-2`,
        placeId: 'lal-mahal',
        type: 'monument',
        title: 'Lal Mahal',
        time: '11:00 AM',
        duration: '45 mins',
        category: 'Palace • 17th century',
        location: 'Kasba Peth',
        image: '/images/monuments/lal-mahal.jpg',
        latitude: 18.5197,
        longitude: 73.8569
      });
      items.push({
        id: `gen-${Date.now()}-3`,
        placeId: 'vishrambaug-wada',
        type: 'monument',
        title: 'Vishrambaug Wada',
        time: '12:00 PM',
        duration: '1 hr',
        category: 'Wada • 19th century',
        location: 'Sadashiv Peth',
        image: '/images/monuments/vishrambaug-wada.jpg',
        latitude: 18.5135,
        longitude: 73.8530
      });
      items.push({
        id: `gen-${Date.now()}-4`,
        placeId: 'traditional-maharashtrian-feast',
        type: 'experience',
        title: 'Authentic Maharashtrian Lunch',
        time: '01:15 PM',
        duration: '1 hr 15 min',
        category: 'Food • Thali Feast',
        location: 'Sadashiv Peth',
        image: '/images/experiences/maharashtrian-food.jpg',
        latitude: 18.5190,
        longitude: 73.8548
      });
    } else {
      // Full day / Multiple days
      items.push({
        id: `gen-${Date.now()}-1`,
        placeId: 'shaniwar-wada',
        type: 'monument',
        title: 'Shaniwar Wada',
        time: '09:00 AM',
        duration: '1 hr 30 min',
        category: 'Fort • 18th century',
        location: 'Shaniwar Peth',
        image: '/images/monuments/shaniwar-wada-hero.jpg',
        latitude: 18.5191,
        longitude: 73.8555
      });
      items.push({
        id: `gen-${Date.now()}-2`,
        placeId: 'lal-mahal',
        type: 'monument',
        title: 'Lal Mahal & Kasba Ganapati',
        time: '11:00 AM',
        duration: '1 hr',
        category: 'Palace & Temple',
        location: 'Kasba Peth',
        image: '/images/monuments/lal-mahal.jpg',
        latitude: 18.5197,
        longitude: 73.8569
      });
      items.push({
        id: `gen-${Date.now()}-3`,
        placeId: 'traditional-maharashtrian-feast',
        type: 'experience',
        title: 'Royal Thali Lunch',
        time: '12:30 PM',
        duration: '1 hr 30 min',
        category: 'Food • Traditional Thali',
        location: 'Shaniwar Peth',
        image: '/images/experiences/maharashtrian-food.jpg',
        latitude: 18.5190,
        longitude: 73.8548
      });
      items.push({
        id: `gen-${Date.now()}-4`,
        placeId: 'aga-khan-palace',
        type: 'monument',
        title: 'Aga Khan Palace',
        time: '02:30 PM',
        duration: '1 hr 45 min',
        category: 'Palace • 19th century',
        location: 'Yerwada',
        image: '/images/monuments/aga-khan-palace.jpg',
        latitude: 18.5524,
        longitude: 73.9015
      });
      items.push({
        id: `gen-${Date.now()}-5`,
        placeId: 'classical-music-evening',
        type: 'experience',
        title: 'Classical Music Baithak',
        time: '06:00 PM',
        duration: '2 hrs',
        category: 'Music • Heritage Baithak',
        location: 'Sadashiv Peth',
        image: '/images/experiences/classical-music.jpg',
        latitude: 18.5135,
        longitude: 73.8530
      });
    }

    setGeneratedItinerary(items);
  };

  const handleApplyToTrip = () => {
    if (!generatedItinerary) return;
    setFullItinerary(generatedItinerary);
    onClose();
    navigate('/saved');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9990,
        backgroundColor: 'rgba(10, 7, 6, 0.85)',
        backdropFilter: 'blur(8px)',
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
          maxWidth: '680px',
          backgroundColor: '#1f1714',
          border: '1px solid rgba(194, 139, 91, 0.3)',
          borderRadius: '14px',
          boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh'
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Sparkles size={20} color="#c28b5b" />
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#f5eee6' }}>
                Build Your Personalized Heritage Trip
              </h3>
              <p style={{ color: '#c9bcaf', fontSize: '0.8rem' }}>
                Tailored Pune itinerary curated for your time, preferences, and style.
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
          {!generatedItinerary ? (
            <>
              {/* Duration Options */}
              <div>
                <label style={{ display: 'block', color: '#f5eee6', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.65rem' }}>
                  1. How much time do you have in Pune?
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.65rem' }}>
                  {durationOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setDuration(opt.id as any)}
                      style={{
                        padding: '0.85rem 0.65rem',
                        borderRadius: '8px',
                        backgroundColor: duration === opt.id ? 'rgba(194, 139, 91, 0.2)' : '#18120f',
                        border: duration === opt.id ? '1.5px solid #c28b5b' : '1px solid rgba(194, 139, 91, 0.15)',
                        textAlign: 'left',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ color: duration === opt.id ? '#ffffff' : '#f5eee6', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                        {opt.label}
                      </div>
                      <div style={{ color: '#8e8073', fontSize: '0.725rem', lineHeight: 1.3 }}>
                        {opt.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interests Multi-Select */}
              <div>
                <label style={{ display: 'block', color: '#f5eee6', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.65rem' }}>
                  2. What are your key interests? (Choose any)
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {interestOptions.map((interest) => {
                    const isSelected = selectedInterests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        style={{
                          padding: '0.45rem 0.9rem',
                          borderRadius: '999px',
                          backgroundColor: isSelected ? '#c28b5b' : 'rgba(39, 30, 26, 0.7)',
                          color: isSelected ? '#15100d' : '#e2d7c9',
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: '0.85rem',
                          border: isSelected ? '1px solid #c28b5b' : '1px solid rgba(194, 139, 91, 0.25)',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        {isSelected && <Check size={14} aria-hidden="true" />}
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Travel Style & Budget Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#f5eee6', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    3. Travel Style
                  </label>
                  <select
                    value={travelStyle}
                    onChange={(e) => setTravelStyle(e.target.value as any)}
                    style={{ width: '100%' }}
                  >
                    {styleOptions.map((style) => (
                      <option key={style} value={style}>
                        {style}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: '#f5eee6', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    4. Budget Preference
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value as any)}
                    style={{ width: '100%' }}
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                className="btn-primary"
                style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem' }}
              >
                <Sparkles size={18} />
                Generate Suggested Itinerary
              </button>
            </>
          ) : (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h4 style={{ color: '#f5eee6', fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>
                  Your Custom Suggested Itinerary
                </h4>
                <button
                  onClick={() => setGeneratedItinerary(null)}
                  style={{ color: '#c28b5b', fontSize: '0.8rem', textDecoration: 'underline' }}
                >
                  Change Preferences
                </button>
              </div>

              {/* Timeline Preview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {generatedItinerary.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#15100d',
                      borderRadius: '8px',
                      border: '1px solid rgba(194, 139, 91, 0.18)'
                    }}
                  >
                    <div
                      style={{
                        padding: '0.35rem 0.6rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(194, 139, 91, 0.15)',
                        color: '#d89e68',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {item.time}
                    </div>

                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '48px', height: '48px', borderRadius: '4px', objectFit: 'cover' }}
                    />

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: '#f5eee6', fontWeight: 600, fontSize: '0.95rem' }}>
                        {item.title}
                      </div>
                      <div style={{ color: '#8e8073', fontSize: '0.8rem' }}>
                        {item.category} • {item.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => setGeneratedItinerary(null)}
                  className="btn-secondary"
                  style={{ flex: 1 }}
                >
                  Adjust Options
                </button>
                <button
                  onClick={handleApplyToTrip}
                  className="btn-primary"
                  style={{ flex: 2 }}
                >
                  Save to My Trip & View Itinerary <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
