import React from 'react';
import { ChevronRight } from 'lucide-react'; 
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProfilOrganisasi = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-32 lg:pt-44 pb-24 font-urbanist bg-white min-h-screen overflow-x-hidden"
    >
      
      {/* 1. HEADER TITLE */}
      <motion.div variants={itemVariants} className="max-w-[1440px] mx-auto px-5 lg:px-[60px] mb-12">
        <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
          <span className="hover:text-[#B8860B] cursor-pointer" onClick={() => navigate('/')}>Beranda</span>
          <ChevronRight size={14} />
          <span className="text-[#B8860B]">Profil Organisasi</span>
        </div>
        <h1 className="text-[40px] lg:text-[56px] font-[900] text-black leading-none tracking-tight">
          Profil <span className="text-[#B8860B]">Organisasi</span>
        </h1>
        <div className="w-20 h-1.5 bg-[#B8860B] mt-6 rounded-full"></div>
      </motion.div>

      {/* 2. HERO SECTION */}
      <motion.section variants={itemVariants} className="relative w-full mb-24 lg:mb-40">
        <div className="w-full h-[350px] lg:h-[600px] overflow-hidden relative z-0 bg-gray-100 rounded-br-[60px] lg:rounded-br-[150px]">
          <img src="/gedung-smapas.webp" alt="Mata Garuda Sulawesi Utara" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/80 to-transparent"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="max-w-[1440px] mx-auto h-full px-5 lg:px-[60px] relative">
            <div className="absolute -bottom-16 lg:-bottom-24 left-5 lg:left-[60px] w-[90%] lg:w-[51%] bg-[#0D1B2A] text-white p-8 lg:p-14 rounded-br-[40px] lg:rounded-br-[100px] z-10 pointer-events-auto antialiased">
              <h2 className="text-[22px] lg:text-[32px] font-[800] mb-4 lg:mb-6 uppercase tracking-wider leading-tight">Mata Garuda Sulawesi Utara</h2>
              <p className="text-[14px] lg:text-[16px] leading-relaxed opacity-95 text-justify font-medium">
                Wadah alumni dan penerima aktif beasiswa LPDP di Sulawesi Utara dengan visi "Sinergi Sam Ratulangi" untuk membangun daerah melalui pengabdian dan kolaborasi.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. SECTION TENTANG */}
      <motion.div variants={itemVariants} className="max-w-[1140px] mx-auto px-5 lg:px-0 relative z-20 mt-32 lg:mt-56">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16 min-h-[376px]">
          
          {/* Column: Foto Ketua */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[864/1184] bg-[#0D1B2A] rounded-[40px] shadow-2xl flex-shrink-0 border-[12px] border-white overflow-hidden group">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
              <img 
                src="/kepala-sekolah.webp" 
                alt="Hikam Hulwanullah - Ketua MG Sulut" 
                className="absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute top-8 left-0 bg-[#B8860B] text-white px-6 py-2 rounded-r-full shadow-lg z-20">
                <span className="text-[14px] font-black uppercase tracking-widest">KETUA</span>
              </div>
            </div>
          </div>

          {/* Column: Sambutan */}
          <div className="w-full lg:w-7/12 flex flex-col items-start">
            <span className="text-[#B8860B] text-[120px] font-serif leading-none h-[60px] opacity-30">"</span>
            <p className="text-sm lg:text-base text-[#334155] mb-10 leading-relaxed font-medium">
              Mata Garuda Sulawesi Utara hadir sebagai wadah alumni dan penerima aktif beasiswa LPDP di Sulawesi Utara. Kami berfokus pada pengabdian masyarakat, kebijakan publik, dan pengembangan daerah melalui berbagai program kerja yang kreatif dan berdampak.
            </p>
            <p className="text-sm lg:text-base text-[#334155] mb-10 leading-relaxed font-medium">
              Dengan visi "Sinergi Sam Ratulangi", kami mengajak seluruh alumni dan awardee LPDP di Sulawesi Utara untuk bersatu dan berkontribusi nyata bagi pembangunan daerah tercinta.
            </p>
            <button onClick={() => navigate('/struktur-organisasi')} className="bg-[#0D1B2A] hover:bg-[#1a3a5c] text-white px-6 py-2.5 rounded-md font-bold flex items-center gap-4 active:scale-95 text-[14px] transition-all">
              Lihat Struktur Organisasi
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* 4. VISI MISI SECTION */}
      <motion.section id="visi-misi" variants={itemVariants} className="relative w-full pt-20 lg:pt-32 pb-24 lg:pb-80 flex flex-col items-center scroll-mt-32">
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 lg:px-[60px]">
            <div className="relative w-full flex flex-col lg:block">
                <div className="w-full h-[250px] lg:h-[550px] overflow-hidden rounded-2xl lg:rounded-none">
                  <img src="/gedung-smapas.webp" alt="Mata Garuda Sulawesi Utara" className="w-full h-full object-cover" />
                </div>
                <div className="mt-8 lg:mt-0 lg:absolute lg:bottom-12 lg:left-0 lg:max-w-[450px] lg:bg-[#0D1B2A]/85 lg:backdrop-blur-md lg:text-white p-0 lg:p-10 rounded-xl lg:z-30">
                  <h3 className="text-[24px] lg:text-[42px] font-[900] mb-3 leading-none tracking-tighter uppercase text-[#B8860B] lg:text-white">VISI</h3>
                  <p className="text-[14px] lg:text-[16px] leading-relaxed font-medium tracking-tight text-gray-700 lg:text-white lg:opacity-95">"Sinergi Sam Ratulangi" - Membangun collaboration dan peningkatan partisipasi aktif anggota untuk kemajuan Sulawesi Utara.</p>
                </div>
                <div className="mt-10 lg:mt-0 lg:absolute lg:bottom-0 lg:right-0 lg:translate-y-full lg:w-[63%] lg:bg-[#B8860B] lg:text-white p-0 lg:p-12 lg:z-40 lg:rounded-xl lg:rounded-tr-none antialiased">
                   <h3 className="text-[24px] lg:text-[36px] font-[900] mb-6 tracking-tight uppercase text-white lg:text-white">MISI</h3>
                   <ul className="flex flex-col gap-4 text-[13px] lg:text-[16px] font-medium leading-relaxed tracking-tight text-gray-700 lg:text-white lg:opacity-95">
                    <li className="flex gap-4 items-start"><span className="flex-shrink-0 font-bold text-white">1.</span><span>Menjadi katalisator kontribusi ilmu dan keahlian alumni LPDP untuk pembangunan daerah.</span></li>
                    <li className="flex gap-4 items-start"><span className="flex-shrink-0 font-bold text-white">2.</span><span>Membangun jejaring dan kolaborasi antar alumni, pemerintah, dan sektor swasta.</span></li>
                    <li className="flex gap-4 items-start"><span className="flex-shrink-0 font-bold text-white">3.</span><span>Mengadakan program pengabdian masyarakat dan pemberdayaan daerah.</span></li>
                  </ul>
                </div>
            </div>
        </div>
        <div className="hidden lg:block w-full h-[450px] relative lg:-mt-[250px] z-10">
          <div className="absolute inset-0 bg-[#0D1B2A] flex items-end justify-center pb-12" style={{ clipPath: 'polygon(0% 45%, 33.3% 45%, 33.3% 10%, 100% 10%, 100% 100%, 0% 100%)' }}></div>
        </div>
      </motion.section>

      {/* 5. PROGRAM KERJA SECTION */}
      <section className="py-24 bg-white font-urbanist border-t border-gray-100 -mt-10 lg:-mt-20 relative z-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="w-full lg:w-1/3 flex flex-col items-start pt-4">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-[2px] bg-[#B8860B]"></div>
                 <span className="text-[#B8860B] font-bold uppercase tracking-widest text-sm">Program Kerja</span>
              </div>
              <h2 className="text-[36px] lg:text-[48px] font-[900] text-black uppercase leading-[1.1] mb-6 tracking-tight">Program <br/> Unggulan</h2>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-10 max-w-md">Kami menjalankan berbagai program kerja untuk memberikan dampak nyata bagi Sulawesi Utara.</p>
              <button onClick={() => navigate('/program')} className="group flex items-center gap-4 text-black font-[800] text-[14px] uppercase tracking-wider hover:text-[#B8860B] transition-colors">
                <span className="border-b-2 border-black group-hover:border-[#B8860B] pb-1 transition-colors">Lihat Semua Program</span>
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="group relative h-[280px] lg:h-[360px] overflow-hidden cursor-pointer bg-gray-100 shadow-lg">
                <img src="/program-1.webp" alt="MG Institute" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/40 to-transparent transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center">
                  <h3 className="text-white text-2xl font-[900] uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Mata Garuda Institute</h3>
                  <p className="text-white/90 text-sm leading-relaxed max-w-[250px] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Riset dan publikasi kebijakan untuk pembangunan daerah.</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="group relative h-[280px] lg:h-[360px] overflow-hidden cursor-pointer bg-gray-100 shadow-lg">
                <img src="/basket1.webp" alt="Capacity Building" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#B8860B]/90 via-[#B8860B]/40 to-transparent transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center">
                  <h3 className="text-white text-2xl font-[900] uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Capacity Building</h3>
                  <p className="text-white/90 text-sm leading-relaxed max-w-[250px] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Mentorship karir dan pelatihan untuk pengembangan anggota.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default ProfilOrganisasi;
