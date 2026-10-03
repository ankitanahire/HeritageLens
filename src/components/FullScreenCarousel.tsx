import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export interface FullScreenSlide {
  id: string;
  title: string;
  ariaLabel?: string;
  category: string;
  image: string;
  description: string;
  badge?: string;
  metadata: string[];
  primaryActionLabel: string;
  onPrimaryAction: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  isSaved?: boolean;
  onToggleSave?: () => void;
}

interface FullScreenCarouselProps {
  eyebrow: string;
  slides: FullScreenSlide[];
  toolbar?: React.ReactNode;
}

export const FullScreenCarousel: React.FC<FullScreenCarouselProps> = ({ eyebrow, slides, toolbar }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (slides.length === 0) return null;

  const currentIndex = activeIndex % slides.length;
  const slide = slides[currentIndex];
  const move = (offset: number) => {
    setActiveIndex((index) => (index + offset + slides.length) % slides.length);
  };

  return (
    <section className="full-screen-showcase" aria-label={`${eyebrow} carousel`} aria-roledescription="carousel">
      <div className="full-screen-showcase__background" aria-hidden="true">
        <img key={slide.id} src={slide.image} alt="" className="full-screen-showcase__image" />
        <div className="full-screen-showcase__overlay" />
      </div>

      <div className="full-screen-showcase__layout">
        <div className="full-screen-showcase__copy" key={slide.id}>
          {toolbar}
          <p className="full-screen-showcase__eyebrow">
            {eyebrow} <span aria-hidden="true">/</span> {slide.category}
          </p>
          {slide.badge && <span className="full-screen-showcase__badge">{slide.badge}</span>}
          <h1>{slide.title}</h1>
          <p className="full-screen-showcase__description">{slide.description}</p>

          <div className="full-screen-showcase__metadata">
            {slide.metadata.map((item, index) => (
              <React.Fragment key={`${slide.id}-${item}`}>
                {index > 0 && <span className="full-screen-showcase__separator" aria-hidden="true">•</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>

          <div className="full-screen-showcase__actions">
            <button className="btn-primary" onClick={slide.onPrimaryAction}>
              {slide.primaryActionLabel}
            </button>
            {slide.secondaryActionLabel && slide.onSecondaryAction && (
              <button className="btn-secondary" onClick={slide.onSecondaryAction}>
                {slide.secondaryActionLabel}
              </button>
            )}
            {slide.onToggleSave && (
              <button
                className="full-screen-showcase__save"
                type="button"
                aria-label={slide.isSaved ? 'Remove from saved' : 'Save experience'}
                aria-pressed={slide.isSaved}
                title={slide.isSaved ? 'Remove from saved' : 'Save experience'}
                onClick={slide.onToggleSave}
              >
                <Heart size={19} fill={slide.isSaved ? 'currentColor' : 'none'} />
              </button>
            )}
          </div>
        </div>

        <div className="full-screen-showcase__controls">
          <div className="full-screen-showcase__navigation">
            <button
              className="full-screen-showcase__arrow"
              type="button"
              aria-label={`Previous ${eyebrow.toLowerCase()}`}
              onClick={() => move(-1)}
            >
              <ChevronLeft size={20} />
            </button>
            <span className="full-screen-showcase__counter" aria-live="polite">
              {currentIndex + 1} / {slides.length}
            </span>
            <button
              className="full-screen-showcase__arrow"
              type="button"
              aria-label={`Next ${eyebrow.toLowerCase()}`}
              onClick={() => move(1)}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="full-screen-showcase__indicators" aria-label="Choose slide">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`full-screen-showcase__indicator${index === currentIndex ? ' is-active' : ''}`}
                aria-label={`Show ${item.ariaLabel ?? item.title}`}
                aria-current={index === currentIndex ? 'true' : undefined}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};