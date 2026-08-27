import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StrukturOrganisasiPage = () => {
  const navigate = useNavigate();
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
  const handleReset = () => setScale(1);

  const strukturData = {
    judul: 'Struktur Organisasi',
    keterangan:
      'Struktur Kepengurusan Mata Garuda Provinsi Sulawesi Utara Periode 2026–2029.',
  };

  const inspektorat = [
    {
      nama: 'Debora Claudia Langi',
      jabatan: 'Ketua Mata Garuda Sulut 2.0',
    },
    {
      nama: 'Silviyanti Yudisti Pangke',
      jabatan: 'Ketua Mata Garuda Sulut 1.0',
    },
  ];

  const pimpinan = {
    ketua: {
      nama: 'Hikam Hulwanullah Toreh',
      jabatan: 'Ketua Umum',
    },
    wakilInternal: {
      nama: 'Remli Meiki Paendong',
      jabatan: 'Wakil Ketua 1 (Internal)',
    },
    wakilEksternal: {
      nama: 'Doly Silaban',
      jabatan: 'Wakil Ketua 2 (Eksternal)',
    },
    sekretaris: {
      nama: 'Tirza M.J. Desanto',
      jabatan: 'Sekretaris Umum',
    },
    bendahara: {
      nama: 'Eunike Marlietha Karamoy',
      jabatan: 'Bendahara',
    },
  };

  const bidang = [
    {
      nama: 'Bidang Kajian Strategis, Riset dan Kebijakan (Kastrat)',
      warna: 'from-purple-500 via-purple-600 to-purple-700',
      anggota: [
        'Devillito Prasetyo Tatipang',
        'Christovel Arthur Pangemanan',
      ],
    },
    {
      nama: 'Bidang Jejaring dan Kemitraan',
      warna: 'from-blue-500 via-blue-600 to-blue-700',
      anggota: ['Engelbertus Socca Sumahidi'],
    },
    {
      nama: 'Bidang Pemberdayaan Sosial dan Masyarakat',
      warna: 'from-emerald-500 via-emerald-600 to-emerald-700',
      anggota: ['Anisa Jihan Tumiwa', 'Glendy Lansart'],
    },
    {
      nama: 'Bidang Media, Komunikasi, dan Informasi (Medikom)',
      warna: 'from-orange-500 via-orange-600 to-orange-700',
      anggota: ['Nazar Insiyroh', 'Muhammad Juang M. Otton'],
    },
    {
      nama: 'Bidang SDM dan Kepengurusan',
      warna: 'from-slate-600 via-slate-700 to-slate-800',
      anggota: ['Hanna Naftalia Tomigolong'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-20 lg:pt-32 pb-20 font-urbanist">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 lg:mb-20"
        >
          <nav className="flex items-center justify-center gap-2 text-sm lg:text-base font-bold text-gray-400 uppercase tracking-wider mb-6">
            <span
              className="hover:text-emerald-600 cursor-pointer transition-all"
              onClick={() => navigate('/')}
            >
              Beranda
            </span>

            <ChevronRight size={14} />

            <span
              className="hover:text-emerald-600 cursor-pointer transition-all"
              onClick={() => navigate('/profil')}
            >
              Profil
            </span>

            <ChevronRight size={14} />

            <span className="text-emerald-600 font-semibold">
              Struktur Organisasi
            </span>
          </nav>

          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-900 to-emerald-900 bg-clip-text text-transparent leading-tight uppercase">
            {strukturData.judul}
          </h1>

          <div className="w-24 h-1.5 mx-auto mt-6 lg:mt-8 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />

          <p className="mt-5 text-gray-500 text-sm lg:text-base">
            Mata Garuda Provinsi Sulawesi Utara · Periode 2026–2029
          </p>
        </motion.div>

        {/* Zoom Toolbar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-3 p-4 mb-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 max-w-max mx-auto sticky top-4 z-20"
        >
          <button
            onClick={handleZoomOut}
            className="p-3 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-1 text-gray-700 text-sm font-medium shadow-sm"
            title="Zoom Out"
          >
            <ZoomOut size={18} />
            <span className="hidden sm:inline">Out</span>
          </button>

          <div className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl font-mono font-bold text-sm text-gray-800 min-w-[70px] text-center shadow-inner">
            {Math.round(scale * 100)}%
          </div>

          <button
            onClick={handleZoomIn}
            className="p-3 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-1 text-gray-700 text-sm font-medium shadow-sm"
            title="Zoom In"
          >
            <ZoomIn size={18} />
            <span className="hidden sm:inline">In</span>
          </button>

          <button
            onClick={handleReset}
            className="p-3 rounded-xl hover:bg-gray-100 transition-all text-gray-700 shadow-sm ml-2"
            title="Reset"
          >
            <RotateCcw size={18} />
          </button>
        </motion.div>

        {/* Organization Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200/30 bg-white/70 backdrop-blur-xl"
        >
          <div className="overflow-auto h-[75vh] lg:h-[82vh] p-8 lg:p-12 bg-gradient-to-br from-slate-50/50 via-white/70 to-slate-50/30">

            <div
              style={{
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
              }}
              className="flex flex-col items-center gap-8 lg:gap-10 min-w-[900px]"
            >

              {/* =========================
                  LEVEL 0 — INSPEKTORAT
              ========================== */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-4xl"
              >
                <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-7 lg:p-9 shadow-2xl border-4 border-white/40 text-white">
                  <div className="text-center mb-6">
                    <h2 className="text-xl lg:text-2xl font-black uppercase tracking-widest">
                      Inspektorat
                    </h2>

                    <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mt-3" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {inspektorat.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center"
                      >
                        <p className="font-bold text-lg">
                          {item.nama}
                        </p>

                        <p className="text-sm text-white/70 mt-2">
                          {item.jabatan}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Connector */}
              <div className="w-2 h-12 bg-gradient-to-b from-gray-700 to-emerald-500 rounded-full" />

              {/* =========================
                  LEVEL 1 — KETUA UMUM
              ========================== */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-72 sm:w-80 lg:w-[28rem]"
              >
                <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-3xl p-8 lg:p-10 shadow-2xl border-4 border-white/40 text-center text-white">
                  <h3 className="text-xl lg:text-3xl font-black uppercase tracking-wider mb-4">
                    Ketua Umum
                  </h3>

                  <p className="text-xl lg:text-2xl font-bold">
                    {pimpinan.ketua.nama}
                  </p>
                </div>
              </motion.div>

              {/* Connector */}
              <div className="w-2 h-12 bg-emerald-500 rounded-full" />

              {/* =========================
                  LEVEL 2 — WAKIL KETUA
              ========================== */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-7 shadow-2xl border-4 border-white/40 text-center text-white"
                >
                  <h3 className="text-lg lg:text-xl font-black uppercase tracking-wider mb-3">
                    Wakil Ketua 1
                  </h3>

                  <p className="text-sm text-white/70 mb-2">
                    Internal
                  </p>

                  <p className="text-lg lg:text-xl font-bold">
                    {pimpinan.wakilInternal.nama}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 rounded-3xl p-7 shadow-2xl border-4 border-white/40 text-center text-white"
                >
                  <h3 className="text-lg lg:text-xl font-black uppercase tracking-wider mb-3">
                    Wakil Ketua 2
                  </h3>

                  <p className="text-sm text-white/70 mb-2">
                    Eksternal
                  </p>

                  <p className="text-lg lg:text-xl font-bold">
                    {pimpinan.wakilEksternal.nama}
                  </p>
                </motion.div>

              </div>

              {/* Connector */}
              <div className="w-2 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

              {/* =========================
                  LEVEL 3 — SEKRETARIS & BENDAHARA
              ========================== */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-3xl p-7 shadow-2xl border-4 border-white/40 text-center text-white"
                >
                  <h3 className="text-lg lg:text-xl font-black uppercase tracking-wider mb-3">
                    Sekretaris Umum
                  </h3>

                  <p className="text-lg lg:text-xl font-bold">
                    {pimpinan.sekretaris.nama}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-7 shadow-2xl border-4 border-white/40 text-center text-white"
                >
                  <h3 className="text-lg lg:text-xl font-black uppercase tracking-wider mb-3">
                    Bendahara
                  </h3>

                  <p className="text-lg lg:text-xl font-bold">
                    {pimpinan.bendahara.nama}
                  </p>
                </motion.div>

              </div>

              {/* Connector */}
              <div className="w-2 h-12 bg-gradient-to-b from-purple-500 to-orange-500 rounded-full" />

              {/* =========================
                  LEVEL 4 — BIDANG
              ========================== */}
              <div className="w-full">

                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-black text-gray-800 uppercase tracking-wider">
                    Bidang-Bidang
                  </h2>

                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full mx-auto mt-3" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">

                  {bidang.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -6 }}
                      className={`w-full max-w-sm bg-gradient-to-br ${item.warna} rounded-3xl p-7 shadow-2xl border-4 border-white/40 text-center text-white`}
                    >
                      <h3 className="text-base lg:text-lg font-black uppercase leading-snug tracking-wide mb-5">
                        {item.nama}
                      </h3>

                      <div className="space-y-3">
                        {item.anggota.map((nama, anggotaIndex) => (
                          <div
                            key={anggotaIndex}
                            className="bg-white/10 border border-white/20 rounded-xl p-4"
                          >
                            <p className="font-bold text-sm lg:text-base">
                              {nama}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}

                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-gray-600 text-sm lg:text-base max-w-2xl mx-auto px-4 mt-10"
        >
          {strukturData.keterangan}
        </motion.div>

      </div>
    </div>
  );
};

export default StrukturOrganisasiPage;