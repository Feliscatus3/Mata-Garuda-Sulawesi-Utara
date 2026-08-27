import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Calendar, User } from 'lucide-react';
import { beritaData } from '../data/beritaData.js';

const Berita1 = () => {
  const navigate = useNavigate();

  const [relatedNews] = useState(() => {
    const sameKategori = beritaData.filter(
      n => n._id !== '1' && n.kategori === 'Kegiatan'
    );

    const other = beritaData.filter(
      n => n._id !== '1' && n.kategori !== 'Kegiatan'
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
            Pelantikan Pengurus Mata Garuda Sulawesi Utara
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
              Kegiatan
            </span>

            {/* Judul */}
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-8">
              Pengurus Mata Garuda Sulawesi Utara Periode 2026–2029 Resmi Dilantik
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
                src="/pelantikan1.jpg"
                alt="Pelantikan Pengurus Mata Garuda Sulawesi Utara Periode 2026-2029"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Isi Berita */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">

              <p className="mb-8 text-lg font-medium">
                Mata Garuda Sulawesi Utara resmi melantik pengurus periode
                2026–2029 sebagai momentum awal untuk memperkuat peran dan
                kontribusi alumni penerima beasiswa LPDP bagi pembangunan
                daerah dan Indonesia.
              </p>

              <p className="mb-8 text-lg font-medium">
                Pelantikan kepengurusan baru ini menjadi bagian penting dalam
                melanjutkan semangat kolaborasi serta memperluas kontribusi
                alumni LPDP di berbagai bidang, khususnya pendidikan,
                pengembangan sumber daya manusia, pengabdian masyarakat,
                serta pembangunan daerah di Sulawesi Utara.
              </p>

              <p className="mb-8 text-lg font-medium">
                Kepengurusan Mata Garuda Sulawesi Utara periode 2026–2029
                diharapkan mampu menjadi wadah yang semakin kuat dalam
                mempertemukan gagasan, kompetensi, dan pengalaman para alumni
                LPDP untuk menghasilkan program yang memberikan manfaat nyata
                bagi masyarakat.
              </p>

              <p className="mb-8 text-lg font-medium">
                Semangat perjuangan tokoh nasional asal Sulawesi Utara,
                Sam Ratulangi, menjadi salah satu nilai yang terus dihidupkan
                dalam perjalanan organisasi. Semangat tersebut tercermin
                melalui komitmen untuk membangun sinergi, menghadirkan
                perubahan, serta memberikan arti bagi tanah kelahiran.
              </p>

              <p className="mb-8 text-lg font-medium">
                Nilai <strong>“Sitou Timou Tumou Tou”</strong> juga menjadi
                semangat yang mengiringi perjalanan Mata Garuda Sulawesi Utara.
                Filosofi tersebut mengingatkan bahwa manusia hidup untuk
                memanusiakan manusia, tumbuh dengan memberikan manfaat, dan
                berkontribusi bagi lingkungan sekitarnya.
              </p>

              {/* Featured Image */}
              <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/pelantikan2.jpg"
                  alt="Pelantikan Pengurus Mata Garuda Sulawesi Utara Periode 2026-2029"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>

              <p className="mb-8 text-lg font-medium">
                Dengan kepengurusan baru ini, Mata Garuda Sulawesi Utara siap
                bersinergi dengan berbagai pihak untuk menghadirkan program
                yang berdampak, memperkuat jejaring alumni, serta mendorong
                lahirnya kontribusi nyata bagi kemajuan Sulawesi Utara.
              </p>

              <p className="mb-8 text-lg font-medium">
                Selamat dan sukses atas pelantikan Pengurus Mata Garuda
                Sulawesi Utara periode 2026–2029. Semoga amanah dalam
                menjalankan tugas dan terus menjadi bagian dari ikhtiar
                membangun daerah serta Indonesia.
              </p>

              <p className="mb-8 text-lg font-bold text-[#587F93]">
                Dari Sulawesi Utara untuk Indonesia.
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
                  #Pelantikan
                </span>

                <span className="px-4 py-2 bg-[#587F93]/10 text-[#587F93] rounded-full text-sm font-bold">
                  #LPDP
                </span>

                <span className="px-4 py-2 bg-[#587F93]/10 text-[#587F93] rounded-full text-sm font-bold">
                  #SulawesiUtara
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

export default Berita1;