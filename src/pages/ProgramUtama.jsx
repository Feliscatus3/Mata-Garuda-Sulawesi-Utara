import React from 'react';
import { motion } from 'framer-animation';

const ProgramUtama = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 }
    })
  };

  const programs = [
    {
      id: 1,
      title: "Leadership Forum",
      description: "Forum diskusi dan pengembangan kepemimpinan bagi generasi muda Sulawesi Utara untuk membangun visi dan keterampilan kepemimpinan yang visioner.",
      icon: "👥",
      color: "#0D1B2A"
    },
    {
      id: 2,
      title: "Mentoring Beasiswa LPDP",
      description: "Program mentoring intensif bagi calon penerima beasiswa LPDP dengan pendampingan dari alumni dan awardee berpengalaman.",
      icon: "🎓",
      color: "#B8860B"
    },
    {
      id: 3,
      title: "Pengabdian Masyarakat",
      description: "Program pemberdayaan masyarakat melalui pendidikan, kesehatan, dan pengembangan ekonomi berkelanjutan di berbagai wilayah Sulawesi Utara.",
      icon: "🤝",
      color: "#2E8B57"
    },
    {
      id: 4,
      title: "Kolaborasi Riset",
      description: "Wadah kolaborasi riset antar alumni LPDP dan mitra strategis untuk menghasilkan kajian kebijakan yang aplikatif bagi pembangunan daerah.",
      icon: "📊",
      color: "#4169E1"
    },
    {
      id: 5,
      title: "Seminar dan Diskusi Publik",
      description: "Rangkaian seminar dan diskusi publik dengan narasumber ahli di bidangnya untuk memperluas wawasan dan pengetahuan masyarakat.",
      icon: "🎤",
      color: "#8A2BE2"
    }
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
        {/* Section Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Program Utama</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Berbagai program strategis yang dirancang untuk mewujudkan visi dan misi 
            Mata Garuda Sulawesi Utara dalam membangun masa depan yang lebih baik.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div 
              key={program.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: program.color }}
                >
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {program.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span 
                  className="text-sm font-semibold"
                  style={{ color: program.color }}
                >
                  Selengkapnya
                </span>
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: program.color + '20', color: program.color }}
                >
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramUtama;