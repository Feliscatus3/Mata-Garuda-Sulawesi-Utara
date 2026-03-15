import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, Mail, Search, ChevronDown, Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { client, urlFor } from '../lib/sanity';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  // --- 1. DEFINISI MENU UNTUK MATA GARUDA SULUT ---
  const menuItems = [
    { name: 'BERANDA', dropdown: false, path: '/' },
    { 
      name: 'TENTANG', 
      dropdown: true, 
      items: [
        { label: 'Profil Organisasi', path: '/profil' },
        { label: 'Struktur Organisasi', path: '/struktur-organisasi' }
      ] 
    },
    { 
      name: 'PROGRAM', 
      dropdown: true, 
      items: [
        { label: 'Mata Garuda Institute', path: '/program#institute' },
        { label: 'Capacity Building', path: '/program#capacity' },
        { label: 'Community Development', path: '/program#community' },
        { label: 'Entrepreneurship', path: '/program#entrepreneurship' }
      ] 
    },
    { 
      name: 'BERITA', 
      dropdown: true, 
      items: [{ label: 'Daftar Berita', path: '/berita' }] 
    },
    { name: 'GALERI', dropdown: false, path: '/galeri' },
    { name: 'KONTAK', dropdown: false, path: '/kontak' },
  ];

  // --- 2. KATA KUNCI KONTEN & BAGIAN WEBSITE ---
  const staticShortcuts = [
    { keys: ['tentang', 'profil', 'organisasi'], url: '/profil', title: 'Profil Organisasi', type: 'Profil' },
    { keys: ['visi', 'misi', 'tujuan'], url: '/profil#visi-misi', title: 'Visi & Misi', type: 'Profil' },
    { keys: ['struktur', 'pengurus', 'kepengurusan'], url: '/struktur-organisasi', title: 'Struktur Organisasi', type: 'Organisasi' },
    { keys: ['kepala', 'ketua', 'hikam'], url: '/struktur-organisasi', title: 'Ketua MG Sulut', type: 'Pengurus' },
    { keys: ['program', 'kegitan', 'kelas'], url: '/program', title: 'Program Kerja', type: 'Program' },
    { keys: ['berita', 'artikel', 'informasi'], url: '/berita', title: 'Berita Terbaru', type: 'Berita' },
    { keys: ['galeri', 'foto', 'dokumentasi'], url: '/galeri', title: 'Galeri', type: 'Galeri' },
    { keys: ['kontak', 'hubungi', 'alamat'], url: '/kontak', title: 'Kontak', type: 'Kontak' },
    { keys: ['lpdp', 'beasiswa', 'alumni'], url: '/profil', title: 'Tentang LPDP', type: 'Info' },
  ];

  // Logika Live Search (Autocomplete)
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      const trimmedQuery = searchQuery.trim().toLowerCase();

      // A. Cari di MENU NAVIGASI
      const menuMatches = [];
      menuItems.forEach(menu => {
        if (menu.name.toLowerCase().includes(trimmedQuery)) {
           if (!menu.dropdown) {
             menuMatches.push({ _id: `menu-${menu.name}`, title: menu.name, path: menu.path, _type: 'static', typeLabel: 'Menu' });
           }
        }
        if (menu.items) {
           menu.items.forEach(sub => {
              if (sub.label.toLowerCase().includes(trimmedQuery)) {
                 menuMatches.push({ _id: `menu-${sub.label}`, title: sub.label, path: sub.path, _type: 'static', typeLabel: 'Menu' });
              }
           });
        }
      });

      // B. Cari di STATIC SHORTCUTS
      const staticMatches = staticShortcuts.filter(item => 
        item.keys.some(key => key.includes(trimmedQuery)) || 
        item.title.toLowerCase().includes(trimmedQuery)
      ).map(item => ({
        _id: `static-${item.url}`,
        _type: 'static',
        title: item.title,
        path: item.url,
        typeLabel: item.type
      }));

      try {
        const groqQuery = `*[
          (_type in ["berita", "galeri"]) && 
          (judul match $searchTerm || nama match $searchTerm)
        ][0...5] {
          _id, _type,
          "title": coalesce(judul, nama),
          foto,
          "path": select(
            _type == "berita" => "/berita/" + _id,
            _type == "galeri" => "/galeri"
          )
        }`;
        const data = await client.fetch(groqQuery, { searchTerm: `${searchQuery}*` });
        setSuggestions([...menuMatches, ...staticMatches, ...data]);
      } catch (err) {
        console.error("Search error:", err);
      }
    };

    const timer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      const trimmedQuery = searchQuery.trim().toLowerCase();
      
      let directMatch = staticShortcuts.find(item => 
        item.keys.some(key => key === trimmedQuery || (trimmedQuery.length > 3 && key.startsWith(trimmedQuery)))
      );

      if (!directMatch) {
        menuItems.forEach(menu => {
          if (menu.name.toLowerCase() === trimmedQuery && !menu.dropdown) directMatch = { url: menu.path };
          if (menu.items) {
            const sub = menu.items.find(s => s.label.toLowerCase() === trimmedQuery);
            if (sub) directMatch = { url: sub.path };
          }
        });
      }

      if (directMatch) {
        handleNavigation(directMatch.url);
      } else {
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      }

      setSearchQuery('');
      setIsMobileMenuOpen(false);
      setShowSuggestions(false);
    }
  };

  const handleNavigation = (path) => {
    if (path.includes('#')) {
      const [pathname, hash] = path.split('#');
      navigate(pathname);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
    setIsMobileMenuOpen(false);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 1024) {
          setIsVisible(true);
          return;
        }

        if (!isMobileMenuOpen) {
          if (window.scrollY > lastScrollY && window.scrollY > 42) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <>
      {/* --- HEADER UTAMA --- */}
      <header 
        className={`fixed top-0 left-0 w-full font-urbanist bg-white shadow-md z-[100] transition-transform duration-500 ease-in-out ${
          !isVisible ? 'translate-y-[-42px]' : 'translate-y-0'
        }`}
      >
        
        {/* --- TOP BAR - Navy Blue untuk MG Sulut --- */}
        <div className="hidden lg:block bg-[#0D1B2A] h-[42px] w-full">
          <div className="max-w-[1440px] mx-auto h-full px-[60px] flex justify-between items-center text-[12px] font-bold text-white">
            <div className="flex items-center gap-[25px]">
              <div className="flex items-center gap-[6px]">
                <Phone size={14} className="text-[#B8860B]" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-[6px] border-l border-gray-600 pl-[25px]">
                <Mail size={14} className="text-[#B8860B]" />
                <span className="lowercase">info@matagarudasulut.org</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Social Media Icons */}
              <div className="flex items-center gap-2">
                <a href="https://instagram.com/matagarudasulut" target="_blank" rel="noopener noreferrer" className="p-1 hover:text-[#B8860B] transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="p-1 hover:text-[#B8860B] transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="p-1 hover:text-[#B8860B] transition-colors">
                  <Youtube size={16} />
                </a>
              </div>

              {/* Search Bar */}
              <div className="relative group" ref={searchRef}>
                <input 
                  type="text" 
                  placeholder="search..." 
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onKeyDown={handleSearch}
                  onFocus={() => searchQuery.length >= 2 && setShowSuggestions(true)}
                  className="w-[180px] h-[28px] bg-white/10 border border-gray-600 rounded-full px-4 pl-9 text-[11px] focus:outline-none focus:border-[#B8860B] transition-all text-white placeholder-gray-400"
                />
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                {showSuggestions && searchQuery.length >= 2 && (
                  <div className="absolute top-full right-0 w-[280px] bg-white shadow-2xl rounded-xl mt-2 py-2 border border-gray-100 z-[110] overflow-hidden">
                    {suggestions.length > 0 ? (
                      suggestions.map((item) => (
                        <div 
                          key={item._id}
                          onClick={() => {
                            handleNavigation(item.path);
                            setSearchQuery('');
                            setShowSuggestions(false);
                          }}
                          className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors border-b border-gray-50 last:border-none"
                        >
                          <div className="w-8 h-8 rounded bg-gray-100 flex-shrink-0 overflow-hidden">
                            {item.foto ? (
                              <img src={urlFor(item.foto).width(50).height(50).url()} className="w-full h-full object-cover" />
                            ) : (
                              <Search size={12} className="m-auto text-gray-400" />
                            )}
                          </div>
                          <div className="text-left overflow-hidden">
                            <p className="text-[11px] font-bold text-gray-800 truncate">{item.title}</p>
                            <p className="text-[9px] text-[#B8860B] font-black uppercase tracking-tighter">
                              {item._type === 'static' ? item.typeLabel : item._type}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-[11px] text-gray-400 font-bold text-center">
                        Tidak ada hasil...
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- MAIN NAVBAR --- */}
        <nav className="h-[70px] lg:h-[90px] w-full border-b border-gray-100 bg-white">
          <div className="max-w-[1440px] mx-auto h-full px-5 lg:px-[60px] flex justify-between items-center">
            
            {/* Branding Logo */}
            <div className="flex items-center gap-[10px] lg:gap-[15px] cursor-pointer" onClick={() => handleNavigation('/')}>
              <div className="w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] flex items-center justify-center shrink-0 bg-[#0D1B2A] rounded-full">
                <span className="text-white font-bold text-lg lg:text-xl">MG</span>
              </div>
              <div className="flex flex-col justify-center text-left">
                <h1 className="text-[16px] lg:text-[20px] font-[900] text-black leading-none uppercase tracking-tight">
                  Mata Garuda
                </h1>
                <p className="text-[10px] lg:text-[12px] text-[#B8860B] font-bold italic mt-[1px]">
                  Sulawesi Utara
                </p>
              </div>
            </div>

            {/* Hamburger Button Mobile */}
            <button className="xl:hidden p-2 text-gray-700" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={32} />
            </button>

            {/* Menu Navigasi Desktop */}
            <ul className="hidden xl:flex items-center gap-[24px] text-[13px] font-[900] text-black uppercase tracking-tight h-full">
              {menuItems.map((menu) => (
                <li 
                  key={menu.name} 
                  className="relative group cursor-pointer flex items-center h-full"
                  onMouseEnter={() => menu.dropdown && setActiveDropdown(menu.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onClick={() => !menu.dropdown && handleNavigation(menu.path)}
                >
                  <div className="flex items-center gap-[3px] hover:text-[#B8860B] transition-colors py-8">
                    {menu.name}
                    {menu.dropdown && <ChevronDown size={12} className="opacity-60" />}
                  </div>

                  {menu.dropdown && activeDropdown === menu.name && (
                    <ul className="absolute left-0 top-full w-[220px] bg-white shadow-xl border-t-4 border-[#B8860B] py-2 z-50 animate-in fade-in slide-in-from-top-2">
                      {menu.items.map((sub) => (
                        <li 
                          key={sub.label} 
                          className="px-5 py-2.5 text-[12px] font-bold text-gray-700 hover:bg-gray-50 hover:text-[#B8860B] transition-all border-b border-gray-50 last:border-none"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavigation(sub.path);
                            setActiveDropdown(null);
                          }}
                        >
                          {sub.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* --- SIDEBAR MOBILE --- */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 xl:hidden z-[150] ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[350px] bg-white z-[200] shadow-2xl transition-transform duration-300 ease-in-out transform xl:hidden flex flex-col font-urbanist ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-5 border-b border-gray-100 shrink-0">
           <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#0D1B2A] rounded-full">
                <span className="text-white font-bold">MG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Mata Garuda</span>
                <span className="text-xs text-[#B8860B]">Sulawesi Utara</span>
              </div>
           </div>
           <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500"><X size={28} /></button>
        </div>

        <div className="flex-grow overflow-y-auto p-5">
           {/* Mobile Search Bar */}
           <div className="relative mb-6">
             <input 
               type="text" 
               placeholder="Cari sesuatu..." 
               value={searchQuery}
               onChange={(e) => {
                 setSearchQuery(e.target.value);
                 setShowSuggestions(true);
               }}
               onKeyDown={handleSearch}
               className="w-full h-[45px] bg-gray-50 border border-gray-200 rounded-xl px-5 pl-12 text-sm focus:outline-none focus:border-[#B8860B] transition-all font-bold"
             />
             <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
           </div>

           <ul className="flex flex-col gap-1">
             {menuItems.map((menu) => (
               <li key={menu.name} className="border-b border-gray-50 last:border-none">
                 <div 
                    className="flex justify-between items-center py-4 text-[14px] font-extrabold text-gray-800 uppercase" 
                    onClick={() => {
                      if (menu.dropdown) {
                        activeDropdown === menu.name ? setActiveDropdown(null) : setActiveDropdown(menu.name);
                      } else {
                        handleNavigation(menu.path);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                 >
                    {menu.name}
                    {menu.dropdown && <ChevronDown size={18} className={`${activeDropdown === menu.name ? 'rotate-180' : ''}`} />}
                 </div>

                 {menu.dropdown && activeDropdown === menu.name && (
                   <ul className="bg-gray-50 rounded-lg mb-4">
                     {menu.items?.map((sub) => (
                       <li key={sub.label} className="py-3 px-6 text-[12px] font-bold text-gray-600 active:text-[#B8860B]" onClick={() => { handleNavigation(sub.path); setIsMobileMenuOpen(false); }}>
                         {sub.label}
                       </li>
                     ))}
                   </ul>
                 )}
               </li>
             ))}
           </ul>
        </div>

        {/* Social Media Mobile */}
        <div className="p-5 border-t border-gray-100 shrink-0">
          <div className="flex justify-center gap-4">
            <a href="https://instagram.com/matagarudasulut" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0D1B2A] text-white rounded-full hover:bg-[#B8860B] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-[#0D1B2A] text-white rounded-full hover:bg-[#B8860B] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-[#0D1B2A] text-white rounded-full hover:bg-[#B8860B] transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
