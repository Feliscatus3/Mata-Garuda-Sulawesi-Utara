import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Calendar, User } from 'lucide-react';
import { beritaData } from '../data/beritaData.js';

const Berita2 = () => {
  const navigate = useNavigate();

  const [relatedNews] = useState(() => {
    const sameKategori = beritaData.filter(
      n => n._id !== '2' && n.kategori === 'Pendidikan'
    );

    const other = beritaData.filter(
      n => n._id !== '2' && n.kategori !== 'Pendidikan'
    );

    return [...sameKategori, ...other]
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
  });

  return (
    <div className="pt-32 lg:pt-44 pb-24 font-urbanist bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
          <span
            className="hover:text-[#587F93] cursor-pointer"
            onClick={() => navigate('/')}
          >
            Beranda
          </span>

          <ChevronRight size={14} />

          <span
            className="hover:text-[#587F93] cursor-pointer"
            onClick={() => navigate('/berita')}
          >
            Berita
          </span>

          <ChevronRight size={14} />

          <span className="text-[#587F93]">
            Sosialisasi Beasiswa LPDP 2026
          </span>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">

          {/* Artikel */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 mb-16 lg:mb-0"
          >

            {/* Kategori */}
            <span className="inline-block bg-[#587F93]/10 text-[#587F93] px-4 py-1.5 rounded-full text-xs font-black uppercase mb-6">
              Pendidikan
            </span>

            {/* Judul */}
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-8">
              Strategi Lolos LPDP 2026, Mata Garuda Sulawesi Utara Gelar Sosialisasi Beasiswa
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap gap-6 py-6 border-y border-gray-100 mb-12 text-sm font-bold text-gray-500 uppercase tracking-wide">

              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Tim MG Sulut</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>16 Feb 2026</span>
              </div>

            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/sosialiasasi1.jpg"
                alt="Sosialisasi Beasiswa LPDP 2026 Mata Garuda Sulawesi Utara"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Isi Berita */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">

              <p className="mb-8 text-lg font-medium">
                Kesempatan melanjutkan pendidikan ke jenjang yang lebih tinggi
                melalui Beasiswa LPDP kembali menjadi perhatian bagi mahasiswa
                dan masyarakat Sulawesi Utara. Untuk mendorong semakin banyak
                calon penerima beasiswa yang memahami proses seleksi, Mata
                Garuda Sulawesi Utara bersama Ruang Awardee menghadirkan
                Sosialisasi Beasiswa LPDP 2026.
              </p>

              <p className="mb-8 text-lg font-medium">
                Kegiatan ini menjadi ruang berbagi informasi sekaligus
                pembelajaran bagi calon pendaftar yang ingin mempersiapkan diri
                menghadapi proses seleksi LPDP. Peserta tidak hanya mendapatkan
                informasi mengenai beasiswa, tetapi juga dapat mempelajari
                strategi dan tips untuk meningkatkan kesiapan dalam mengikuti
                setiap tahapan seleksi.
              </p>

              <p className="mb-8 text-lg font-medium">
                Sosialisasi menghadirkan Direktur Beasiswa LPDP, Bapak Dwi
                Larso, yang memberikan sambutan sekaligus gambaran mengenai
                program beasiswa LPDP. Turut hadir Divisi Pengelolaan Alumni,
                Kak Ilo, serta narasumber inspiratif dari kalangan alumni
                perguruan tinggi internasional.
              </p>

              <p className="mb-8 text-lg font-medium">
                Narasumber dari lulusan George Mason University dan King's
                College London turut membagikan pengalaman serta perspektif
                mengenai perjalanan pendidikan dan pengembangan diri setelah
                mendapatkan kesempatan belajar di perguruan tinggi
                internasional.
              </p>

              <p className="mb-8 text-lg font-medium">
                Kegiatan Sosialisasi Beasiswa LPDP 2026 dilaksanakan pada
                Senin, 16 Februari 2026 pukul 13.00 WIB atau 14.00 WITA secara
                daring melalui Zoom Meeting. Kegiatan ini terbuka bagi
                mahasiswa, calon pendaftar beasiswa, praktisi, maupun
                masyarakat umum yang ingin mengetahui lebih jauh mengenai
                peluang pendidikan melalui LPDP.
              </p>

              <p className="mb-8 text-lg font-medium">
                Melalui kegiatan ini, Mata Garuda Sulawesi Utara dan Ruang
                Awardee berkomitmen untuk memperluas akses informasi pendidikan
                sekaligus mendorong lahirnya lebih banyak calon awardee dari
                Sulawesi Utara yang memiliki kompetensi, wawasan global, dan
                semangat untuk kembali memberikan kontribusi bagi daerah serta
                Indonesia.
              </p>

              <p className="mb-8 text-lg font-bold text-[#587F93]">
                Dari Sulawesi Utara untuk Indonesia. 🎓
              </p>

            </div>

            {/* Hashtag */}
            <div className="py-8 border-t border-gray-100 mb-12">
              <div className="flex flex-wrap gap-2">

                <span className="px-4 py-2 bg-[#587F93]/10 text-[#587F93] rounded-full text-sm font-bold">
                  #MataGarudaSulut
                </span>

                <span className="px-4 py-2 bg-[#587F93]/10 text-[#587F93] rounded-full text-sm font-bold">
                  #MGSulut
                </span>

                <span className="px-4 py-2 bg-[#587F93]/10 text-[#587F93] rounded-full text-sm font-bold">
                  #LPDP2026
                </span>

                <span className="px-4 py-2 bg-[#587F93]/10 text-[#587F93] rounded-full text-sm font-bold">
                  #BeasiswaLPDP
                </span>

                <span className="px-4 py-2 bg-[#587F93]/10 text-[#587F93] rounded-full text-sm font-bold">
                  #RuangAwardee
                </span>

                <span className="px-4 py-2 bg-[#587F93]/10 text-[#587F93] rounded-full text-sm font-bold">
                  #SDMUnggul
                </span>

              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate('/berita')}
              className="flex items-center gap-3 text-gray-900 font-black text-sm uppercase tracking-wider hover:text-[#587F93]"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#587F93] hover:text-white transition-all">
                <ArrowLeft size={18} />
              </div>

              Kembali ke Berita
            </button>

          </motion.article>

          {/* Berita Terkait */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                Berita Terkait
              </h3>

              <div className="space-y-4">

                {relatedNews.map((news) => (
                  <div
                    key={news._id}
                    onClick={() => navigate(`/berita/${news._id}`)}
                    className="p-4 rounded-xl border border-gray-100 hover:border-[#587F93] hover:shadow-md cursor-pointer transition-all"
                  >

                    <div className="flex gap-3">

                      <img
                        src={news.foto}
                        alt={news.judul}
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                      />

                      <div>

                        <span className="text-xs font-bold text-[#587F93] uppercase block mb-1">
                          {news.kategori}
                        </span>

                        <h4 className="font-bold line-clamp-2">
                          {news.judul}
                        </h4>

                        <span className="text-xs text-gray-500">
                          {new Date(news.tanggal).toLocaleDateString(
                            'id-ID',
                            {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            }
                          )}
                        </span>

                      </div>

                    </div>

                  </div>
                ))}

              </div>
            </div>

          </motion.aside>

        </div>
      </div>
    </div>
  );
};

export default Berita2;