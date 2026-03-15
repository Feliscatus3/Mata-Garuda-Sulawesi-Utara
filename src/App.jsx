import React, { useEffect } from 'react'; 
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import TentangKami from './pages/TentangKami';
import Program from './pages/Program';
import Pengurus from './pages/Pengurus';
import Berita from './pages/Berita';
import Kolaborasi from './pages/Kolaborasi';
import Kontak from './pages/Kontak';
import ChatCS from './components/ChatCS';
import ErrorBoundary from './components/ErrorBoundary';

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  // Global Scroll to Top: Reset scroll setiap kali pindah halaman (kecuali jika ada hash/anchor)
  useEffect(() => {
    // Matikan restorasi scroll otomatis browser agar tidak bentrok dengan manual scroll
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    // 'scroll-auto' memastikan perilaku scroll kembali ke standar browser yang stabil
    <div className="flex flex-col min-h-screen bg-white font-urbanist overflow-x-hidden scroll-auto">
      {!isLoginPage && <Navbar />}
      <main className="flex-grow">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <TentangKami />
                <Program />
                <Pengurus />
                <Berita />
                <Kolaborasi />
              </>
            } />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/program" element={<Program />} />
            <Route path="/pengurus" element={<Pengurus />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/kolaborasi" element={<Kolaborasi />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ErrorBoundary>
      </main>
      {!isLoginPage && <Footer />}
      {!isLoginPage && <ChatCS />}
      <ScrollToTop />
    </div>
  );
};

function App() {
  return <AppContent />;
}

export default App;
