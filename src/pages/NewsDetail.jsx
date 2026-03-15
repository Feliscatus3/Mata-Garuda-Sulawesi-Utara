import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight, ArrowLeft, MessageCircle } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Cari berita berdasarkan _id dari staticNews di BeritaTerbaru
  const allNews = [
    {
      _id: '1',
      judul: 'MG Sulut Gelar Pengabdian Desa Bantik',
      kategori: 'Kegiatan',
      tanggal: '2024-10-15',
      foto: '/program-1.webp',
      hashtag: ['#MGSulut', '#Pengabdian', '#DesaBantik'],
      kontenFull: [
        "Tim Mata Garuda Sulawesi Utara dengan penuh semangat menggelar program pengabdian masyarakat di Desa Bantik, Kabupaten Minahasa Utara.",
        "Kegiatan ini melibatkan 30+ anggota MG Sulut yang fokus pada bidang pendidikan karakter, pemberdayaan ekonomi masyarakat, dan pelestarian lingkungan.",
        "Hari pertama diisi dengan workshop kepemimpinan untuk pemuda desa, diikuti praktik langsung pembuatan pupuk organik dan penanaman pohon mangrove.",
        "Kepala Desa Bantik mengapresiasi tinggi kontribusi MG Sulut dan berharap program serupa dapat dilanjutkan secara berkala.",
        "Program ini merupakan bagian dari komitmen MG Sulut untuk memberikan dampak nyata bagi masyarakat Sulawesi Utara."
      ]
    },
    {
      _id: '2',
      judul: 'Capacity Building MG Institute Dimulai',
      kategori: 'Prestasi',
      tanggal: '2024-10-10',
      foto: '/bendahara.jpeg',
      hashtag: ['#CapacityBuilding', '#MGInstitute'],
      kontenFull: [
        "MG Institute resmi meluncurkan program Capacity Building pertama untuk anggota Mata Garuda Sulawesi Utara.",
        "50 peserta terpilih akan mengikuti mentorship karir intensif dengan 10 mentor dari berbagai industri.",
        "Kurikulum meliputi public speaking, leadership, digital marketing, dan financial literacy.",
        "Program berlangsung 8 minggu dengan sesi mingguan dan proyek akhir kolaboratif.",
        "Expected outcome: 100% peserta siap kerja / entrepreneurship dalam 6 bulan."
      ]
    },
    {
      _id: '3',
      judul: 'Prestasi Anggota MG Sulut di Kompetisi Nasional',
      kategori: 'Prestasi',
      tanggal: '2024-10-05',
      foto: '/tas1.jpeg',
      hashtag: ['#Prestasi', '#MGSulut'],
      kontenFull: [
        "Tiga anggota MG Sulut meraih podium di Kompetisi Riset Kebijakan Nasional 2024.",
        "Juara 1: Riset 'Pemberdayaan Pemuda Sulut Era Digital' - Tim Bintang et al.",
        "Juara 2: 'Model Ekonomi Berbasis Potensi Lokal Minahasa' - Tim Rizal et al.",
        "Juara 3: 'Strategi Mitigasi Bencana di Sulawesi Utara' - Tim Sarah et al.",
        "Prestasi ini bukti komitmen MG Sulut mencetak generasi riset berdaya saing nasional."
      ]
    },
    {
      _id: '4',
      judul: 'Riset Kebijakan Sulawesi Utara Dirilis',
      kategori: 'Akademik',
      tanggal: '2024-09-30',
      foto: '/greenhouse.webp',
      hashtag: ['#Riset', '#Kebijakan'],
      kontenFull: [
        "Laporan riset kebijakan 'Pembangunan Sulawesi Utara 2025-2030' dirilis MG Sulut.",
        "200+ halaman analisis mendalam 5 sektor prioritas: ekonomi, pendidikan, kesehatan, lingkungan, infrastruktur.",
        "Rekomendasi diserahkan ke Gubernur Sulawesi Utara dan DPRD Provinsi.",
        "Riset melibatkan 50 akademisi, praktisi, dan pemangku kepentingan.",
        "Download lengkap tersedia di website MG Sulut."
      ]
    },
    {
      _id: '5',
      judul: 'Diskusi Industri Bersama Pakar',
      kategori: 'Kegiatan',
      tanggal: '2024-09-25',
      foto: '/unggul.webp',
      hashtag: ['#DiskusiIndustri', '#Karir'],
      kontenFull: [
        "Forum Diskusi Industri 'Future of Work Sulawesi Utara' sukses digelar MG Sulut.",
        "5 pakar industri: Tech, Finance, Agribisnis, Pariwisata, Pemerintahan.",
        "100+ anggota hadir, networking sesi, career booth dari 10 perusahaan.",
        "Key takeaway: Adaptasi AI + skill lokal = competitive advantage Sulut.",
        "Rekaman full available di YouTube MG Sulut."
      ]
    }
  ];

  const article = allNews.find(news => news._id === id);
  const [relatedNews] = useState(allNews.filter(n => n._id !== id).slice(0,3));

  if (!article) {
    return (
      <div className="pt-32 lg:pt-44 pb-24 font-urbanist bg-white min-h-screen">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Berita Tidak Ditemukan</h2>
          <button onClick={() => navigate('/berita')} className="text-[#587F93] font-bold hover:underline">
            ← Kembali ke Berita
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 lg:pt-44 pb-24 font-urbanist bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
        <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
          <span className="hover:text-[#587F93] cursor-pointer" onClick={() => navigate('/')}>Beranda</span>
          <ChevronRight size={14} />
          <span className="hover:text-[#587F93] cursor-pointer" onClick={() => navigate('/berita')}>Berita</span>
          <ChevronRight size={14} />
          <span className="text-[#587F93]">{article.judul}</span>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:col-span-2">
            <span className="inline-block bg-[#587F93]/10 text-[#587F93] px-4 py-1.5 rounded-full text-xs font-black uppercase mb-6">
              {article.kategori}
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-8">
              {article.judul}
            </h1>

            <div className="flex flex-wrap gap-6 py-6 border-y border-gray-100 mb-12 text-sm font-bold text-gray-500 uppercase tracking-wide">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Tim MG Sulut</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(article.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
            </div>

            <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
              <img src={article.foto} alt={article.judul} className="w-full h-[400px] lg:h-[500px] object-cover" />
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">
              {article.kontenFull.map((p, idx) => (
                <motion.p 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8 text-lg font-medium"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {article.hashtag.length > 0 && (
              <div className="py-8 border-t border-gray-100 mb-12">
                <div className="flex flex-wrap gap-2">
                  {article.hashtag.map((tag, idx) => (
                    <span key={idx} className="px-4 py-2 bg-[#587F93]/10 text-[#587F93] rounded-full text-sm font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button 
              onClick={() => navigate('/berita')}
              className="flex items-center gap-3 text-gray-900 font-black text-sm uppercase tracking-wider hover:text-[#587F93] group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#587F93] group-hover:text-white transition-all">
                <ArrowLeft size={18} />
              </div>
              Kembali ke Berita
            </button>
          </motion.article>

          {/* Sidebar */}
          <motion.aside initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:col-span-1 mt-16 lg:mt-0 space-y-8">
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tight">Berita Terkait</h3>
              <div className="space-y-4">
                {relatedNews.map((news) => (
                  <div 
                    key={news._id}
                    onClick={() => navigate(`/berita/${news._id}`)}
                    className="p-4 rounded-xl border border-gray-100 hover:border-[#587F93] hover:shadow-md cursor-pointer transition-all group"
                  >
                    <div className="flex gap-3">
                      <img src={news.foto} alt={news.judul} className="w-20 h-20 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform" />
                      <div>
                        <span className="text-xs font-bold text-[#587F93] uppercase tracking-wider block mb-1">{news.kategori}</span>
                        <h4 className="font-bold text-gray-900 line-clamp-2 group-hover:text-[#587F93] transition-colors">{news.judul}</h4>
                        <span className="text-xs text-gray-500 font-medium">{new Date(news.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
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

export default NewsDetail;
