import React, { useState } from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Experience, UpcomingSlot } from '../types';
import { useSaved } from '../context/SavedContext';

interface BookingModalProps {
  experience: Experience;
  isOpen: boolean;
  onClose: () => void;
  preselectedSlot?: UpcomingSlot;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  experience,
  isOpen,
  onClose,
  preselectedSlot
}) => {
  const { addBooking, addToItinerary } = useSaved();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedSlot, setSelectedSlot] = useState<UpcomingSlot>(
    preselectedSlot || experience.upcomingDates[0]
  );
  const [guestCount, setGuestCount] = useState<number>(2);
  const [customerName, setCustomerName] = useState<string>('Ananya Sharma');
  const [customerEmail, setCustomerEmail] = useState<string>('ananya.sharma@example.com');
  const [customerPhone, setCustomerPhone] = useState<string>('+91 98234 56789');
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const totalPrice = experience.price * guestCount;

  const handleProceedToDetails = () => {
    setStep(2);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const refCode = `HL-PUN-${randomSuffix}`;
    setBookingRef(refCode);

    // Save to context
    addBooking({
      experienceId: experience.id,
      experienceTitle: experience.title,
      date: selectedSlot.date,
      time: selectedSlot.time,
      guests: guestCount,
      totalPrice: totalPrice,
      customerName,
      customerEmail,
      customerPhone,
      bookingReference: refCode
    });

    // Also auto-suggest adding to itinerary
    addToItinerary({
      placeId: experience.id,
      type: 'experience',
      title: experience.title,
      time: selectedSlot.time.split('–')[0].trim() || '6:00 PM',
      duration: experience.duration,
      category: `Experience • ${experience.category}`,
      location: experience.location,
      image: experience.image,
      latitude: experience.latitude,
      longitude: experience.longitude
    });

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c28b5b', '#d89e68', '#f5eee6', '#5fa874']
      });
    } catch {
      // Ignore if confetti not supported
    }

    setStep(3);
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
          maxWidth: '560px',
          backgroundColor: '#1f1714',
          border: '1px solid rgba(194, 139, 91, 0.3)',
          borderRadius: '14px',
          boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
        className="animate-fade-in"
      >
        {/* Modal Header */}
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
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                color: '#c28b5b',
                textTransform: 'uppercase',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}
            >
              Step {step} of 3
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: '#f5eee6'
              }}
            >
              {step === 1 && 'Select Date & Time Slot'}
              {step === 2 && 'Guest Details & Confirmation'}
              {step === 3 && 'Booking Confirmed!'}
            </h3>
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

        {/* Modal Body */}
        <div style={{ padding: '1.5rem', maxHeight: '75vh', overflowY: 'auto' }}>
          {/* STEP 1: Select Date & Time Slot */}
          {step === 1 && (
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: '#15100d',
                  borderRadius: '8px',
                  border: '1px solid rgba(194, 139, 91, 0.15)',
                  marginBottom: '1.5rem'
                }}
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '6px',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <h4 style={{ color: '#f5eee6', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    {experience.title}
                  </h4>
                  <p style={{ color: '#c28b5b', fontSize: '0.85rem', fontWeight: 600 }}>
                    {experience.priceFormatted} per person • {experience.duration}
                  </p>
                </div>
              </div>

              <label
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#f5eee6',
                  marginBottom: '0.75rem'
                }}
              >
                Available Dates & Schedules:
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {experience.upcomingDates.map((slot, index) => {
                  const isSelected = selectedSlot.date === slot.date && selectedSlot.time === slot.time;
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedSlot(slot)}
                      style={{
                        padding: '1rem',
                        borderRadius: '8px',
                        backgroundColor: isSelected ? 'rgba(194, 139, 91, 0.15)' : '#18120f',
                        border: isSelected ? '1.5px solid #c28b5b' : '1px solid rgba(194, 139, 91, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Calendar size={18} color={isSelected ? '#c28b5b' : '#8e8073'} />
                        <div>
                          <div style={{ fontWeight: 600, color: '#f5eee6', fontSize: '0.95rem' }}>
                            {slot.date}
                          </div>
                          <div style={{ color: '#c9bcaf', fontSize: '0.825rem' }}>
                            {slot.time}
                          </div>
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          backgroundColor: isSelected ? '#c28b5b' : 'rgba(39, 30, 26, 0.8)',
                          color: isSelected ? '#15100d' : '#d89e68',
                          fontWeight: 700
                        }}
                      >
                        {slot.seatsLeft} seats left
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleProceedToDetails}
                className="btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                Proceed to Guest Details
              </button>
            </div>
          )}

          {/* STEP 2: Guests & Contact Information */}
          {step === 2 && (
            <form onSubmit={handleConfirmBooking}>
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: '#15100d',
                  borderRadius: '8px',
                  marginBottom: '1.25rem',
                  border: '1px solid rgba(194, 139, 91, 0.15)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                  <span style={{ color: '#c9bcaf' }}>Date & Time:</span>
                  <span style={{ color: '#f5eee6', fontWeight: 600 }}>{selectedSlot.date} ({selectedSlot.time})</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: '#c9bcaf' }}>Venue:</span>
                  <span style={{ color: '#f5eee6', fontWeight: 600 }}>{experience.location.split(',')[0]}</span>
                </div>
              </div>

              {/* Guest Count selector */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', color: '#f5eee6', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Number of Guests
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(39, 30, 26, 0.8)',
                      border: '1px solid rgba(194, 139, 91, 0.3)',
                      color: '#f5eee6',
                      fontSize: '1.25rem',
                      fontWeight: 700
                    }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f5eee6', minWidth: '2rem', textAlign: 'center' }}>
                    {guestCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.min(selectedSlot.seatsLeft, guestCount + 1))}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(39, 30, 26, 0.8)',
                      border: '1px solid rgba(194, 139, 91, 0.3)',
                      color: '#f5eee6',
                      fontSize: '1.25rem',
                      fontWeight: 700
                    }}
                  >
                    +
                  </button>
                  <span style={{ color: '#8e8073', fontSize: '0.85rem' }}>
                    ({guestCount} × ₹{experience.price} = ₹{totalPrice})
                  </span>
                </div>
              </div>

              {/* Customer Inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#c9bcaf', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#c9bcaf', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#c9bcaf', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              {/* Total Price & Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  backgroundColor: '#18120f',
                  borderRadius: '8px',
                  marginBottom: '1rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#8e8073', textTransform: 'uppercase' }}>Total Due (Demo)</span>
                  <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f5eee6' }}>₹{totalPrice}</div>
                </div>

                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary"
                    style={{ padding: '0.75rem 1rem' }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ padding: '0.75rem 1.4rem' }}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* STEP 3: Booking Confirmed */}
          {step === 3 && (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div
                style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(95, 168, 116, 0.2)',
                  border: '2px solid #5fa874',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}
              >
                <CheckCircle2 size={36} color="#7ece94" />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.65rem',
                  color: '#f5eee6',
                  marginBottom: '0.5rem'
                }}
              >
                Booking Confirmed!
              </h3>
              <p style={{ color: '#c9bcaf', fontSize: '0.925rem', marginBottom: '1.5rem' }}>
                Your spot has been reserved. A confirmation SMS and email have been sent to {customerEmail}.
              </p>

              {/* Booking Reference Ticket Card */}
              <div
                style={{
                  backgroundColor: '#15100d',
                  border: '1px dashed #c28b5b',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  textAlign: 'left',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#8e8073', textTransform: 'uppercase' }}>
                    Booking Reference
                  </span>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: '#d89e68',
                      backgroundColor: 'rgba(194, 139, 91, 0.15)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px'
                    }}
                  >
                    {bookingRef}
                  </span>
                </div>

                <div style={{ fontSize: '0.9rem', color: '#f5eee6', marginBottom: '0.35rem' }}>
                  <strong>{experience.title}</strong>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.825rem', color: '#c9bcaf', marginTop: '0.65rem' }}>
                  <div>Date: {selectedSlot.date}</div>
                  <div>Time: {selectedSlot.time}</div>
                  <div>Guests: {guestCount}</div>
                  <div>Total: ₹{totalPrice} (Confirmed)</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                <button
                  onClick={onClose}
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
