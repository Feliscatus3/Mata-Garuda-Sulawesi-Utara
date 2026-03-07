import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, Download, Calendar, Info, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pendaftaran = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

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
            <span className="hover:text-[#B8860B] cursor-pointer" onClick={() => navigate('/')}>Beranda</span>
            <ChevronRight size={14} />
            <span className="text-[#B8860B]">Keanggotaan</span>
          </div>
          <h1 className="text-[40px] lg:text-[56px] font-[900] text-black leading-none tracking-tight">
            Daftar <span className="text-[#B8860B]">Anggota</span>
          </h1>
          <div className="w-20 h-1.5 bg-[#B8860B] mt-6 rounded-full"></div>
          <p className="mt-8 text-gray-500 max-w-3xl font-medium text-lg leading-relaxed">
            Bergabung dengan Mata Garuda Sulawesi Utara! Daftarkan diri Anda sebagai anggota untuk mengikuti program kerja, networking, dan pengembangan karir.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-12 lg:gap-16"
        >
          
          {/* KOLOM KIRI: INFO & BENEFIT */}
          <motion.div variants={itemVariants} className="w-full lg:w-5/12 space-y-8">
            
            {/* Benefit Card */}
            <div className="bg-white p-8 rounded-[32px] shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-[900] text-gray-900 mb-6">Keuntungan Menjadi Anggota</h3>
              <ul className="space-y-4">
                {[
                  'Akses ke program mentorship karir',
                  'Networking dengan alumni LPDP se-Sulut',
                  'Partisipasi dalam program pengabdian masyarakat',
                  'Pelatihan kapasitas dan pengembangan diri',
                  'Informasi lowongan kerja eksklusif'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#B8860B]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#B8860B] text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-600 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-[#0D1B2A] p-8 rounded-[32px] shadow-2xl text-white">
              <h3 className="text-xl font-[900] mb-6">Syarat Keanggotaan</h3>
              <ul className="space-y-3">
                {[
                  'Alumni LPDP Sulawesi Utara',
                  'Penerima aktifbeasiswa LPDP',
                  'atau Partisipan program LPDP'
                ].map((syarat, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#B8860B] rounded-full"></div>
                    <span className="text-white/80">{syarat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>

          {/* KOLOM KANAN: FORM LINK */}
          <motion.div variants={itemVariants} className="w-full lg:w-7/12 space-y-8">
            
            {/* Info Box */}
            <div className="bg-[#B8860B]/5 border-l-4 border-[#B8860B] p-6 rounded-r-xl">
              <div className="flex items-start gap-4">
                <Info className="text-[#B8860B] shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Cara Mendaftar</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Silakan isi formulir keanggotaan melalui link di bawah. Tim kami akan memproses aplikasi Anda dalam waktu 3-5 hari kerja.
                  </p>
                </div>
              </div>
            </div>

            {/* Jadwal Info Box */}
            <div className="bg-[#0D1B2A]/5 border-l-4 border-[#0D1B2A] p-6 rounded-r-xl">
              <div className="flex items-start gap-4">
                <Calendar className="text-[#0D1B2A] shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Jam Operasional Sekretariat</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Senin - Jumat: 08:00 - 17:00 WITA<br/>
                    Sabtu: 09:00 - 14:00 WITA<br/>
                    Minggu: Tutup
                  </p>
                </div>
              </div>
            </div>

            {/* Link Pendaftaran Online */}
            <a 
              href="https://forms.google.com/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-[#B8860B] to-[#D4A84B] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Formulir Pendaftaran Online</h3>
                  <p className="text-white/80 text-sm">Klik untuk mengakses formulir keanggotaan</p>
                </div>
                <ExternalLink size={32} />
              </div>
            </a>

            {/* Contact Info */}
            <div className="bg-white p-8 rounded-[32px] shadow-xl border border-gray-100">
              <h3 className="text-xl font-[900] text-gray-900 mb-6">Hubungi Kami</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#B8860B]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#B8860B]">📱</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">WhatsApp</p>
                    <p className="font-bold text-gray-800">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#B8860B]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#B8860B]">✉️</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Email</p>
                    <p className="font-bold text-gray-800">info@matagarudasulut.org</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pendaftaran;
