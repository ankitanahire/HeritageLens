import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Landmark, Footprints, Sparkles, MapPin, Compass } from 'lucide-react';
import { MONUMENTS } from '../data/monuments';
import { WALKS } from '../data/walks';
import { EXPERIENCES } from '../data/experiences';
import { HeritageCard } from '../components/HeritageCard';
import { WalkCard } from '../components/WalkCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { ThenNowSlider } from '../components/ThenNowSlider';

interface HomePageProps {
  onOpenBuildTrip: () => void;
  onOpenSearchWithQuery: (q: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBuildTrip, onOpenSearchWithQuery }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  // Featured Hero Monuments to cycle through with < 1/4 > arrows
  const heroMonuments = [
    MONUMENTS[0], // Shaniwar Wada
    MONUMENTS[1], // Vishrambaug Wada
    MONUMENTS[3], // Aga Khan Palace
    MONUMENTS[6]  // Sinhagad Fort
  ];

  const currentHero = heroMonuments[activeHeroIndex];

  const handlePrevHero = () => {
    setActiveHeroIndex((prev) => (prev === 0 ? heroMonuments.length - 1 : prev - 1));
  };

  const handleNextHero = () => {
    setActiveHeroIndex((prev) => (prev === heroMonuments.length - 1 ? 0 : prev + 1));
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onOpenSearchWithQuery(searchInput.trim());
    } else {
      navigate('/explore');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      {/* =================================================================
          HERO SECTION (Screen 1 from Reference)
          ================================================================= */}
      <section
        style={{
          position: 'relative',
          minHeight: '84vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          backgroundColor: '#15100d'
        }}
      >
        {/* Hero Background Image with Smooth Fade */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1
          }}
        >
          <img
            key={currentHero.id}
            src={currentHero.heroImage}
            alt={currentHero.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.72) contrast(1.05)',
              transition: 'opacity 0.6s ease'
            }}
          />

          {/* Deep Dark Brown Vignette & Gradients matching design reference */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(ellipse 90% 70% at 30% 40%, rgba(21, 16, 13, 0.4), rgba(21, 16, 13, 0.95) 90%),
                linear-gradient(to bottom, rgba(21, 16, 13, 0.6) 0%, transparent 40%, rgba(21, 16, 13, 0.95) 95%)
              `
            }}
          />
        </div>

        {/* Hero Main Content */}
        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 10,
            paddingTop: '6rem',
            paddingBottom: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem'
            }}
          >
            {/* Left Column: Headlines & Search */}
            <div style={{ maxWidth: '640px' }}>
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)',
                  fontWeight: 600,
                  color: '#f5eee6',
                  lineHeight: 1.15,
                  letterSpacing: '0.01em',
                  marginBottom: '1.25rem'
                }}
              >
                Discover Pune's <br />
                living heritage
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  color: '#d6c9bc',
                  lineHeight: 1.6,
                  marginBottom: '2.5rem',
                  maxWidth: '520px'
                }}
              >
                From majestic forts to wadas, from historic streets to vibrant culture — explore the stories that shaped Pune.
              </p>

              {/* Working Search Bar matching reference image */}
              <form
                onSubmit={handleSearchSubmit}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(237, 226, 213, 0.95)',
                  borderRadius: '8px',
                  padding: '0.4rem 0.5rem 0.4rem 1.25rem',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5)',
                  maxWidth: '520px'
                }}
              >
                <input
                  type="text"
                  placeholder="Search places, walks, experiences..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#15100d',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    outline: 'none',
                    padding: '0.5rem 0'
                  }}
                />
                <button
                  type="submit"
                  aria-label="Search"
                  style={{
                    backgroundColor: '#a86242',
                    color: '#ffffff',
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    transition: 'all 0.2s ease',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#be7350')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#a86242')}
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>

            {/* Right Column: Monument Indicator & Slider Controls */}
            <div
              style={{
                alignSelf: 'flex-end',
                backgroundColor: 'rgba(21, 16, 13, 0.75)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(194, 139, 91, 0.25)',
                borderRadius: '10px',
                padding: '1.25rem 1.75rem',
                minWidth: '240px'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#f5eee6',
                  marginBottom: '0.2rem'
                }}
              >
                {currentHero.name}
              </div>
              <div
                style={{
                  fontSize: '0.8125rem',
                  color: '#c28b5b',
                  marginBottom: '0.85rem'
                }}
              >
                {currentHero.area} • {currentHero.historicalPeriod}
              </div>

              {/* Slider Arrows & Counter */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <button
                  onClick={handlePrevHero}
                  aria-label="Previous Monument"
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(39, 30, 26, 0.8)',
                    border: '1px solid rgba(194, 139, 91, 0.3)',
                    color: '#f5eee6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ChevronLeft size={16} />
                </button>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: '#c9bcaf',
                    fontFamily: 'monospace',
                    fontWeight: 600
                  }}
                >
                  {activeHeroIndex + 1} / {heroMonuments.length}
                </span>
                <button
                  onClick={handleNextHero}
                  aria-label="Next Monument"
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(39, 30, 26, 0.8)',
                    border: '1px solid rgba(194, 139, 91, 0.3)',
                    color: '#f5eee6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 Quick-Access Cards matching reference image */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            borderTop: '1px solid rgba(194, 139, 91, 0.18)',
            backgroundColor: 'rgba(21, 16, 13, 0.92)',
            backdropFilter: 'blur(16px)'
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.5rem'
              }}
            >
              {/* Card 1: Heritage Places */}
              <div
                onClick={() => navigate('/explore')}
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(194, 139, 91, 0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <div
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(217, 136, 78, 0.15)',
                    border: '1px solid rgba(217, 136, 78, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f0a36e',
                    flexShrink: 0
                  }}
                >
                  <Landmark size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#f5eee6', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Heritage Places
                  </h4>
                  <p style={{ color: '#8e8073', fontSize: '0.8rem' }}>
                    Monuments, wadas, forts and more
                  </p>
                </div>
              </div>

              {/* Card 2: Walking Routes */}
              <div
                onClick={() => navigate('/walks')}
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(95, 168, 116, 0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <div
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(95, 168, 116, 0.15)',
                    border: '1px solid rgba(95, 168, 116, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7ece94',
                    flexShrink: 0
                  }}
                >
                  <Footprints size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#f5eee6', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Walking Routes
                  </h4>
                  <p style={{ color: '#8e8073', fontSize: '0.8rem' }}>
                    Curated trails and themed walks
                  </p>
                </div>
              </div>

              {/* Card 3: Local Experiences */}
              <div
                onClick={() => navigate('/experiences')}
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(86, 148, 201, 0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <div
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(86, 148, 201, 0.15)',
                    border: '1px solid rgba(86, 148, 201, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#83bded',
                    flexShrink: 0
                  }}
                >
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#f5eee6', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Local Experiences
                  </h4>
                  <p style={{ color: '#8e8073', fontSize: '0.8rem' }}>
                    Food, art, culture, workshops
                  </p>
                </div>
              </div>

              {/* Card 4: Build Your Trip */}
              <div
                onClick={onOpenBuildTrip}
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(194, 139, 91, 0.15)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <div
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(194, 139, 91, 0.2)',
                    border: '1px solid #c28b5b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d89e68',
                    flexShrink: 0
                  }}
                >
                  <Compass size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#f5eee6', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Build Your Trip
                  </h4>
                  <p style={{ color: '#8e8073', fontSize: '0.8rem' }}>
                    Save places and plan your visit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          FEATURED MONUMENTS SECTION
          ================================================================= */}
      <section className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '2rem'
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#c28b5b',
                fontWeight: 700
              }}
            >
              Centuries of Maratha Grandeur
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.25rem',
                color: '#f5eee6',
                marginTop: '0.25rem'
              }}
            >
              Heritage Places in Pune
            </h2>
          </div>

          <Link
            to="/explore"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#c28b5b',
              fontWeight: 600,
              fontSize: '0.925rem'
            }}
          >
            <span>View All ({MONUMENTS.length})</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Monument Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {MONUMENTS.slice(0, 6).map((monument) => (
            <HeritageCard key={monument.id} monument={monument} />
          ))}
        </div>
      </section>

      {/* =================================================================
          THEN & NOW INTERACTIVE SPOTLIGHT
          ================================================================= */}
      <section className="container">
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span
              style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#c28b5b',
                fontWeight: 700
              }}
            >
              Interactive Historical Comparison
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.25rem',
                color: '#f5eee6',
                marginTop: '0.25rem'
              }}
            >
              Time Travel: Then & Now
            </h2>
            <p style={{ color: '#c9bcaf', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
              Drag the interactive slider to see how historic Pune landmarks looked in 19th-century archives compared to today.
            </p>
          </div>

          <ThenNowSlider
            title="Shaniwar Wada (Delhi Darwaza)"
            description="Compare how the seat of the Peshwas appeared in an 1820 historical rendering before the 1828 fire, contrasted with its conserved stone fortifications today."
            thenImage="/images/monuments/shaniwar-wada-then.png"
            nowImage="/images/monuments/shaniwar-wada-hero.jpg"
            thenLabel="1820 Archive Painting"
            nowLabel="Present Day Delhi Gate"
          />
        </div>
      </section>

      {/* =================================================================
          CURATED WALKS HIGHLIGHT
          ================================================================= */}
      <section className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '2rem'
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#5fa874',
                fontWeight: 700
              }}
            >
              Step by Step
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.25rem',
                color: '#f5eee6',
                marginTop: '0.25rem'
              }}
            >
              Curated Walking Trails
            </h2>
          </div>

          <Link
            to="/walks"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#c28b5b',
              fontWeight: 600,
              fontSize: '0.925rem'
            }}
          >
            <span>View All Walks</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {WALKS.slice(0, 3).map((walk) => (
            <WalkCard key={walk.id} walk={walk} />
          ))}
        </div>
      </section>

      {/* =================================================================
          LOCAL EXPERIENCES HIGHLIGHT
          ================================================================= */}
      <section className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '2rem'
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#5694c9',
                fontWeight: 700
              }}
            >
              Living Culture & Traditions
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.25rem',
                color: '#f5eee6',
                marginTop: '0.25rem'
              }}
            >
              Local Experiences
            </h2>
          </div>

          <Link
            to="/experiences"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#c28b5b',
              fontWeight: 600,
              fontSize: '0.925rem'
            }}
          >
            <span>All Experiences</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {EXPERIENCES.slice(0, 3).map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </section>

      {/* =================================================================
          INTERACTIVE MAP BANNER CALLOUT
          ================================================================= */}
      <section className="container">
        <div
          style={{
            backgroundColor: '#1f1714',
            borderRadius: '14px',
            border: '1px solid rgba(194, 139, 91, 0.25)',
            padding: '3rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            backgroundImage: 'radial-gradient(ellipse 60% 50% at 85% 50%, rgba(194, 139, 91, 0.1), transparent)',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ maxWidth: '580px' }}>
            <span className="badge badge-heritage" style={{ marginBottom: '0.75rem' }}>
              Geographic Exploration
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: '#f5eee6',
                marginBottom: '0.75rem'
              }}
            >
              Explore Pune on the Interactive Heritage Map
            </h3>
            <p style={{ color: '#c9bcaf', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Locate every monument, walking trail, and experience across historic Peth wards, Shivajinagar, and Yerwada with real-time route visualization.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/map')}
              className="btn-primary"
              style={{ padding: '0.9rem 1.75rem' }}
            >
              <MapPin size={18} />
              Open Interactive Map
            </button>
            <button
              onClick={onOpenBuildTrip}
              className="btn-secondary"
              style={{ padding: '0.9rem 1.5rem' }}
            >
              Build Custom Trip
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
