import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#110d0a',
        borderTop: '1px solid rgba(194, 139, 91, 0.18)',
        padding: '4rem 0 2rem 0',
        marginTop: '5rem',
        color: '#c9bcaf'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Brand Info */}
          <div>
            <Link
              to="/"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#f5eee6',
                display: 'inline-block',
                marginBottom: '0.85rem'
              }}
            >
              Heritage<span style={{ color: '#c28b5b' }}>Lens</span>
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#c9bcaf', marginBottom: '1.25rem' }}>
              Discover the stories behind the places you visit. An interactive heritage-travel platform exploring Pune’s living history, architecture, and living culture.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#c28b5b' }}>
              <Shield size={14} />
              <span>Authentic photographs & historical archives</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                color: '#f5eee6',
                marginBottom: '1rem'
              }}
            >
              Explore Pune
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li>
                <Link to="/explore" style={{ color: '#c9bcaf', transition: 'color 0.2s' }}>
                  Heritage Places & Forts
                </Link>
              </li>
              <li>
                <Link to="/map" style={{ color: '#c9bcaf', transition: 'color 0.2s' }}>
                  Interactive Heritage Map
                </Link>
              </li>
              <li>
                <Link to="/walks" style={{ color: '#c9bcaf', transition: 'color 0.2s' }}>
                  Curated Walking Trails
                </Link>
              </li>
              <li>
                <Link to="/experiences" style={{ color: '#c9bcaf', transition: 'color 0.2s' }}>
                  Local Cultural Experiences
                </Link>
              </li>
              <li>
                <Link to="/saved" style={{ color: '#c9bcaf', transition: 'color 0.2s' }}>
                  My Trip & Saved Places
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Pune Monuments */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                color: '#f5eee6',
                marginBottom: '1rem'
              }}
            >
              Featured Monuments
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li>
                <Link to="/monument/shaniwar-wada" style={{ color: '#c9bcaf' }}>
                  Shaniwar Wada (1732 CE)
                </Link>
              </li>
              <li>
                <Link to="/monument/lal-mahal" style={{ color: '#c9bcaf' }}>
                  Lal Mahal (1640 CE)
                </Link>
              </li>
              <li>
                <Link to="/monument/vishrambaug-wada" style={{ color: '#c9bcaf' }}>
                  Vishrambaug Wada (1807 CE)
                </Link>
              </li>
              <li>
                <Link to="/monument/aga-khan-palace" style={{ color: '#c9bcaf' }}>
                  Aga Khan Palace (1892 CE)
                </Link>
              </li>
              <li>
                <Link to="/monument/sinhagad-fort" style={{ color: '#c9bcaf' }}>
                  Sinhagad Fort (1670 CE)
                </Link>
              </li>
            </ul>
          </div>

          {/* Accessibility & Audio */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                color: '#f5eee6',
                marginBottom: '1rem'
              }}
            >
              Interactive Features
            </h4>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: '#c9bcaf', marginBottom: '0.85rem' }}>
              🎧 <strong>Listen to History:</strong> Built-in voice storyteller with chapter navigation and adjustable playback speeds.
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: '#c9bcaf' }}>
              📸 <strong>Then & Now:</strong> Interactive split-slider comparing verified historical paintings and photographs with present-day Pune.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(194, 139, 91, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.825rem',
            color: '#8e8073'
          }}
        >
          <div>
            © {new Date().getFullYear()} HeritageLens. Dedicated to Pune’s living culture, historical preservation, and responsible heritage tourism.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <span>Pune, Maharashtra, India</span>
            <span>•</span>
            <span>Dark Brown Heritage Aesthetic</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
