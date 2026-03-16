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
    keterangan: 'Hierarki organisasi lengkap dengan zoom untuk desktop dan mobile.',
  };

  const pengurus = [
    {
      nama: 'Hikam Hulwanullah',
      jabatan: 'Ketua',
      deskripsi: 'Ketua Umum'
    },
    {
      nama: 'Dr. H. Steven O.E, M.Si',
      jabatan: 'Wakil Ketua',
      deskripsi: 'Wakil Ketua Umum'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-20 lg:pt-32 pb-20 font-urbanist">
      <div className="max-w-6xl mx-auto px-4 lg:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 lg:mb-24"
        >
          <nav className="flex items-center justify-center gap-2 text-sm lg:text-base font-bold text-gray-400 uppercase tracking-wider mb-6">
            <span className="hover:text-emerald-600 cursor-pointer transition-all" onClick={() => navigate('/')}>Beranda</span>
            <ChevronRight size={14} />
            <span className="hover:text-emerald-600 cursor-pointer transition-all" onClick={() => navigate('/profil')}>Profil</span>
            <ChevronRight size={14} />
            <span className="text-emerald-600 font-semibold">Struktur Organisasi</span>
          </nav>
          
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-900 to-emerald-900 bg-clip-text text-transparent leading-tight uppercase">
            {strukturData.judul}
          </h1>
          
          <div className="w-24 h-1.5 mx-auto mt-6 lg:mt-8 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"></div>
        </motion.div>

        {/* Zoom Toolbar - Always Visible */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-3 p-4 mb-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 max-w-max mx-auto sticky z-20 lg:mb-12"
        >
          <button 
            onClick={handleZoomOut}
            className="p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium shadow-sm"
            title="Zoom Out"
          >
            <ZoomOut size={18} />
            <span className="hidden sm:inline">Out</span>
          </button>
          
          <div className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl font-mono font-bold text-sm text-gray-800 min-w-[70px] text-center shadow-inner">
            {Math.round(scale * 100)}%
          </div>
          
          <button 
            onClick={handleZoomIn}
            className="p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium shadow-sm"
            title="Zoom In"
          >
            <ZoomIn size={18} />
            <span className="hidden sm:inline">In</span>
          </button>
          
          <button 
            onClick={handleReset}
            className="p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 text-gray-700 hover:text-gray-900 shadow-sm ml-2"
            title="Reset"
          >
            <RotateCcw size={18} />
          </button>
        </motion.div>

        {/* Chart Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200/30 bg-white/70 backdrop-blur-xl mb-12"
        >
          <div className="overflow-auto h-[70vh] lg:h-[80vh] xl:h-[85vh] p-8 lg:p-12 xl:p-16 bg-gradient-to-br from-slate-50/50 via-white/70 to-slate-50/30">
            <div 
              style={{ 
                transform: `scale(${scale})`, 
                transformOrigin: 'top center' 
              }} 
              className="flex flex-col items-center gap-8 lg:gap-12 xl:gap-16 min-h-full origin-center"
            >
              
              {/* Level 1: Ketua */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-3xl p-8 lg:p-12 xl:p-16 shadow-2xl border-4 border-white/40 text-center text-white hover:shadow-emerald-500/25 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-wider mb-4 bg-gradient-to-r from-white/20 bg-clip-text">
                  KETUA
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 leading-tight">
                  {pengurus[0].nama}
                </p>
                <p className="text-sm sm:text-base lg:text-lg opacity-90 leading-relaxed max-w-md">
                  {pengurus[0].deskripsi}
                </p>
              </motion.div>

              {/* Connector 1 */}
              <div className="w-2 h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-emerald-400 to-emerald-500 rounded-full shadow-lg"></div>

              {/* Level 2: Wakil Ketua */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-60 sm:w-68 md:w-72 lg:w-80 xl:w-[26rem] bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-7 lg:p-10 xl:p-14 shadow-2xl border-4 border-white/40 text-center text-white hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black uppercase tracking-wider mb-3 bg-gradient-to-r from-white/20 bg-clip-text">
                  WAKIL KETUA
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 leading-tight">
                  {pengurus[1].nama}
                </p>
                <p className="text-sm sm:text-base lg:text-lg opacity-90 leading-relaxed max-w-md">
                  {pengurus[1].deskripsi}
                </p>
              </motion.div>

              {/* Connector 2 */}
              <div className="w-2 h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full shadow-lg"></div>

              {/* Level 3: Sekretaris + Bendahara */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center w-full max-w-4xl"
              >
                <motion.div 
                  className="w-52 sm:w-56 md:w-60 lg:w-72 xl:w-80 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-3xl p-6 lg:p-8 xl:p-10 shadow-2xl border-4 border-white/40 text-center text-white hover:shadow-purple-500/25 hover:scale-[1.02] transition-all duration-500 cursor-pointer flex-1 max-w-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-wider mb-3 bg-gradient-to-r from-white/20 bg-clip-text">
                    SEKRETARIS
                  </h3>
                  <p className="text-lg font-bold mb-2 leading-tight">
                    {pengurus[2].nama}
                  </p>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {pengurus[2].deskripsi}
                  </p>
                </motion.div>

                <motion.div 
                  className="w-52 sm:w-56 md:w-60 lg:w-72 xl:w-80 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-6 lg:p-8 xl:p-10 shadow-2xl border-4 border-white/40 text-center text-white hover:shadow-orange-500/25 hover:scale-[1.02] transition-all duration-500 cursor-pointer flex-1 max-w-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-wider mb-3 bg-gradient-to-r from-white/20 bg-clip-text">
                    BENDahara
                  </h3>
                  <p className="text-lg font-bold mb-2 leading-tight">
                    {pengurus[3].nama}
                  </p>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {pengurus[3].deskripsi}
                  </p>
                </motion.div>
              </motion.div>

              {/* Connector 3 */}
              <div className="w-2 h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-purple-400 to-orange-500 rounded-full shadow-lg"></div>

              {/* Level 4: Kepala Bidang - Responsive Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full max-w-6xl justify-items-center"
              >
                {pengurus.slice(4).map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="w-44 sm:w-48 md:w-52 lg:w-64 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl p-6 shadow-xl border-4 border-white/30 text-center text-white hover:shadow-slate-400/50 hover:scale-105 transition-all duration-500 cursor-pointer group"
                    whileHover={{ y: -4 }}
                  >
                    <h4 className="text-sm sm:text-base lg:text-lg font-black uppercase tracking-wide mb-3 group-hover:text-slate-200 transition-colors">
                      {item.jabatan}
                    </h4>
                    <p className="text-sm font-semibold mb-2">{item.nama}</p>
                    <p className="text-xs opacity-90">{item.deskripsi}</p>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-gray-600 text-sm lg:text-base max-w-2xl mx-auto px-4"
        >
          {strukturData.keterangan}
        </motion.div>
      </div>
    </div>
  );
};

export default StrukturOrganisasiPage;

