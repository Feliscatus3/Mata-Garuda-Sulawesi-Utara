import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Calendar, User } from 'lucide-react';

const Berita6 = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 lg:pt-44 pb-24 font-urbanist bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
        <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
          <span className="hover:text-[#587F93] cursor-pointer" onClick={() => navigate('/')}>Beranda</span>
          <ChevronRight size={14} />
          <span className="hover:text-[#587F93] cursor-pointer" onClick={() => navigate('/berita')}>Berita</span>
          <ChevronRight size={14} />
          <span className="text-[#587F93]">Berita 6 - Template Baru MG Sulut</span>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:col-span-2 mb-16 lg:mb-0">
            <span className="inline-block bg-[#587F93]/10 text-[#587F93] px-4 py-1.5 rounded-full text-xs font-black uppercase mb-6">
              Kegiatan
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-8">
              Berita 6 - Template Siap Pakai
            </h1>

            <div className="flex flex-wrap gap-6 py-6 border-y border-gray-100 mb-12 text-sm font-bold text-gray-500 uppercase tracking-wide">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Tim MG Sulut</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>25 Okt 2024</span>
              </div>
            </div>

            <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
              <img src="/test1.png" alt="Berita 6" className="w-full h-[400px] lg:h-[500px] object-cover" />
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">
              <p className="mb-8 text-lg font-medium">Ini adalah template berita ke-6 untuk Mata Garuda Sulawesi Utara. Copy file ini untuk berita baru.</p>
              <p className="mb-8 text-lg font-medium">Edit bagian judul, foto, tanggal, dan paragraf sesuai kebutuhan kegiatan MG Sulut.</p>
              <p className="mb-8 text-lg font-medium">Semua styling sudah match dengan theme website: navbar, footer, responsive mobile-first.</p>
              <p className="mb-8 text-lg font-medium">Related news sidebar sudah link ke berita lain. Tinggal edit href di onClick.</p>
              <p className="mb-8 text-lg font-medium">Cara pakai: Save as Berita7.jsx → link dari BeritaTerbaru onClick={() => navigate('/berita/7')} → done!</p>
            </div>

            <div className="py-8 border-t border-gray-100 mb-12">
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-[#587F93]/10 text-[#587F93] rounded-full text-sm font-bold">#Template</span>
                <span className="px-4 py-2 bg-[#587F93]/10 text-[#587F93] rounded-full text-sm font-bold">#MGSulut</span>
              </div>
            </div>

            <button 
              onClick={() => navigate('/berita')}
              className="flex items-center gap-3 text-gray-900 font-black text-sm uppercase tracking-wider hover:text-[#587F93]"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#587F93] hover:text-white transition-all">
                <ArrowLeft size={18} />
              </div>
              Kembali ke Berita
            </button>
          </motion.article>

          <motion.aside initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tight">Berita Terkait</h3>
              <div className="space-y-4">
                <div onClick={() => navigate('/berita/1')} className="p-4 rounded-xl border border-gray-100 hover:border-[#587F93] hover:shadow-md cursor-pointer transition-all">
                  <div className="flex gap-3">
                    <img src="/program-1.webp" alt="" className="w-20 h-20 rounded-lg object-cover" />
                    <div>
                      <span className="text-xs font-bold text-[#587F93] uppercase block mb-1">Kegiatan</span>
                      <h4 className="font-bold line-clamp-2">MG Sulut Gelar Pengabdian Desa Bantik</h4>
                      <span className="text-xs text-gray-500">15 Okt 2024</span>
                    </div>
                  </div>
                </div>
                <div onClick={() => navigate('/berita/2')} className="p-4 rounded-xl border border-gray-100 hover:border-[#587F93] hover:shadow-md cursor-pointer transition-all">
                  <div className="flex gap-3">
                    <img src="/bendahara.jpeg" alt="" className="w-20 h-20 rounded-lg object-cover" />
                    <div>
                      <span className="text-xs font-bold text-[#587F93] uppercase block mb-1">Prestasi</span>
                      <h4 className="font-bold line-clamp-2">Capacity Building MG Institute Dimulai</h4>
                      <span className="text-xs text-gray-500">10 Okt 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default Berita6;
