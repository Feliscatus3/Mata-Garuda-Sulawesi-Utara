import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Trophy, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Program = () => {
  const navigate = useNavigate();


  const [filter, setFilter] = useState('Semua');

  const categories = ['Semua', 'Pengabdian', 'Pendidikan', 'Pengembangan', 'Prestasi'];

const programData = [
    { id: 1, nama: "Pengabdian Desa Bantik", kategori: "Pengabdian", img: "/program-1.webp", desc: "Program pengabdian masyarakat di Desa Bantik dengan fokus pada pendidikan dan pemberdayaan komunitas Sulawesi Utara." },
    { id: 2, nama: "Capacity Building", kategori: "Pengembangan", img: "/bendahara.jpeg", desc: "Mentorship karir, pelatihan, dan diskusi industri untuk mengembangkan potensi anggota MG Sulut." },
    { id: 3, nama: "Prestasi Anggota", kategori: "Prestasi", img: "/tas1.jpeg", desc: "Kegiatan kompetisi dan pencapaian luar biasa anggota Mata Garuda Sulawesi Utara." },
    { id: 4, nama: "MG Institute", kategori: "Pendidikan", img: "/public/program-1.webp", desc: "Pusat pembelajaran dan riset kebijakan untuk kemajuan Sulawesi Utara." },
    { id: 5, nama: "Riset Kebijakan", kategori: "Pengembangan", img: "/greenhouse.webp", desc: "Penelitian dan analisis kebijakan untuk isu strategis daerah." },
    { id: 6, nama: "Tim MG Sulut", kategori: "Pengabdian", img: "/basket1.webp", desc: "Program kolaborasi tim untuk inisiatif sosial dan pengembangan." },
    { id: 7, nama: "Pendidikan Karakter", kategori: "Pendidikan", img: "/berkarakter.webp", desc: "Pembentukan karakter kepemimpinan dan nasionalisme MG Sulut." },
    { id: 8, nama: "Diskusi Industri", kategori: "Prestasi", img: "/unggul.webp", desc: "Forum diskusi dengan pakar industri untuk wawasan karir anggota." },
  ];

  const filteredData = filter === 'Semua' 
    ? programData 
    : programData.filter(item => item.kategori === filter);

  return (
    <div className="pt-32 lg:pt-44 pb-24 font-urbanist bg-[#FDFDFD] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
        
        {/* Header & Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
            <span className="hover:text-[#587F93] cursor-pointer" onClick={() => navigate('/')}>Beranda</span>
            <ChevronRight size={14} />
            <span className="text-[#587F93]">Program</span>
          </div>
<h1 className="text-[40px] lg:text-[56px] font-[900] text-black leading-none tracking-tight">
            Program <span className="text-[#587F93]">Kerja</span>
          </h1>
          <div className="w-20 h-1.5 bg-[#587F93] mt-6 rounded-full"></div>
<p className="mt-8 text-gray-500 max-w-2xl font-medium text-lg">
            Berbagai program strategis Mata Garuda Sulawesi Utara untuk pengembangan anggota dan dampak sosial di Sulawesi Utara.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 uppercase tracking-wider border-2 ${
                filter === cat 
                ? 'bg-[#587F93] text-white border-[#587F93] shadow-lg shadow-[#587F93]/20' 
                : 'bg-white text-gray-400 border-gray-100 hover:border-[#587F93] hover:text-[#587F93]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ekskul Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
        {filteredData.map((item) => (
              <motion.div
                id={item.kategori.toLowerCase()}
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 hover:shadow-[#587F93]/20 h-full transition-all duration-300 scroll-mt-20"
              >
                {/* Image Container - Landscape Orientation */}
                <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
                <img 
                    src={item.img} 
                    alt={item.nama} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=MG+Sulut+Program'}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#587F93] text-white text-[10px] font-black uppercase tracking-widest">
                      {item.kategori}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-[900] uppercase tracking-tight mb-3 text-gray-900 group-hover:text-[#587F93] transition-colors">
                    {item.nama}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6 line-clamp-3">
                    {item.desc}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-50 flex gap-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tighter text-gray-400">
                      <Users size={14} className="text-[#587F93]" /> 50+ Anggota
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tighter text-gray-400">
                      <Trophy size={14} className="text-[#587F93]" /> 10+ Prestasi
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400 font-bold text-lg uppercase tracking-widest">Data tidak ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Program;