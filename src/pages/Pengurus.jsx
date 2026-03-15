import React from 'react';
import { motion } from 'framer-motion';

const Pengurus = () => {
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

  const strukturOrganisasi = [
    {
      id: 1,
      jabatan: "Ketua",
      nama: "Dr. Andi Muhammad Hikam, S.Pd., M.Pd.",
      foto: "/kepala-sekolah.webp",
      deskripsi: "Memimpin dan mengkoordinasikan seluruh kegiatan organisasi serta menjaga hubungan dengan stakeholder."
    },
    {
      id: 2,
      jabatan: "Wakil Ketua",
      nama: "Sri Mulyani, S.E., M.Sc.",
      foto: "/waka1.webp",
      deskripsi: "Membantu ketua dalam menjalankan tugas dan menggantikan ketua jika berhalangan."
    },
    {
      id: 3,
      jabatan: "Sekretaris",
      nama: "Budi Santoso, S.H., LL.M.",
      foto: "/waka2.jpeg",
      deskripsi: "Mengelola administrasi, dokumentasi, dan komunikasi internal serta eksternal organisasi."
    },
    {
      id: 4,
      jabatan: "Bendahara",
      nama: "Rina Fitriani, S.E., M.Acc.",
      foto: "/bendahara.jpeg",
      deskripsi: "Mengelola keuangan organisasi, pembukuan, dan pelaporan keuangan secara transparan."
    },
    {
      id: 5,
      jabatan: "Divisi Program",
      nama: "Tim Program",
      foto: "/waka3.jpeg",
      deskripsi: "Merancang, mengimplementasikan, dan mengevaluasi seluruh program kerja organisasi."
    },
    {
      id: 6,
      jabatan: "Divisi Kemitraan",
      nama: "Tim Kemitraan",
      foto: "/waka4.jpeg",
      deskripsi: "Membangun dan menjaga hubungan kemitraan dengan berbagai instansi dan lembaga."
    },
    {
      id: 7,
      jabatan: "Divisi Media dan Publikasi",
      nama: "Tim Media",
      foto: "/komite1.png",
      deskripsi: "Mengelola media sosial, publikasi, dan dokumentasi kegiatan organisasi."
    }
  ];

  return (
    <section id="pengurus" className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
        {/* Section Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Struktur Pengurus</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tim pengurus Mata Garuda Sulawesi Utara yang kompeten dan berdedikasi 
            tinggi dalam mewujudkan visi dan misi organisasi.
          </p>
        </motion.div>

        {/* Organizational Structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strukturOrganisasi.map((pengurus, index) => (
            <motion.div 
              key={pengurus.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-center">
                {/* Photo */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-[#B8860B] transition-colors duration-300">
                  <img 
                    src={pengurus.foto} 
                    alt={pengurus.nama}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDgiIGN5PSI0OCIgcj0iNDgiIGZpbGw9IiMwRDFCMkEiLz4KPHBhdGggZD0iTTQ4IDMwQzM5LjE2MzQgMzAgMzIgMzcuMTYzNCAzMiA0NlMzOS4xNjM0IDYyIDQ4IDYyUzY0IDU0LjgzNjYgNjQgNDZTNTYuODM2NiAzMCA0OCAzMFoiIGZpbGw9IiNGRkYiLz4KPHBhdGggZD0iTTQ4IDQyQzQ0LjY4MTcgNDIgNDEgNDUuNjgxNyA0MSA0OVMyNC42ODE3IDU2IDQ4IDU2UzU1IDUyLjMxODMgNTUgNDlTNTEuMzE4MyA0MiA0OCA0MloiIGZpbGw9IiNGRkYiLz4KPC9zdmc+Cg==';
                    }}
                  />
                </div>
                
                {/* Jabatan */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pengurus.jabatan}</h3>
                
                {/* Nama */}
                <h4 className="text-md font-semibold text-[#B8860B] mb-4">{pengurus.nama}</h4>
                
                {/* Deskripsi */}
                <p className="text-gray-700 text-sm leading-relaxed text-center">
                  {pengurus.deskripsi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Komitmen Kami</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              Dengan semangat kolaborasi dan profesionalisme, seluruh pengurus Mata Garuda Sulawesi Utara 
              berkomitmen untuk mewujudkan visi organisasi dalam membangun Sulawesi Utara yang lebih maju, 
              sejahtera, dan berdaya saing melalui pendidikan, kepemimpinan, dan pemberdayaan masyarakat.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pengurus;