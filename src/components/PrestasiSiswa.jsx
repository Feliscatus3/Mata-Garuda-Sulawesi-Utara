import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Trophy, Medal, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const PrestasiSiswa = () => {
  // Static data untuk Kegiatan & Prestasi MG Sulut
  const prestasiData = [
    {
      _id: 1,
      tingkatPrestasi: "Nasional",
      judul: "Forum Alumni LPDP 2025",
      namaSiswa: "Mata Garuda Sulut",
      deskripsi: "Menjadi narasumber dalam Forum Alumni LPDP Nasional dengan tema Pembangunan Daerah.",
      icon: <Trophy size={40} className="text-[#B8860B]" />
    },
    {
      _id: 2,
      tingkatPrestasi: "Daerah",
      judul: "Pengabdian Desa Bantik",
      namaSiswa: "Tim MG Sulut",
      deskripsi: "Program pengabdian masyarakat di Desa Bantik dengan fokus pada pendidikan dan pemberdayaan.",
      icon: <Medal size={40} className="text-[#B8860B]" />
    },
    {
      _id: 3,
      tingkatPrestasi: "Nasional",
      judul: "MGPreneur Award 2024",
      namaSiswa: "Mata Garuda Sulut",
      deskripsi: "Penganugerahan program kewirausahaan terbaik bagi alumni LPDP di Sulawesi Utara.",
      icon: <Star size={40} className="text-[#B8860B]" />
    },
    {
      _id: 4,
      tingkatPrestasi: "Daerah",
      judul: "Seminar Kebijakan Publik",
      namaSiswa: "MG Institute",
      deskripsi: "Mengadakan seminar kebijakan publik bersama pemangku kepentingan di Sulawesi Utara.",
      icon: <Trophy size={40} className="text-[#B8860B]" />
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] font-urbanist overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[100px]">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-6 mb-2">
            <span className="text-[#888888] font-[900] tracking-[0.3em] uppercase text-[18px] lg:text-[20px] whitespace-nowrap">
              ACHIEVEMENT
            </span>
            <div className="w-24 lg:w-32 h-[3px] bg-[#BCBCBC] rounded-full" />
          </div>
          
          <h2 className="text-[28px] lg:text-[36px] font-[900] text-black uppercase tracking-tight -ml-[1px] lg:-ml-[2px]">
            Program & Kegiatan
          </h2>
        </div>

        {/* --- SLIDER PRESTASI --- */}
        <div className="relative prestasi-slider-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            speed={600}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-24"
          >
            {prestasiData.map((item) => (
              <SwiperSlide key={item._id} className="h-auto flex">
                <div className="bg-white rounded-[40px] overflow-hidden flex flex-col flex-1 border border-[#F5F5F5] shadow-2xl drop-shadow-[0_20px_20px_rgba(0,0,0,0.05)] mb-10">
                  
                  {/* Image Area */}
                  <div className="relative h-[200px] bg-[#0D1B2A] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] to-[#1a3a5c] opacity-90" />
                    <div className="relative z-10 text-center p-6">
                      <div className="flex justify-center mb-4">
                        {item.icon}
                      </div>
                      <span className="text-[12px] font-black text-[#B8860B] uppercase tracking-widest px-3 py-1 border border-[#B8860B] rounded-full">
                        {item.tingkatPrestasi}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-10 text-center flex flex-col flex-grow items-center">
                    <h3 className="text-[22px] lg:text-[24px] font-[900] text-[#1A1A1A] mb-4 uppercase tracking-tight line-clamp-2">
                      {item.judul}
                    </h3>
                    <p className="text-[#666666] font-semibold text-[15px] mb-4">
                      {item.namaSiswa}
                    </p>
                    <p className="text-[#666666] font-medium leading-relaxed text-[14px] opacity-80 max-w-[300px] line-clamp-3">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .prestasi-slider-container .swiper-pagination {
              bottom: 0px !important;
            }
            .prestasi-slider-container .swiper-pagination-bullet {
              width: 14px;
              height: 14px;
              background: #B8860B;
              opacity: 0.2;
              margin: 0 8px !important;
              transition: all 0.3s ease;
            }
            .prestasi-slider-container .swiper-pagination-bullet-active {
              background: #B8860B;
              opacity: 1;
              width: 14px;
              border-radius: 50%;
            }
          `}</style>
        </div>

      </div>
    </section>
  );
};

export default PrestasiSiswa;
