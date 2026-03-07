import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Sambutan = () => {
  const navigate = useNavigate();

  // Konfigurasi animasi dasar agar konsisten
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section id="tentang" className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] font-urbanist scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px]">
        
        <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 lg:p-14 rounded-3xl bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100">
          
          {/* SISI KIRI: Foto Ketua Mata Garuda Sulut */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="absolute w-4/5 h-4/5 bg-[#B8860B]/10 blur-[100px] rounded-full -z-10" />
            
            <motion.div 
              {...fadeInUp}
              className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-white bg-gray-50"
            >
              <img 
                src="/kepala-sekolah.webp" 
                alt="Hikam Hulwanullah" 
                className="w-full h-auto object-cover max-h-[480px] hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://via.placeholder.com/600x800?text=Foto+Ketua+MG+Sulut"; }}
              />
            </motion.div>
          </div>

          {/* SISI KANAN: Konten Teks Sambutan */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="w-full lg:w-1/2 flex flex-col justify-center text-left"
          >
            <h2 className="text-[30px] lg:text-[42px] font-[900] text-gray-900 leading-tight mb-2 capitalize tracking-tight">
              Hikam Hulwanullah
            </h2>
            
            <div className="w-16 h-1.5 bg-[#B8860B] mb-6 rounded-full" />
            
            <p className="text-[#B8860B] font-bold text-sm lg:text-base uppercase tracking-normal mb-8">
              Ketua Mata Garuda Sulawesi Utara Periode 2026-2029
            </p>

            <div className="space-y-5">
              <p className="text-gray-500 text-sm lg:text-base leading-relaxed italic">
                "Assalamu'alaikum Warahmatullahi Wabarakatuh,"
              </p>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                Selamat datang di website resmi Mata Garuda Sulawesi Utara. Organisasi ini merupakan wadah alumni dan penerima aktif奖学金 LPDP di Sulawesi Utara yang berfokus pada pengabdian, kolaborasi, dan kontribusi nyata bagi pembangunan daerah.
              </p>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                Kami mengajak seluruh alumni dan awardee LPDP di Sulawesi Utara untuk bersatu dalam visi "Sinergi Sam Ratulangi". Mari bersama-sama memberikan dampak positif bagi daerah dan bangsa melalui berbagai program kerja yang kreatif, progresif, dan inklusif.
              </p>
            </div>

            <button 
              onClick={() => {
                navigate('/profil');
                window.scrollTo(0, 0);
              }}
              className="mt-10 group flex items-center gap-3 text-gray-900 font-[800] hover:text-[#B8860B] transition-all w-fit"
            >
              <span className="border-b-2 border-gray-900 group-hover:border-[#B8860B] pb-1">
                Pelajari Lebih Lanjut
              </span>
              <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Sambutan;
