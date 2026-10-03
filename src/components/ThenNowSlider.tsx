import React, { useState, useRef, useCallback } from 'react';

interface ThenNowProps {
  thenImage: string;
  nowImage: string;
  thenLabel?: string;
  nowLabel?: string;
  title: string;
  description: string;
}

export const ThenNowSlider: React.FC<ThenNowProps> = ({
  thenImage,
  nowImage,
  thenLabel = 'THEN (Historical View)',
  nowLabel = 'NOW (Present Day)',
  title,
  description
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div
      style={{
        backgroundColor: '#1f1714',
        borderRadius: '12px',
        border: '1px solid rgba(194, 139, 91, 0.25)',
        padding: '1.5rem',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      {/* Title & Explanatory text */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.35rem',
              color: '#f5eee6',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Then & Now: {title}
          </h3>

          {/* Quick presets */}
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {[25, 50, 75].map((preset) => (
              <button
                key={preset}
                onClick={() => setSliderPosition(preset)}
                style={{
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  borderRadius: '4px',
                  backgroundColor: Math.round(sliderPosition) === preset ? '#c28b5b' : 'rgba(39, 30, 26, 0.8)',
                  color: Math.round(sliderPosition) === preset ? '#15100d' : '#c9bcaf',
                  border: '1px solid rgba(194, 139, 91, 0.3)',
                  transition: 'all 0.15s ease'
                }}
              >
                {preset}%
              </button>
            ))}
          </div>
        </div>

        <p style={{ color: '#c9bcaf', fontSize: '0.9rem', lineHeight: 1.5 }}>
          {description}
        </p>
      </div>

      {/* Interactive Drag Container */}
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: '8px',
          overflow: 'hidden',
          userSelect: 'none',
          cursor: 'ew-resize',
          backgroundColor: '#15100d',
          border: '1px solid rgba(194, 139, 91, 0.2)'
        }}
      >
        {/* Layer 1: NOW image (Full background) */}
        <img
          src={nowImage}
          alt={nowLabel}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          draggable={false}
        />

        {/* NOW Label Tag */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(21, 16, 13, 0.85)',
            border: '1px solid rgba(194, 139, 91, 0.4)',
            color: '#f5eee6',
            padding: '0.35rem 0.75rem',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            backdropFilter: 'blur(8px)',
            pointerEvents: 'none'
          }}
        >
          {nowLabel}
        </div>

        {/* Layer 2: THEN image (Clipped to sliderPosition %) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: `${sliderPosition}%`,
            overflow: 'hidden',
            borderRight: '2px solid #c28b5b',
            boxShadow: '4px 0 16px rgba(0, 0, 0, 0.7)'
          }}
        >
          <img
            src={thenImage}
            alt={thenLabel}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
              maxWidth: 'none',
              height: '100%',
              objectFit: 'cover'
            }}
            draggable={false}
          />

          {/* THEN Label Tag */}
          <div
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              backgroundColor: 'rgba(21, 16, 13, 0.85)',
              border: '1px solid rgba(194, 139, 91, 0.4)',
              color: '#d89e68',
              padding: '0.35rem 0.75rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(8px)',
              pointerEvents: 'none'
            }}
          >
            {thenLabel}
          </div>
        </div>

        {/* Draggable Divider Handle */}
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)',
            width: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            cursor: 'ew-resize'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#c28b5b',
              border: '2px solid #ffffff',
              boxShadow: '0 0 12px rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#15100d',
              fontSize: '0.75rem',
              fontWeight: 800
            }}
          >
            ◀▶
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: '0.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8rem',
          color: '#8e8073'
        }}
      >
        <span>Drag the slider horizontally to compare historical vs present views</span>
        <span style={{ color: '#c28b5b', fontWeight: 600 }}>{Math.round(sliderPosition)}% Historical</span>
      </div>
    </div>
  );
};
