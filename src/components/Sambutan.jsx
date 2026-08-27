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
                src="/bang-hikam.webp" 
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
              Puji syukur kita panjatkan ke hadirat Allah SWT atas segala rahmat dan
              karunia-Nya. Dengan penuh rasa syukur dan tanggung jawab, saya,{" "}
              <strong>Hikam Hulwanullah</strong>, mengemban amanah sebagai{" "}
              <strong>Ketua Mata Garuda Sulawesi Utara Periode 2026–2029</strong>.
            </p>

            <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
              Amanah ini bukan sekadar sebuah jabatan, melainkan tanggung jawab untuk
              bersama-sama membangun ruang kolaborasi, memperkuat jejaring, serta
              menghadirkan kontribusi nyata bagi masyarakat Sulawesi Utara dan Indonesia.
            </p>

            <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
              Mata Garuda merupakan rumah bagi para penerima beasiswa dan alumni LPDP
              yang memiliki latar belakang, keahlian, serta pengalaman yang beragam.
              Keragaman tersebut harus menjadi kekuatan untuk membangun kolaborasi lintas
              sektor, lintas keilmuan, dan lintas generasi.
            </p>

            <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
              Ke depan, kami ingin menjadikan Mata Garuda Sulawesi Utara sebagai organisasi
              yang <strong>inklusif, kolaboratif, profesional, dan berdampak</strong>.
              Bukan hanya menjadi wadah silaturahmi, tetapi juga ruang untuk melahirkan
              gagasan, mempertemukan potensi, serta menghadirkan program yang memberikan
              manfaat nyata bagi masyarakat dan pembangunan daerah.
            </p>

            <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
              Saya mengajak seluruh keluarga besar Mata Garuda Sulawesi Utara untuk
              berjalan bersama. Tidak ada satu orang yang dapat membangun organisasi
              seorang diri. Mari kita jadikan periode 2026–2029 sebagai momentum untuk
              memperkuat solidaritas, memperluas kolaborasi, dan meningkatkan kontribusi
              para awardee serta alumni LPDP bagi Sulawesi Utara.
            </p>

            <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
              Dari Sulawesi Utara, kita berkarya. Dari Indonesia, kita mengabdi. Untuk
              Indonesia, kita memberi dampak.
            </p>

            <p className="text-gray-500 text-sm lg:text-base leading-relaxed italic">
              "Wassalamu'alaikum Warahmatullahi Wabarakatuh."
            </p>

            <div className="pt-2">
              <p className="font-semibold text-gray-800 text-sm lg:text-base">
                Hikam Hulwanullah
              </p>
              <p className="text-gray-500 text-sm">
                Ketua Mata Garuda Sulawesi Utara
              </p>
              <p className="text-gray-500 text-sm">
                Periode 2026–2029
              </p>
            </div>
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
