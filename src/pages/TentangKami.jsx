import React from 'react';
import { motion } from 'framer-motion';

const TentangKami = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="tentang-kami" className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
        {/* Section Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mata Garuda merupakan komunitas penerima dan alumni beasiswa LPDP yang dibentuk 
            untuk memperkuat jejaring, pengembangan kepemimpinan, serta kontribusi bagi pembangunan Indonesia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sejarah Section */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#B8860B] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Sejarah</h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mata Garuda Sulawesi Utara didirikan sebagai wadah bagi para awardee dan alumni 
                LPDP di Sulawesi Utara untuk bersinergi dalam pengembangan potensi diri dan 
                kontribusi nyata bagi masyarakat.
              </p>
              <p>
                Dengan semangat "Sinergi Sam Ratulangi", kami berkomitmen untuk menjadi agen 
                perubahan yang mendorong kemajuan daerah melalui pendidikan, kepemimpinan, 
                dan pemberdayaan masyarakat.
              </p>
            </div>
          </motion.div>

          {/* Visi & Misi Section */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Visi */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0D1B2A] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Menjadi komunitas intelektual yang berkontribusi bagi kemajuan Sulawesi Utara dan Indonesia.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#B8860B] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Menguatkan jejaring alumni LPDP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mengembangkan kepemimpinan generasi muda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Berkontribusi pada pembangunan daerah</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mendorong kolaborasi lintas sektor</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;