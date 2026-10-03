import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Search, User, Menu, X, Heart } from 'lucide-react';
import { useSaved } from '../context/SavedContext';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenProfile }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { savedIds } = useSaved();
  const navigate = useNavigate();

  const totalSavedCount = savedIds.length;

  const navLinks = [
    { name: 'Explore', path: '/explore' },
    { name: 'Map', path: '/map' },
    { name: 'Walks', path: '/walks' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Saved / My Trip', path: '/saved' }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(21, 16, 13, 0.94)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(194, 139, 91, 0.15)',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.5rem'
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.45rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: '#f5eee6'
            }}
          >
            Heritage<span style={{ color: '#c28b5b' }}>Lens</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2.25rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                position: 'relative',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#f5eee6' : '#c9bcaf',
                textDecoration: 'none',
                padding: '0.4rem 0',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              })}
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {link.path === '/saved' && totalSavedCount > 0 && (
                    <span
                      style={{
                        backgroundColor: '#c28b5b',
                        color: '#15100d',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '0.1rem 0.45rem',
                        borderRadius: '999px',
                        lineHeight: 1.2
                      }}
                    >
                      {totalSavedCount}
                    </span>
                  )}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: '#c28b5b',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Icons (Search, Profile, Mobile Toggle) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(39, 30, 26, 0.6)',
              border: '1px solid rgba(194, 139, 91, 0.2)',
              color: '#f5eee6',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(194, 139, 91, 0.2)';
              e.currentTarget.style.borderColor = '#c28b5b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(39, 30, 26, 0.6)';
              e.currentTarget.style.borderColor = 'rgba(194, 139, 91, 0.2)';
            }}
          >
            <Search size={18} />
          </button>

          {/* Profile Button */}
          <button
            onClick={onOpenProfile}
            aria-label="User Profile"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(194, 139, 91, 0.2)',
              border: '1px solid #c28b5b',
              color: '#f5eee6',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <User size={18} color="#f5eee6" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.5rem',
              height: '2.5rem',
              color: '#f5eee6',
              backgroundColor: 'transparent',
              border: 'none'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#1a1310',
            borderBottom: '1px solid rgba(194, 139, 91, 0.2)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'fadeIn 0.2s ease-out'
          }}
          className="mobile-menu-drawer"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: '#f5eee6',
                padding: '0.5rem 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(194, 139, 91, 0.08)'
              }}
            >
              <span>{link.name}</span>
              {link.path === '/saved' && totalSavedCount > 0 && (
                <span
                  style={{
                    backgroundColor: '#c28b5b',
                    color: '#15100d',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '999px'
                  }}
                >
                  {totalSavedCount}
                </span>
              )}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate('/saved');
            }}
            className="btn-primary"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <Heart size={16} /> View Saved & Itinerary ({totalSavedCount})
          </button>
        </div>
      )}

      {/* Inline styles for responsive display */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-menu-drawer {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
