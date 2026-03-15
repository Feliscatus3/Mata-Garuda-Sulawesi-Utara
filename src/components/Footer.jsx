import React from 'react';
import { 
  Phone, 
  Mail, 
  ChevronRight,
  Instagram,
  Facebook,
  Youtube,
  MapPin
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  // Google Maps untuk Sulawesi Utara
  const mapUrl = "https://maps.google.com/maps?q=Sulawesi+Utara&t=&z=10&ie=UTF8&iwloc=&output=embed";

  return (
    <footer className="font-urbanist bg-[#0D1B2A] relative pt-10">
      
      {/* --- BAGIAN ATAS: INFORMASI UTAMA --- */}
      <div className="py-16 text-white">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
            
            {/* 1. LOGO & TENTANG */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center bg-[#B8860B] rounded-full">
                  <span className="text-white font-bold text-2xl">MG</span>
                </div>
                <div>
                  <h2 className="text-[20px] font-black leading-tight uppercase tracking-tight text-white">
                    Mata Garuda
                  </h2>
                  <p className="text-[#B8860B] font-bold text-sm">
                    Sulawesi Utara
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                Komunitas awardee dan alumni LPDP di Sulawesi Utara yang berkolaborasi 
                untuk pengembangan kepemimpinan, pengabdian masyarakat, dan pembangunan daerah.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-[#B8860B] font-bold">Visi:</span> "Sinergi Sam Ratulangi"
              </p>
            </div>

            {/* 2. LINK MENU */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Menu</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Tentang Kami', path: '/tentang-kami' },
                  { name: 'Program', path: '/program' },
                  { name: 'Pengurus', path: '/pengurus' },
                  { name: 'Berita & Kegiatan', path: '/berita' },
                  { name: 'Kolaborasi', path: '/kolaborasi' },
                  { name: 'Kontak', path: '/kontak' }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(item.path);
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                      }}
                      className="flex items-center gap-2 text-gray-400 hover:text-[#B8860B] transition-all group cursor-pointer">
                      <ChevronRight size={18} className="text-[#B8860B] group-hover:translate-x-1 transition-transform" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. KONTAK & SOSIAL MEDIA */}
            <div className="space-y-8">
              <div id="kontak">
                <h3 className="text-lg font-bold mb-6 text-white">Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone size={18} className="text-[#B8860B]" />
                    <span>+62 812-3456-7890</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail size={18} className="text-[#B8860B]" />
                    <span>info@matagarudasulut.org</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-400">
                    <MapPin size={18} className="text-[#B8860B] mt-1" />
                    <span>Sulawesi Utara, Indonesia</span>
                  </div>
                </div>
              </div>
              
              <div id="sosmed">
                <h3 className="text-lg font-bold mb-4 text-white">Ikuti Kami</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com/matagarudasulut" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full transition-all duration-300 hover:bg-[#B8860B]">
                    <Instagram size={20} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full transition-all duration-300 hover:bg-[#B8860B]">
                    <Facebook size={20} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full transition-all duration-300 hover:bg-[#B8860B]">
                    <Youtube size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* 4. GOOGLE MAPS */}
            <div className="w-full lg:pl-4">
              <div className="flex flex-col items-start w-full">
                <h3 className="text-[13px] font-[800] uppercase tracking-wider mb-4 text-white leading-none">
                  LOKASI KANTOR
                </h3>
                <div className="w-full h-[180px] rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <iframe 
                    src={mapUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Peta Lokasi Sulawesi Utara"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- BAWAH: COPYRIGHT --- */}
      <div className="bg-[#0A1525] py-6 text-center border-t border-gray-800">
        <div className="max-w-[1440px] mx-auto px-5">
          <p className="text-gray-500 text-[14px] font-medium tracking-wide">
            © Copyright <span className="font-bold uppercase tracking-tight text-[#B8860B]">Mata Garuda Sulawesi Utara</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
