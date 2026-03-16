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

  const strukturData = {
    judul: 'Struktur Organisasi',
    keterangan: 'Hierarki organisasi yang mobile responsive dengan zoom dan animasi smooth untuk semua ukuran layar.',
  };

  const pengurus = [
    {
      nama: 'Hikam Hulwanullah',
      jabatan: 'Ketua',
      deskripsi: 'Ketua Umum MG Sulut 2026-2029'
    },
    {
      nama: 'Dr. H. Steven O.E, M.Si',
      jabatan: 'Wakil Ketua',
      deskripsi: 'Wakil Ketua Umum & Pembina'
    },
    {
      nama: 'Ahmad Fauzi, S.Kom',
      jabatan: 'Sekretaris',
      deskripsi: 'Sekretaris Umum'
    },
    {
      nama: 'Siti Aminah, S.E',
      jabatan: 'Bendahara',
      deskripsi: 'Bendahara Umum'
    },
    {
      nama: 'Budi Santoso, S.T',
      jabatan: 'Kepala Bidang Program',
      deskripsi: 'Program & Riset'
    },
    {
      nama: 'Rinawati, S.Psi',
      jabatan: 'Kepala Bidang Pengembangan',
      deskripsi: 'Pengembangan SDM'
    },
    {
      nama: 'M. Iqbal, S.H',
      jabatan: 'Kepala Bidang Hubungan',
      deskripsi: 'Hubungan Eksternal'
    }
  ];

  return (
    <div className="pt-24 md:pt-28 lg:pt-32 xl:pt-44 pb-16 xl:pb-24 font-urbanist bg-[#FDFDFD] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-20"
        >
          <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">
            <span className="hover:text-emerald-600 cursor-pointer transition-colors" onClick={() => navigate('/')}>Beranda</span>
            <ChevronRight size={14} />
            <span className="hover:text-emerald-600 cursor-pointer transition-colors" onClick={() => navigate('/profil')}>Profil</span>
            <ChevronRight size={14} />
            <span className="text-emerald-600 font-semibold">Struktur Organisasi</span>
          </nav>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight uppercase mb-6">
            {strukturData.judul}
          </h1>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full mb-8"></div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {strukturData.deskripsiSingkat}
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col items-center gap-12 lg:gap-16">
          
          {/* Keterangan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-center text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed px-4"
          >
            {strukturData.keterangan}
          </motion.div>

          {/* Chart Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white/80 backdrop-blur-xl"
          >
            
            {/* Toolbar */}
            <div className="sticky top-0 z-20 flex items-center gap-2 p-4 sm:p-5 bg-white/95 backdrop-blur-md border-b border-gray-200 lg:absolute lg:-top-14 lg:right-0 lg:p-3 lg:rounded-tl-xl lg:shadow-lg">
              <button onClick={handleZoomOut} className="p-3 rounded-xl hover:bg-gray-100 transition-all text-gray-700 lg:text-gray-600" title="Zoom Out">
                <ZoomOut size={18} />
              </button>
              <div className="px-3 py-2 bg-gray-100 rounded-xl font-mono font-bold text-sm w-20 text-center text-gray-800">
                {Math.round(scale * 100)}%
              </div>
              <button onClick={handleZoomIn} className="p-3 rounded-xl hover:bg-gray-100 transition-all text-gray-700 lg:text-gray-600" title="Zoom In">
                <ZoomIn size={18} />
              </button>
              <div className="w-px h-8 bg-gray-200 mx-2 lg:hidden"></div>
              <button onClick={handleReset} className="p-3 rounded-xl hover:bg-gray-100 transition-all text-gray-700 lg:text-gray-600 lg:ml-auto" title="Reset">
                <RotateCcw size={18} />
              </button>
            </div>

            {/* Chart */}
            <div className="overflow-auto h-[70vh] sm:h-[75vh] lg:h-[85vh] p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-slate-50/50 to-white">
              <div 
                style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }} 
                className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 origin-center"
              >
                
                {/* Level 1: Ketua */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-64 sm:w-72 md:w-80 lg:w-96 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl border-4 border-white/30 hover:shadow-3xl hover:scale-105 transition-all duration-500"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-wide mb-4">Ketua</h3>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{pengurus[0].nama}</p>
                  <p className="text-sm sm:text-base opacity-90">{pengurus[0].deskripsi}</p>
                </motion.div>

                {/* Connector 1 */}
                <div className="w-1.5 h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-emerald-400 to-emerald-500 rounded-full shadow-md"></div>

                {/* Level 2: Wakil */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="w-60 sm:w-68 md:w-72 lg:w-80 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-7 lg:p-10 text-center text-white shadow-2xl border-4 border-white/30 hover:shadow-3xl hover:scale-105 transition-all duration-500"
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-wide mb-3">Wakil Ketua</h3>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{pengurus[1].nama}</p>
                  <p className="text-sm opacity-90">{pengurus[1].deskripsi}</p>
                </motion.div>

                {/* Connector 2 */}
                <div className="w-1.5 h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full shadow-md"></div>

                {/* Level 3: Sekretaris + Bendahara */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center"
                >
                  <div className="w-52 sm:w-56 md:w-60 lg:w-64 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-6 lg:p-8 text-center text-white shadow-2xl border-4 border-white/30 hover:shadow-3xl hover:scale-105 transition-all duration-500 flex-1 max-w-sm">
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide mb-3">Sekretaris</h3>
                    <p className="text-lg font-bold mb-2">{pengurus[2].nama}</p>
                    <p className="text-sm opacity-90">{pengurus[2].deskripsi}</p>
                  </div>
                  <div className="w-52 sm:w-56 md:w-60 lg:w-64 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 lg:p-8 text-center text-white shadow-2xl border-4 border-white/30 hover:shadow-3xl hover:scale-105 transition-all duration-500 flex-1 max-w-sm">
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide mb-3">Bendahara</h3>
                    <p className="text-lg font-bold mb-2">{pengurus[3].nama}</p>
                    <p className="text-sm opacity-90">{pengurus[3].deskripsi}</p>
                  </div>
                </motion.div>

                {/* Connector 3 */}
                <div className="w-1.5 h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-purple-400 to-purple-500 rounded-full shadow-md"></div>

                {/* Level 4: Kepala Bidang */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center w-full max-w-5xl"
                >
                  {pengurus.slice(4).map((item, idx) => (
                    <div key={idx} className="w-44 sm:w-48 md:w-52 lg:w-56 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl p-5 lg:p-6 text-center text-white shadow-xl border-4 border-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group flex flex-col items-center">
                      <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-3 group-hover:underline">{item.jabatan}</h4>
                      <p className="text-sm font-semibold mb-1">{item.nama}</p>
                      <p className="text-xs opacity-90">{item.deskripsi}</p>
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

