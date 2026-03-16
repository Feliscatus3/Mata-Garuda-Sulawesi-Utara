import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StrukturOrganisasiPage = () => {
  const navigate = useNavigate();
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
  const handleReset = () => setScale(1);

  // Static struktur organisasi data - ORIGINAL
  const strukturData = {
    judul: 'Struktur Organisasi',
    deskripsiSingkat: 'Struktur kepengurusan Mata Garuda Sulawesi Utara periode 2026-2029.',
    keterangan: 'Struktur organisasi ini menunjukkan hierarki kepengurusan MG Sulut yang terdiri dari Dewan Pembina, Dewan Pengarah, Pengurus Harian, dan Bidang-Bidang Kerja.',
  };

  const pengurus = [
    {
      nama: 'Dr. H. Steven, M.Si',
      jabatan: 'Dewan Pembina',
      deskripsi: 'Alumni LPDP & Tokoh Masyarakat Sulawesi Utara'
    },
    {
      nama: 'Prof. Dr. Ratna, M.Pd',
      jabatan: 'Dewan Pengarah',
      deskripsi: 'Akademisi & Penasihat'
    },
    {
      nama: 'Hikam Hulwanullah',
      jabatan: 'Ketua Umum',
      deskripsi: 'Pengurus Utama MG Sulut'
    },
    {
      nama: 'Ahmad Fauzi, S.Kom',
      jabatan: 'Sekretaris Umum',
      deskripsi: 'Koordinasi Administration & Documentation'
    },
    {
      nama: 'Siti Aminah, S.E',
      jabatan: 'Bendahara Umum',
      deskripsi: 'Keuangan & Perpajakan'
    },
    {
      nama: 'Budi Santoso, S.T',
      jabatan: 'Koordinator Bidang Program',
      deskripsi: 'MG Institute & Riset Kebijakan'
    },
    {
      nama: 'Rinawati, S.Psi',
      jabatan: 'Koordinator Bidang Pengembangan',
      deskripsi: 'Capacity Building & Entrepreneurship'
    },
    {
      nama: 'M. Iqbal, S.H',
      jabatan: 'Koordinator Bidang Hubungan',
      deskripsi: 'Hubungan Pemerintah & Swasta'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 lg:pt-44 pb-24 font-urbanist bg-[#FDFDFD] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px]">
        
        {/* Header & Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
            <span className="hover:text-[#B8860B] cursor-pointer" onClick={() => navigate('/')}>Beranda</span>
            <ChevronRight size={14} />
            <span className="hover:text-[#B8860B] cursor-pointer" onClick={() => navigate('/profil')}>Profil</span>
            <ChevronRight size={14} />
            <span className="text-[#B8860B]">Struktur Organisasi</span>
          </div>
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[56px] font-[900] text-black leading-none tracking-tight uppercase">
            {strukturData.judul}
          </h1>
          <div className="w-20 h-1.5 bg-[#B8860B] mt-6 rounded-full"></div>
          <p className="mt-8 text-gray-500 max-w-3xl font-medium text-base sm:text-lg leading-relaxed">
            {strukturData.deskripsiSingkat}
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col gap-10">
          
          {/* Keterangan Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-600 whitespace-pre-line text-sm sm:text-base"
          >
            {strukturData.keterangan}
          </motion.div>

          {/* Image Viewer Section - RESPONSIVE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full bg-gray-100 rounded-[24px] sm:rounded-[32px] overflow-hidden border border-gray-200 shadow-lg relative group"
          >
            {/* Toolbar Controls - Mobile hidden, desktop visible */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-lg z-20 border border-gray-100 hidden md:flex">
              <button onClick={handleZoomOut} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors" title="Zoom Out">
                <ZoomOut size={18} />
              </button>
              <span className="text-xs font-bold text-gray-400 w-10 text-center">{Math.round(scale * 100)}%</span>
              <button onClick={handleZoomIn} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors" title="Zoom In">
                <ZoomIn size={18} />
              </button>
              <div className="w-px h-5 bg-gray-200 mx-1"></div>
              <button onClick={handleReset} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors" title="Reset">
                <RotateCcw size={18} />
              </button>
            </div>

            {/* Struktur Organisasi Visualization - RESPONSIVE */}
            <div className="overflow-auto h-[70vh] sm:h-[75vh] md:h-[80vh] w-full flex items-start justify-center p-6 sm:p-8 md:p-10 bg-[#0D1B2A]">
              <div 
                style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }} 
                className="flex flex-col items-center gap-6 sm:gap-8 origin-top"
              >
                {/* Level 1: Dewan Pembina */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-48 sm:w-56 md:w-64 bg-gradient-to-r from-[#B8860B] to-[#D4A84B] rounded-2xl p-4 sm:p-6 text-center shadow-2xl flex-shrink-0"
                >
                  <h3 className="text-white font-black text-base sm:text-lg uppercase">Dewan Pembina</h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">{pengurus[0].nama}</p>
                  <p className="text-white/70 text-xs">{pengurus[0].deskripsi}</p>
                </motion.div>

                {/* Connector */}
                <div className="w-1 h-6 sm:h-8 bg-[#B8860B] flex-shrink-0"></div>

                {/* Level 2: Dewan Pengarah */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="w-52 sm:w-64 md:w-72 bg-gradient-to-r from-[#0D1B2A] to-[#1a3a5c] rounded-2xl p-4 sm:p-6 text-center shadow-2xl border-2 border-[#B8860B] flex-shrink-0"
                >
                  <h3 className="text-white font-black text-base sm:text-lg uppercase">Dewan Pengarah</h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">{pengurus[1].nama}</p>
                  <p className="text-white/70 text-xs">{pengurus[1].deskripsi}</p>
                </motion.div>

                {/* Connector */}
                <div className="w-1 h-6 sm:h-8 bg-[#B8860B] flex-shrink-0"></div>

                {/* Level 3: Ketua Umum */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="w-60 sm:w-72 md:w-80 bg-gradient-to-r from-[#B8860B] to-[#D4A84B] rounded-2xl p-6 sm:p-8 text-center shadow-2xl transform scale-105 flex-shrink-0"
                >
                  <h3 className="text-white font-black text-lg sm:text-xl uppercase">Ketua Umum</h3>
                  <p className="text-white font-bold text-base sm:text-lg mt-2">{pengurus[2].nama}</p>
                  <p className="text-white/70 text-sm">Periode 2026-2029</p>
                  <p className="text-white/80 text-xs mt-1">{pengurus[2].deskripsi}</p>
                </motion.div>

                {/* Connector */}
                <div className="w-1 h-6 sm:h-8 bg-[#B8860B] flex-shrink-0"></div>

                {/* Level 4: Sekretaris & Bendahara - Responsive flex */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md sm:max-w-lg justify-center"
                >
                  <div className="w-full sm:w-48 md:w-56 bg-white rounded-2xl p-4 sm:p-6 text-center shadow-xl border-t-4 border-[#0D1B2A] flex-shrink-0">
                    <h3 className="text-[#0D1B2A] font-black text-sm sm:text-base uppercase">Sekretaris Umum</h3>
                    <p className="text-gray-700 font-bold text-sm sm:text-base mt-1">{pengurus[3].nama}</p>
                    <p className="text-gray-600 text-xs">{pengurus[3].deskripsi}</p>
                  </div>
                  <div className="w-full sm:w-48 md:w-56 bg-white rounded-2xl p-4 sm:p-6 text-center shadow-xl border-t-4 border-[#B8860B] flex-shrink-0">
                    <h3 className="text-[#B8860B] font-black text-sm sm:text-base uppercase">Bendahara Umum</h3>
                    <p className="text-gray-700 font-bold text-sm sm:text-base mt-1">{pengurus[4].nama}</p>
                    <p className="text-gray-600 text-xs">{pengurus[4].deskripsi}</p>
                  </div>
                </motion.div>

                {/* Connector */}
                <div className="w-1 h-6 sm:h-8 bg-[#B8860B] flex-shrink-0"></div>

                {/* Level 5: Bidang-Bidang - Responsive wrap */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-2xl"
                >
                  {pengurus.slice(5).map((item, idx) => (
                    <div key={idx} className="w-36 sm:w-40 md:w-48 bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg flex-shrink-0 hover:scale-105 transition-transform">
                      <h3 className="text-[#0D1B2A] font-black text-xs sm:text-sm uppercase leading-tight">{item.jabatan}</h3>
                      <p className="text-gray-700 font-bold text-xs sm:text-sm mt-1 leading-tight">{item.nama}</p>
                      <p className="text-gray-500 text-xs">{item.deskripsi}</p>
                    </div>
                  ))}
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasiPage;
