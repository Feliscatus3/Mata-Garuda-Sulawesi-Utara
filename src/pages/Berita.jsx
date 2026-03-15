import React from 'react';
import { motion } from 'framer-motion';

const Berita = () => {
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

  const beritaTerbaru = [
    {
      id: 1,
      judul: "Leadership Forum 2024: Membangun Pemimpin Masa Depan Sulawesi Utara",
      tanggal: "15 Maret 2024",
      kategori: "Kegiatan",
      deskripsi: "Mata Garuda Sulawesi Utara sukses menyelenggarakan Leadership Forum 2024 dengan menghadirkan pembicara-pembicara inspiratif dari berbagai latar belakang profesional.",
      foto: "/program-1.webp",
      link: "/berita/leadership-forum-2024"
    },
    {
      id: 2,
      judul: "Mentoring Beasiswa LPDP Batch 3: Pendampingan Intensif untuk Calon Awardee",
      tanggal: "10 Maret 2024",
      kategori: "Program",
      deskripsi: "Program mentoring beasiswa LPDP batch 3 resmi dibuka dengan pendaftaran yang telah dibuka sejak awal bulan Maret 2024.",
      foto: "/lab-komputer.webp",
      link: "/berita/mentoring-lpdp-batch-3"
    },
    {
      id: 3,
      judul: "Pengabdian Masyarakat di Desa Tumpaan: Peningkatan Kualitas Pendidikan",
      tanggal: "5 Maret 2024",
      kategori: "Pengabdian",
      deskripsi: "Tim Mata Garuda melakukan kegiatan pengabdian masyarakat di Desa Tumpaan dengan fokus pada peningkatan kualitas pendidikan dan pembelajaran.",
      foto: "/greenhouse.webp",
      link: "/berita/pengabdian-masyarakat-tumpaan"
    },
    {
      id: 4,
      judul: "Kolaborasi Riset dengan Universitas Sam Ratulangi: Kajian Kebijakan Daerah",
      tanggal: "1 Maret 2024",
      kategori: "Kolaborasi",
      deskripsi: "Mata Garuda Sulawesi Utara menjalin kerjasama riset dengan Universitas Sam Ratulangi dalam rangka menghasilkan kajian kebijakan yang aplikatif bagi pembangunan daerah.",
      foto: "/gedung2.webp",
      link: "/berita/kolaborasi-riset-unsrat"
    },
    {
      id: 5,
      judul: "Seminar Nasional Pendidikan: Masa Depan Pendidikan di Era Digital",
      tanggal: "25 Februari 2024",
      kategori: "Seminar",
      deskripsi: "Mata Garuda mengadakan seminar nasional pendidikan dengan tema 'Masa Depan Pendidikan di Era Digital' yang dihadiri oleh ratusan peserta dari berbagai daerah.",
      foto: "/gedung-smapas.webp",
      link: "/berita/seminar-pendidikan-era-digital"
    },
    {
      id: 6,
      judul: "Kunjungan Kerja ke Dinas Pendidikan Sulawesi Utara",
      tanggal: "20 Februari 2024",
      kategori: "Kemitraan",
      deskripsi: "Pengurus Mata Garuda melakukan kunjungan kerja ke Dinas Pendidikan Sulawesi Utara untuk membahas potensi kolaborasi dalam pengembangan pendidikan di daerah.",
      foto: "/perpus.webp",
      link: "/berita/kunjungan-dinas-pendidikan"
    }
  ];

  return (
    <section id="berita" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
        {/* Section Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Berita & Kegiatan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan berbagai kegiatan, program, dan pencapaian terbaru dari Mata Garuda Sulawesi Utara 
            dalam upaya mewujudkan visi dan misi organisasi.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {beritaTerbaru.map((berita, index) => (
            <motion.article 
              key={berita.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={berita.foto} 
                  alt={berita.judul}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjRjNGNEY1Ii8+CjxwYXRoIGQ9Ik0wIDBoODAwdjQ1MEgwVjBaIiBmaWxsPSIjRjNGNEY1Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMjI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzAiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuMzVlbSI+Tm90IEF2YWlsYWJsZSBpbWFnZTwvdGV4dD4KPC9zdmc+Cg==';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#B8860B] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {berita.kategori}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {berita.tanggal}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#B8860B] transition-colors duration-300 group-hover:underline cursor-pointer">
                  {berita.judul}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {berita.deskripsi}
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href={berita.link}
                    className="inline-flex items-center gap-2 text-[#B8860B] font-semibold hover:text-[#0D1B2A] transition-colors duration-300"
                  >
                    Baca Selengkapnya
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <div className="flex gap-2">
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#B8860B] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#B8860B] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-r from-[#0D1B2A] to-[#B8860B] rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Dapatkan Update Terbaru</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Daftarkan email Anda untuk menerima update berita, kegiatan, dan program terbaru 
                dari Mata Garuda Sulawesi Utara langsung di kotak masuk Anda.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Masukkan email Anda"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#0D1B2A] px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors duration-300">
                Berlangganan
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Berita;