import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SavedProvider } from './context/SavedContext';
import { AudioProvider } from './context/AudioContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { SearchModal } from './components/SearchModal';
import { BuildTripModal } from './components/BuildTripModal';

import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { MonumentDetailPage } from './pages/MonumentDetailPage';
import { MapPage } from './pages/MapPage';
import { WalksPage } from './pages/WalksPage';
import { WalkDetailPage } from './pages/WalkDetailPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { ExperienceDetailPage } from './pages/ExperienceDetailPage';
import { MyTripPage } from './pages/MyTripPage';

// Scroll to top on route change helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState('');
  const [isBuildTripOpen, setIsBuildTripOpen] = useState(false);

  const handleOpenSearchWithQuery = (query: string) => {
    setSearchInitialQuery(query);
    setIsSearchOpen(true);
  };

  return (
    <SavedProvider>
      <AudioProvider>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Top Navbar */}
          <Navbar
            onOpenSearch={() => {
              setSearchInitialQuery('');
              setIsSearchOpen(true);
            }}
          />

          {/* Main Application Routes */}
          <main style={{ flex: 1 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenBuildTrip={() => setIsBuildTripOpen(true)}
                    onOpenSearchWithQuery={handleOpenSearchWithQuery}
                  />
                }
              />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/monument/:id" element={<MonumentDetailPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/walks" element={<WalksPage />} />
              <Route path="/walks/:id" element={<WalkDetailPage />} />
              <Route path="/experiences" element={<ExperiencesPage />} />
              <Route path="/experiences/:id" element={<ExperienceDetailPage />} />
              <Route
                path="/saved"
                element={<MyTripPage onOpenBuildTrip={() => setIsBuildTripOpen(true)} />}
              />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* Global Modals & Notifications */}
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            initialQuery={searchInitialQuery}
          />

          <BuildTripModal
            isOpen={isBuildTripOpen}
            onClose={() => setIsBuildTripOpen(false)}
          />

          <Toast />
        </div>
      </AudioProvider>
    </SavedProvider>
  );
}

export default App;
