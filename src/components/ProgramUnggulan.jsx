import React from 'react';
import { motion } from 'framer-motion';

const ProgramUnggulan = () => {
  const programData = [
    {
      id: 1,
      title: "Kolaborasi Lintas Sektor",
      desc: " Membangun kemitraan strategis dengan pemerintah daerah dan instansi untuk peningkatan kualitas SDM.",
      img: "/program-1.webp", 
    },
    {
      id: 2,
      title: "Peningkatan Partisipasi Anggota",
      desc: " Mengoptimalkan peran aktif para alumni dan awardee LPDP dalam bidang kebijakan publik, riset, serta kewirausahaan.",
      img: "/program-2.webp",
    },
    {
      id: 3,
      title: "Ruang Inklusif Alumni",
      desc: "Menciptakan wadah yang mendukung pertukaran ide, pengalaman, dan kolaborasi antar alumni LPDP untuk pengembangan diri dan kontribusi sosial.",
      img: "/program-3.webp",
    },
    {
      id: 4,
      title: "Pengembangan Kapasitas",
      desc: "Menyelenggarakan pelatihan, workshop, dan program pengembangan diri untuk meningkatkan kompetensi alumni LPDP dalam menghadapi tantangan global.",
      img: "/program-4.webp",
    },
  ];

  return (
    <section className="py-24 bg-white font-urbanist overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[100px]">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-6 mb-2">
            <span className="text-[#888888] font-[900] tracking-[0.3em] uppercase text-[18px] lg:text-[20px] whitespace-nowrap">
              Our Program
            </span>
            <div className="w-24 lg:w-32 h-[3px] bg-[#BCBCBC] rounded-full" />
          </div>
          
          <h2 className="text-[28px] lg:text-[36px] font-[900] text-black uppercase tracking-tight -ml-[1px] lg:-ml-[2px]">
            Program Unggulan
          </h2>
        </div>

        {/* --- GRID KARTU --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[10px] overflow-hidden flex flex-col h-full border border-gray-100 shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-[250px] overflow-hidden group">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=MG+Sulut+Program'; }}
                />
              </div>

              {/* Content Layer */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="bg-[#B8860B] text-white w-10 h-7 flex items-center justify-center font-bold text-sm mb-4">
                  #{item.id}
                </div>

                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#334155] mb-4 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-[#64748b] font-normal leading-relaxed text-[15px] lg:text-[16px]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramUnggulan;
