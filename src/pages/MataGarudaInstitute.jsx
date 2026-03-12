import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpen, Users, Award, Calendar, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MataGarudaInstitute = () => {
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

  const programData = [
    {
      title: "MG Research Fellowship",
      desc: "Program penelitian kolaboratif alumni LPDP dalam bidang kebijakan publik, ekonomi, dan pembangunan daerah.",
      icon: <BookOpen size={32} />,
      color: "from-[#B8860B] to-[#D4A84B]",
      duration: "6 Bulan",
      target: "30 Peneliti"
    },
    {
      title: "MG Policy Forum",
      desc: "Forum diskusi kebijakan publik dengan menghadirkan pakar, akademisi, dan pembuat kebijakan.",
      icon: <Users size={32} />,
      color: "from-[#0D1B2A] to-[#1B263B]",
      duration: "Berkala",
      target: "100+ Peserta"
    },
    {
      title: "MG Mentorship Program",
      desc: "Program pendampingan karir dan leadership untuk junior LPDP dan mahasiswa berprestasi.",
      icon: <Award size={32} />,
      color: "from-[#B8860B] to-[#F4D03F]",
      duration: "12 Bulan",
      target: "50 Mentor-Mentees"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-urbanist">
      {/* Hero Section */}
      <section className="pt-[120px] pb-24 bg-gradient-to-r from-[#B8860B] to-[#D4A84B] text-white">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              Mata Garuda
              <br />
              <span className="text-5xl lg:text-7xl block text-white/90">Institute</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 opacity-90">
              Pusat unggulan program penelitian, forum kebijakan, dan pengembangan kapasitas alumni LPDP Sulawesi Utara
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/berita')}
                className="px-8 py-4 bg-white text-[#B8860B] font-black text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all uppercase tracking-wide"
              >
                Lihat Kegiatan Terbaru
                <ChevronRight className="inline ml-2" size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
          <motion.div 
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-black text-[#0D1B2A] uppercase tracking-tight mb-6"
            >
              Program Unggulan
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-[#B8860B] to-[#D4A84B] mx-auto rounded-full"
            />
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto mt-8"
            >
              Inisiatif strategis untuk pengembangan kapasitas, penelitian, dan kolaborasi alumni
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {programData.map((program, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/50 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 hover:bg-white"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: program.color }}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-black text-[#0D1B2A] mb-4 text-center group-hover:text-[#B8860B] transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center px-2">
                  {program.desc}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#B8860B]/10 p-3 rounded-xl text-center">
                    <Calendar size={20} className="mx-auto mb-1 text-[#B8860B]" />
                    <p className="font-bold text-sm">{program.duration}</p>
                  </div>
                  <div className="bg-[#B8860B]/10 p-3 rounded-xl text-center">
                    <Target size={20} className="mx-auto mb-1 text-[#B8860B]" />
                    <p className="font-bold text-sm">{program.target}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MataGarudaInstitute;

