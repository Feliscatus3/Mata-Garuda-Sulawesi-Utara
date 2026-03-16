import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ZoomIn, ZoomOut, RotateCcw, User, Users, Building2, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StrukturOrganisasiPage = () => {
  const navigate = useNavigate();
  const [scale, setScale] = useState(1);
  const [activeLevel, setActiveLevel] = useState(null);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.5));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.6));
  const handleReset = () => {
    setScale(1);
    setActiveLevel(null);
  };

  const levels = [
    {
      id: 1,
      title: 'Dewan Pembina',
      icon: Users,
      color: 'from-[#B8860B] to-[#D4A84B]',
      members: ['Dr. H. Steven, M.Si'],
      desc: 'Alumni LPDP & Tokoh Masyarakat Sulawesi Utara',
      size: 'xl'
    },
    {
      id: 2,
      title: 'Dewan Pengarah',
      icon: Building2,
      color: 'from-[#0D1B2A] to-[#1a3a5c]',
      members: ['Prof. Dr. Ratna, M.Pd'],
      desc: 'Akademisi & Penasihat Strategis',
      size: 'lg'
    },
    {
      id: 3,
      title: 'Pengurus Inti',
      icon: User,
      color: 'from-[#B8860B] to-[#D4A84B]',
      members: ['Hikam Hulwanullah (Ketua Umum)'],
      desc: 'Kepemimpinan Utama MG Sulut 2026-2029',
      size: '2xl'
    },
    {
      id: 4,
      title: 'Pengurus Harian',
      icon: Users,
      color: 'from-white to-white',
      members: ['Ahmad Fauzi, S.Kom (Sekretaris)', 'Siti Aminah, S.E (Bendahara)'],
      desc: 'Administrasi & Keuangan',
      size: 'md'
    },
    {
      id: 5,
      title: 'Bidang Kerja',
      icon: Scale,
      color: 'from-white to-white',
      members: [
        'Budi Santoso, S.T (Program)',
        'Rinawati, S.Psi (Pengembangan)', 
        'M. Iqbal, S.H (Hubungan)'
      ],
      desc: 'Pelaksana Operasional',
      size: 'sm'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFDFD] to-gray-50 pt-20 sm:pt-24 md:pt-28 lg:pt-36 pb-16 font-urbanist">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">
            <span className="hover:text-[#B8860B] cursor-pointer transition-colors" onClick={() => navigate('/')}>Beranda</span>
            <ChevronRight size={12} />
            <span className="hover:text-[#B8860B] cursor-pointer transition-colors" onClick={() => navigate('/profil')}>Profil</span>
            <ChevronRight size={12} />
            <span className="text-[#B8860B] font-semibold">Struktur Organisasi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Struktur Organisasi
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#B8860B] to-[#D4A84B] rounded-full mb-6"></div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Struktur kepengurusan Mata Garuda Sulawesi Utara periode 2026-2029
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          
          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl text-center text-gray-700 text-sm sm:text-base leading-relaxed px-4"
          >
            Struktur organisasi ini menunjukkan hierarki kepengurusan MG Sulut yang terdiri dari Dewan Pembina, Dewan Pengarah, Pengurus Harian, dan Bidang-Bidang Kerja.
          </motion.div>

          {/* Interactive Org Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative w-full max-w-4xl"
          >
            {/* Controls */}
            <div className="absolute -top-12 right-0 flex gap-2 bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-lg border z-10 hidden lg:flex">
              <button 
                onClick={handleZoomOut}
                className="p-2 hover:bg-gray-100 rounded-xl text-gray-600 hover:text-gray-800 transition-all flex items-center gap-1 text-sm"
                title="Zoom Out"
              >
                <ZoomOut size={16} />
                <span>Out</span>
              </button>
              <div className="min-w-[60px] text-center px-2 py-1 bg-gray-100 rounded-xl text-xs font-mono font-bold text-gray-700">
                {Math.round(scale * 100)}%
              </div>
              <button 
                onClick={handleZoomIn}
                className="p-2 hover:bg-gray-100 rounded-xl text-gray-600 hover:text-gray-800 transition-all flex items-center gap-1 text-sm"
                title="Zoom In"
              >
                <ZoomIn size={16} />
                <span>In</span>
              </button>
              <button 
                onClick={handleReset}
                className="p-2 hover:bg-gray-100 rounded-xl text-gray-600 hover:text-gray-800 transition-all"
                title="Reset"
              >
                <RotateCcw size={16} />
              </button>
            </div>

            {/* Chart Container */}
            <div className="overflow-auto max-h-[70vh] sm:max-h-[75vh] lg:max-h-[85vh] rounded-3xl border-4 border-gray-200/50 shadow-2xl bg-gradient-to-b from-gray-50/70 to-white/80 backdrop-blur-xl">
              <div 
                style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
                className="flex flex-col items-center gap-4 sm:gap-6 p-6 sm:p-8 min-h-[70vh] sm:min-h-[75vh]"
              >
                {levels.map((level, index) => (
                  <motion.div
                    key={level.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`flex flex-col items-center w-full max-w-sm sm:max-w-md lg:max-w-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer group`}
                    onClick={() => setActiveLevel(level.id === activeLevel ? null : level.id)}
                  >
                    {/* Connector Line */}
                    {index > 0 && (
                      <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-[#B8860B] to-[#D4A84B] group-hover:h-12 sm:group-hover:h-16 transition-all duration-300"></div>
                    )}
                    
                    {/* Level Card */}
                    <div className={`relative bg-gradient-to-br ${level.color} rounded-3xl p-6 sm:p-8 text-center shadow-2xl border-4 border-white/30 group-hover:shadow-3xl transition-all duration-500 min-h-[120px] sm:min-h-[140px] flex flex-col justify-center ${level.size === 'xl' ? 'w-64 sm:w-72 lg:w-80' : level.size === '2xl' ? 'w-72 sm:w-80 lg:w-96' : level.size === 'lg' ? 'w-56 sm:w-64 lg:w-72' : 'w-48 sm:w-56 lg:w-64'}`}>
                      {/* Icon */}
                      <level.icon className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 text-white/80 group-hover:scale-110 transition-transform" />
                      
                      {/* Title */}
                      <h3 className="text-white font-black text-lg sm:text-xl lg:text-2xl uppercase tracking-wide mb-2 drop-shadow-lg">
                        {level.title}
                      </h3>
                      
                      {/* Members */}
                      <div className="space-y-1 mb-3">
                        {level.members.map((member, mIdx) => (
                          <p key={mIdx} className="text-white/95 font-semibold text-sm sm:text-base lg:text-lg leading-tight drop-shadow-md">
                            {member}
                          </p>
                        ))}
                      </div>
                      
                      {/* Description */}
                      <p className="text-white/80 text-xs sm:text-sm leading-relaxed drop-shadow-md">
                        {level.desc}
                      </p>
                      
                      {/* Active Indicator */}
                      {activeLevel === level.id && (
                        <motion.div 
                          layoutId="active-ring"
                          className="absolute inset-0 bg-white/20 rounded-3xl -m-1 backdrop-blur-sm flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <div className="w-3 h-3 bg-[#B8860B] rounded-full shadow-lg"></div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile Toolbar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-2 p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border w-full max-w-md lg:hidden mt-4"
          >
            <button onClick={handleZoomOut} className="flex-1 p-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all text-sm font-medium flex items-center justify-center gap-1">
              <ZoomOut size={18} />
              <span>Out</span>
            </button>
            <div className="w-16 p-3 text-center bg-gray-100 rounded-xl text-xs font-mono font-bold text-gray-700 min-w-[64px]">
              {Math.round(scale * 100)}%
            </div>
            <button onClick={handleZoomIn} className="flex-1 p-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all text-sm font-medium flex items-center justify-center gap-1">
              <ZoomIn size={18} />
              <span>In</span>
            </button>
            <button onClick={handleReset} className="p-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all w-12 flex items-center justify-center">
              <RotateCcw size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasiPage;

