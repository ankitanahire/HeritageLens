import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ItineraryItem, Booking } from '../types';

interface SavedContextType {
  savedIds: string[];
  isSaved: (id: string) => boolean;
  toggleSave: (id: string, title?: string) => void;
  itinerary: ItineraryItem[];
  addToItinerary: (item: Omit<ItineraryItem, 'id'>) => void;
  removeFromItinerary: (id: string) => void;
  reorderItinerary: (fromIndex: number, toIndex: number) => void;
  updateItineraryItem: (id: string, updates: Partial<ItineraryItem>) => void;
  setFullItinerary: (items: ItineraryItem[]) => void;
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt'>) => Booking;
  toastMessage: { text: string; type: 'success' | 'info' } | null;
  showToast: (text: string, type?: 'success' | 'info') => void;
}

const DEFAULT_ITINERARY: ItineraryItem[] = [
  {
    id: 'it-1',
    placeId: 'shaniwar-wada',
    type: 'monument',
    title: 'Shaniwar Wada',
    time: '9:00 AM',
    duration: '1 hr',
    category: 'Fort • 18th century',
    location: 'Shaniwar Peth',
    image: '/images/monuments/shaniwar-wada-hero.jpg',
    latitude: 18.5191,
    longitude: 73.8555
  },
  {
    id: 'it-2',
    placeId: 'lal-mahal',
    type: 'monument',
    title: 'Lal Mahal',
    time: '11:00 AM',
    duration: '1 hr',
    category: 'Palace • 17th century',
    location: 'Kasba Peth',
    image: '/images/monuments/lal-mahal.jpg',
    latitude: 18.5197,
    longitude: 73.8569
  },
  {
    id: 'it-3',
    placeId: 'aga-khan-palace',
    type: 'monument',
    title: 'Aga Khan Palace',
    time: '2:00 PM',
    duration: '1.5 hrs',
    category: 'Palace • 19th century',
    location: 'Yerwada',
    image: '/images/monuments/aga-khan-palace.jpg',
    latitude: 18.5524,
    longitude: 73.9015
  },
  {
    id: 'it-4',
    placeId: 'traditional-maharashtrian-feast',
    type: 'experience',
    title: 'Local Food Experience',
    time: '4:00 PM',
    duration: '1 hr',
    category: 'Experience • Culinary',
    location: 'Shaniwar Peth',
    image: '/images/experiences/maharashtrian-food.jpg',
    latitude: 18.5190,
    longitude: 73.8548
  }
];

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export const SavedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved places from localStorage
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('heritagelens_saved_places');
      return stored ? JSON.parse(stored) : ['shaniwar-wada', 'vishrambaug-wada', 'classical-music-evening'];
    } catch {
      return ['shaniwar-wada', 'vishrambaug-wada', 'classical-music-evening'];
    }
  });

  // Load itinerary from localStorage
  const [itinerary, setItinerary] = useState<ItineraryItem[]>(() => {
    try {
      const stored = localStorage.getItem('heritagelens_itinerary');
      return stored ? JSON.parse(stored) : DEFAULT_ITINERARY;
    } catch {
      return DEFAULT_ITINERARY;
    }
  });

  // Load bookings from localStorage
  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const stored = localStorage.getItem('heritagelens_bookings');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'info' } | null>(null);

  const showToast = (text: string, type: 'success' | 'info' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Sync savedIds to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('heritagelens_saved_places', JSON.stringify(savedIds));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [savedIds]);

  // Sync itinerary to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('heritagelens_itinerary', JSON.stringify(itinerary));
    } catch (e) {
      console.error('Failed to save itinerary to localStorage', e);
    }
  }, [itinerary]);

  // Sync bookings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('heritagelens_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.error('Failed to save bookings to localStorage', e);
    }
  }, [bookings]);

  const isSaved = (id: string) => savedIds.includes(id);

  const toggleSave = (id: string, title?: string) => {
    setSavedIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast(`Removed ${title || 'item'} from Saved Places`, 'info');
        return prev.filter((item) => item !== id);
      } else {
        showToast(`Saved ${title || 'item'} to your trip collection!`, 'success');
        return [...prev, id];
      }
    });
  };

  const addToItinerary = (item: Omit<ItineraryItem, 'id'>) => {
    const newItem: ItineraryItem = {
      ...item,
      id: `it-${Date.now()}`
    };
    setItinerary((prev) => [...prev, newItem]);
    showToast(`Added ${item.title} to your planned itinerary`, 'success');
  };

  const removeFromItinerary = (id: string) => {
    setItinerary((prev) => {
      const target = prev.find((item) => item.id === id);
      if (target) {
        showToast(`Removed ${target.title} from itinerary`, 'info');
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  const reorderItinerary = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= itinerary.length) return;
    setItinerary((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, moved);
      return updated;
    });
  };

  const updateItineraryItem = (id: string, updates: Partial<ItineraryItem>) => {
    setItinerary((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
    showToast('Itinerary timing updated', 'success');
  };

  const setFullItinerary = (items: ItineraryItem[]) => {
    setItinerary(items);
    showToast('Custom trip itinerary generated and applied!', 'success');
  };

  const addBooking = (bookingData: Omit<Booking, 'id' | 'createdAt'>): Booking => {
    const newBooking: Booking = {
      ...bookingData,
      id: `book-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    setBookings((prev) => [newBooking, ...prev]);
    return newBooking;
  };

  return (
    <SavedContext.Provider
      value={{
        savedIds,
        isSaved,
        toggleSave,
        itinerary,
        addToItinerary,
        removeFromItinerary,
        reorderItinerary,
        updateItineraryItem,
        setFullItinerary,
        bookings,
        addBooking,
        toastMessage,
        showToast
      }}
    >
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error('useSaved must be used within a SavedProvider');
  }
  return context;
};
