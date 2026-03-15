import React, { useEffect } from 'react'; 
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';
import Profil from './pages/Profil';
import Hero from './components/Hero';
import Sambutan from './components/Sambutan';
import VisiMisi from './components/VisiMisi';
import ProgramUnggulan from './components/ProgramUnggulan';
import PrestasiSiswa from './components/PrestasiSiswa';
import Testimoni from './components/Testimoni';
import StatCounter from './components/StatCounter';
import BeritaTerbaru from './pages/BeritaTerbaru';
import TenagaPengurus from './pages/TenagaPengurus';
import DewanPengurus from './pages/DewanPengurus';
import Program from './pages/Program';
import Galeri from './pages/Galeri';
import Pendaftaran from './pages/Pendaftaran';
import StrukturOrganisasiPage from './pages/StrukturOrganisasiPage';
import Kontak from './pages/Kontak';
import ChatCS from './components/ChatCS';
import Berita1 from './berita/Berita1';
import Berita2 from './berita/Berita2';
import Berita3 from './berita/Berita3';
import Berita4 from './berita/Berita4';
import Berita5 from './berita/Berita5';
import Berita6 from './berita/Berita6';

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
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <StatCounter />
              <Sambutan />
              <VisiMisi />
              <ProgramUnggulan />
              <PrestasiSiswa />
              <Testimoni />
            </>
          } />
          <Route path="/profil" element={<Profil />} />
          <Route path="/berita" element={<BeritaTerbaru />} />
          <Route path="/berita/1" element={<Berita1 />} />
          <Route path="/berita/2" element={<Berita2 />} />
          <Route path="/berita/3" element={<Berita3 />} />
          <Route path="/berita/4" element={<Berita4 />} />
          <Route path="/berita/5" element={<Berita5 />} />
          <Route path="/berita/6" element={<Berita6 />} />
          <Route path="/tenaga-kependidikan" element={<TenagaPengurus />} />
          <Route path="/dewan-guru" element={<DewanPengurus />} />
          <Route path="/struktur-organisasi" element={<StrukturOrganisasiPage />} />
          <Route path="/Program" element={<Program />} />

          <Route path="/galeri" element={<Galeri />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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
