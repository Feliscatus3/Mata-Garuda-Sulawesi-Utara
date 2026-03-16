import React, { useState } from 'react';
import { tenagaKepengerusanData } from '../data/tenagaKepengerusan.js';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StrukturOrganisasiPage = () => {
  const navigate = useNavigate();
  const [selectedStaff, setSelectedStaff] = useState(null);

  // Group data by hierarchy
  const kepsek = tenagaKepengerusanData.find(item => item.posisi === 'Kepala Sekolah');
  const wakilKepala = tenagaKepengerusanData.filter(item => item.posisi.includes('Wakil Kepala'));
  const admins = tenagaKepengerusanData.filter(item => !item.posisi.includes('Kepala') && !item.posisi.includes('Wakil'));

  const strukturData = {
    judul: 'Struktur Organisasi Sekolah',
    deskripsiSingkat: 'Struktur organisasi SMA Mata Garuda Sulawesi Utara lengkap dengan tenaga kepengurusan dan administrasi.',
    keterangan: 'Menampilkan hierarki lengkap mulai dari Kepala Sekolah, Wakil Kepala, hingga staf administrasi dan tata usaha.',
  };

  return (
    <div className="pt-32 lg:pt-44 pb-24 font-urbanist bg-[#FDFDFD] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
        
        {/* Header & Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
            <span className="hover:text-[#B8860B] cursor-pointer" onClick={() => navigate('/')}>Beranda</span>
            <ChevronRight size={14} />
            <span className="hover:text-[#B8860B] cursor-pointer" onClick={() => navigate('/profil')}>Profil</span>
            <ChevronRight size={14} />
            <span className="text-[#B8860B]">Struktur Organisasi</span>
          </div>
          <h1 className="text-[40px] lg:text-[56px] font-[900] text-black leading-none tracking-tight uppercase">
            {strukturData.judul}
          </h1>
          <div className="w-20 h-1.5 bg-[#B8860B] mt-6 rounded-full"></div>
          <p className="mt-8 text-gray-500 max-w-3xl font-medium text-lg leading-relaxed">
            {strukturData.deskripsiSingkat}
          </p>
        </motion.div>

        {/* Staff Detail Modal */}
        {selectedStaff && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedStaff(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedStaff(null)} className="float-right text-gray-400 hover:text-gray-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img src={selectedStaff.foto} alt={selectedStaff.nama} className="w-full aspect-[3/4] object-cover rounded-2xl mb-6 shadow-2xl" />
              <h3 className="text-2xl font-black mb-2">{selectedStaff.nama}</h3>
              <p className="text-xl font-bold text-gray-600 mb-4">{selectedStaff.posisi}</p>
              <div className="space-y-3 text-sm">
                <p><span className="font-bold">NIP:</span> {selectedStaff.nip}</p>
                <p><span className="font-bold">Gelar:</span> {selectedStaff.gelar}</p>
                <p><span className="font-bold">Email:</span> <a href={`mailto:${selectedStaff.email}`} className="text-blue-600 hover:underline">{selectedStaff.email}</a></p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Content Section */}
        <div className="flex flex-col gap-10">
          
          {/* Keterangan Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-600 whitespace-pre-line"
          >
            {strukturData.keterangan}
          </motion.div>

          {/* Kepala Sekolah Section */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="grid place-items-center">
            <div className="w-full max-w-2xl bg-gradient-to-br from-[#B8860B] to-[#D4A84B] rounded-3xl p-8 text-center text-white shadow-2xl">
              <h2 className="text-3xl lg:text-4xl font-black uppercase mb-4">Kepala Sekolah</h2>
              {kepsek && (
                <div className="flex flex-col lg:flex-row items-center gap-6 cursor-pointer group" onClick={() => setSelectedStaff(kepsek)}>
                  <img src={kepsek.foto} alt={kepsek.nama} className="w-32 h-32 lg:w-48 lg:h-48 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300" />
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black">{kepsek.nama}</h3>
                    <p className="text-xl opacity-90">{kepsek.posisi}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.section>

          {/* Wakil Kepala Section */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <h2 className="text-3xl lg:text-4xl font-black text-center uppercase mb-8 text-gray-800">Wakil Kepala Sekolah</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wakilKepala.map((staff, idx) => (
                <motion.div 
                  key={staff._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="group cursor-pointer bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden"
                  onClick={() => setSelectedStaff(staff)}
                >
                  <img src={staff.foto} alt={staff.nama} className="w-full aspect-[3/4] object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500" />
                  <h3 className="font-black text-xl text-gray-800 mb-1">{staff.nama}</h3>
                  <p className="font-bold text-[#B8860B] text-lg">{staff.posisi}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Admin Section */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <h2 className="text-3xl lg:text-4xl font-black text-center uppercase mb-8 text-gray-800">Staf Administrasi & Tata Usaha</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {admins.map((staff, idx) => (
                <motion.div 
                  key={staff._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + idx * 0.05 }}
                  className="group cursor-pointer bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border"
                  onClick={() => setSelectedStaff(staff)}
                >
                  <img src={staff.foto} alt={staff.nama} className="w-full aspect-[3/4] object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500" />
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{staff.nama}</h3>
                  <p className="font-semibold text-gray-600 text-sm uppercase tracking-wide">{staff.posisi}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasiPage;
