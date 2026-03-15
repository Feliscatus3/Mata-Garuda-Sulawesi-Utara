import React, { useEffect } from 'react'; 
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import TentangKami from './pages/TentangKami';
import ProfilMataGaruda from './pages/ProfilMataGaruda';
import StrukturOrganisasi from './pages/StrukturOrganisasi';
import DewanPenasihat from './pages/DewanPenasihat';
import TimSekretariat from './pages/TimSekretariat';
import ProgramUtama from './pages/ProgramUtama';
import KomunitasProgram from './pages/KomunitasProgram';
import MataGarudaInstitute from './pages/MataGarudaInstitute';
import Pengurus from './pages/Pengurus';
import Berita from './pages/Berita';
import BeritaTerbaru from './pages/BeritaTerbaru';
import Galeri from './pages/Galeri';
import Kolaborasi from './pages/Kolaborasi';
import Pendaftaran from './pages/Pendaftaran';
import Kontak from './pages/Kontak';
import Login from './pages/Login';
import NewsDetail from './pages/NewsDetail';
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
                <ProgramUtama />
                <Pengurus />
                <Berita />
                <Kolaborasi />
              </>
            } />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/tentang-kami/profil-mata-garuda" element={<ProfilMataGaruda />} />
            <Route path="/tentang-kami/struktur-organisasi" element={<StrukturOrganisasi />} />
            <Route path="/tentang-kami/dewan-penasihat" element={<DewanPenasihat />} />
            <Route path="/organisasi/pengurus" element={<Pengurus />} />
            <Route path="/organisasi/tim-sekretariat" element={<TimSekretariat />} />
            <Route path="/program" element={<ProgramUtama />} />
            <Route path="/program/komunitas-program" element={<KomunitasProgram />} />
            <Route path="/program/mata-garuda-institute" element={<MataGarudaInstitute />} />
            <Route path="/media/berita" element={<Berita />} />
            <Route path="/media/berita-terbaru" element={<BeritaTerbaru />} />
            <Route path="/media/galeri" element={<Galeri />} />
            <Route path="/berita/:id" element={<NewsDetail />} />
            <Route path="/kolaborasi" element={<Kolaborasi />} />
            <Route path="/pendaftaran" element={<Pendaftaran />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/login" element={<Login />} />
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
