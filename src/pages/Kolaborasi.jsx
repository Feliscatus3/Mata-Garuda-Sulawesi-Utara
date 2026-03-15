import React from 'react';
import { motion } from 'framer-motion';

const Kolaborasi = () => {
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

  const mitraStrategis = [
    {
      id: 1,
      nama: "Universitas Sam Ratulangi",
      deskripsi: "Kerjasama dalam bidang pendidikan, penelitian, dan pengabdian masyarakat.",
      logo: "/logo-smapas.svg",
      jenis: "Pendidikan"
    },
    {
      id: 2,
      nama: "Dinas Pendidikan Sulawesi Utara",
      deskripsi: "Kolaborasi dalam pengembangan pendidikan dan peningkatan kualitas pembelajaran.",
      logo: "/logo-smapas.svg",
      jenis: "Pemerintahan"
    },
    {
      id: 3,
      nama: "LPDP Pusat",
      deskripsi: "Kemitraan dalam program mentoring dan pengembangan beasiswa.",
      logo: "/logo-smapas.svg",
      jenis: "Lembaga"
    },
    {
      id: 4,
      nama: "Bank Indonesia Perwakilan Sulut",
      deskripsi: "Kerjasama dalam program pemberdayaan ekonomi masyarakat.",
      logo: "/logo-smapas.svg",
      jenis: "Keuangan"
    },
    {
      id: 5,
      nama: "Kadin Sulawesi Utara",
      deskripsi: "Kolaborasi dalam pengembangan kewirausahaan dan ekonomi kreatif.",
      logo: "/logo-smapas.svg",
      jenis: "Bisnis"
    },
    {
      id: 6,
      nama: "Media Partner",
      deskripsi: "Kemitraan media dalam publikasi dan dokumentasi kegiatan.",
      logo: "/logo-smapas.svg",
      jenis: "Media"
    }
  ];

  const programKolaborasi = [
    {
      id: 1,
      judul: "Pendidikan Inklusif",
      deskripsi: "Program kolaboratif untuk meningkatkan akses pendidikan bagi anak-anak berkebutuhan khusus di Sulawesi Utara.",
      mitra: "Universitas Sam Ratulangi, Dinas Pendidikan Sulut"
    },
    {
      id: 2,
      judul: "Ekonomi Kreatif Desa",
      deskripsi: "Pemberdayaan masyarakat desa melalui pengembangan produk kreatif berbasis potensi lokal.",
      mitra: "Kadin Sulut, Bank Indonesia"
    },
    {
      id: 3,
      judul: "Riset Kebijakan Daerah",
      deskripsi: "Kolaborasi riset untuk menghasilkan rekomendasi kebijakan yang aplikatif bagi pembangunan daerah.",
      mitra: "Universitas Sam Ratulangi, Pemerintah Daerah"
    },
    {
      id: 4,
      judul: "Digital Literacy",
      deskripsi: "Program literasi digital untuk meningkatkan kemampuan masyarakat dalam memanfaatkan teknologi.",
      mitra: "LPDP, Media Partner"
    }
  ];

  return (
    <section id="kolaborasi" className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
        {/* Section Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kolaborasi Strategis</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bersama mitra strategis, kami membangun sinergi untuk mewujudkan pembangunan 
            Sulawesi Utara yang berkelanjutan dan inklusif.
          </p>
        </motion.div>

        {/* Strategic Partners */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Mitra Strategis</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mitraStrategis.map((mitra, index) => (
              <motion.div 
                key={mitra.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#B8860B] group-hover:text-white transition-colors duration-300">
                    <img 
                      src={mitra.logo} 
                      alt={mitra.nama}
                      className="w-8 h-8"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjNGNEY1Ii8+CjxwYXRoIGQ9Ik0wIDBoMzJ2MzJIMFowIiBmaWxsPSIjRjNGNEY1Ii8+Cjx0ZXh0IHg9IjE2IiB5PSIxOCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOENBNEFGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjM1ZW0iPkxvZ28PC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{mitra.nama}</h4>
                    <span className="inline-block bg-[#B8860B] text-white px-2 py-1 rounded-full text-sm font-semibold mt-1">
                      {mitra.jenis}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {mitra.deskripsi}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collaboration Programs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Program Kolaborasi</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {programKolaborasi.map((program, index) => (
              <motion.div 
                key={program.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">{program.judul}</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {program.deskripsi}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Mitra:</span> {program.mitra}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-r from-[#0D1B2A] to-[#B8860B] rounded-2xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Bergabunglah dalam Kolaborasi Kami</h3>
          <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Kami terbuka untuk berkolaborasi dengan berbagai pihak yang memiliki visi dan misi yang sama 
            dalam membangun Sulawesi Utara yang lebih baik. Mari bersama-sama menciptakan dampak positif 
            bagi masyarakat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0D1B2A] px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors duration-300">
              Hubungi Kami
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#0D1B2A] transition-colors duration-300">
              Proposal Kerjasama
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Kolaborasi;