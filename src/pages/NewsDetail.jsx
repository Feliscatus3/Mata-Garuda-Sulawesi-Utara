import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight, ArrowLeft, MessageCircle } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  import { beritaData } from '../data/beritaData.js';
  const allNews = beritaData;
  const article = allNews.find(n => n._id === id);
  const relatedNews = allNews.filter(n => n._id !== id && n.kategori === article?.kategori).slice(0,3).length > 0 
    ? allNews.filter(n => n._id !== id && n.kategori === article.kategori).slice(0,3)
    : allNews.filter(n => n._id !== id).slice(0,3);

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
