import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimoni = () => {
  // Static data untuk Alumni Mata Garuda Sulut
  const alumniData = [
  {
    _id: 1,
    namaAlumni: "Dr. Christian Tumewu, M.Si.",
    universitas: "Universitas Sam Ratulangi & Wageningen University",
    pekerjaanSaatIni: "Dosen & Peneliti Kelautan",
    testimoni: "Mata Garuda Sulut menjadi wadah kolaborasi nyata bagi saya untuk membagikan ilmu riset kelautan demi kemajuan sektor maritim di Bumi Nyiur Melambai."
  },
  {
    _id: 2,
    namaAlumni: "Gabriella Mamahit, S.Psi., M.Sc.",
    universitas: "The University of Melbourne",
    pekerjaanSaatIni: "HR Consultant & Founder Komunitas Edukasi",
    testimoni: "Jejaring alumni Mata Garuda Sulut sangat suportif. Melalui wadah ini, saya dapat mendorong pengembangan SDM pemuda lokal serta aktif dalam kegiatan pengabdian masyarakat di Manado."
  },
  {
    _id: 3,
    namaAlumni: "Eko Prasetyo Utomo, S.T., M.Eng.",
    universitas: "Institut Teknologi Bandung",
    pekerjaanSaatIni: "CEO Startup Agri-Tech Sulut",
    testimoni: "Dukungan ekosistem Mata Garuda Sulut memberikan saya dorongan besar untuk kembali ke Sulut, memanfaatkan teknologi demi memodernisasi rantai pasok komoditas lokal."
  }
];

  return (
    <section className="py-24 bg-white font-urbanist overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[100px]">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-start mb-20">
          <div className="flex items-center gap-6 mb-2">
            <span className="text-[#888888] font-[900] tracking-[0.3em] uppercase text-[18px] lg:text-[20px] whitespace-nowrap">
              TESTIMONI
            </span>
            <div className="w-24 lg:w-32 h-[3px] bg-[#BCBCBC] rounded-full" />
          </div>
          <h2 className="text-[28px] lg:text-[36px] font-[900] text-black uppercase tracking-tight -ml-[2px]">
            Alumni Mata Garuda Sulut
          </h2>
        </div>

        {/* --- SLIDER TESTIMONI --- */}
        <div className="relative testimoni-slider-container lg:px-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={60}
            slidesPerView={1}
            speed={800}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 
              1024: { slidesPerView: 2 } 
            }}
            className="!pb-28 !pt-16" 
          >
            {alumniData.map((item) => (
              <SwiperSlide key={item._id} className="h-auto pb-10">
                <div className="relative bg-white rounded-[15px] p-10 lg:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.12)] drop-shadow-[0_10px_10px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full ml-10 mr-4 transition-all duration-300 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
                  
                  {/* Ikon Kutipan Besar */}
                  <div className="absolute top-8 right-8 text-[#B8860B] opacity-20">
                    <Quote size={80} className="fill-current" />
                  </div>

                  {/* IDENTITAS */}
                  <div className="mb-8">
                    <h3 className="text-[20px] lg:text-[24px] font-[900] text-[#1A1A1A] leading-tight uppercase">
                      {item.namaAlumni}
                    </h3>
                    <p className="text-[#666666] font-semibold text-[14px] lg:text-[16px]">
                      {item.universitas}
                    </p>
                    <p className="text-[#B8860B] font-bold text-[12px] lg:text-[14px] mt-1">
                      {item.pekerjaanSaatIni}
                    </p>
                  </div>

                  {/* PESAN */}
                  <div className="relative flex-grow">
                    <p className="text-[#1A1A1A] font-medium italic leading-relaxed text-[15px] lg:text-[17px]">
                      "{item.testimoni}"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM PAGINATION */}
          <style jsx global>{`
            .testimoni-slider-container .swiper-pagination {
              bottom: 10px !important;
            }
            .testimoni-slider-container .swiper-pagination-bullet {
              width: 14px;
              height: 14px;
              background: #B8860B;
              opacity: 0.2;
              margin: 0 8px !important;
              transition: all 0.3s ease;
            }
            .testimoni-slider-container .swiper-pagination-bullet-active {
              background: #B8860B !important;
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

export default Testimoni;
