import React, { useState } from 'react';

export default function Navbar({ scrollToSection, setSearchModalOpen, logo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileScroll = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo Brand Frame - Now perfectly blending with white header */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img 
            src={logo} 
            alt="Homemade Degree Logo" 
            className="h-14 w-14 object-contain bg-white" 
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
              HOMEMADE
            </span>
            <span className="text-[10px] font-black tracking-widest text-[#2A838E] uppercase mt-1">
              DEGREE IT SOLUTIONS
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-bold text-xs tracking-wider text-slate-700">
          <button onClick={() => scrollToSection('home')} className="hover:text-[#2A838E] transition">HOME</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-[#2A838E] transition">ABOUT</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-[#2A838E] transition">SERVICES</button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#2A838E] transition">PORTFOLIO</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-[#2A838E] transition">CONTACT</button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={() => setSearchModalOpen(true)} className="text-slate-700 hover:text-[#2A838E] p-2 transition text-sm">🔍</button>
          <button onClick={() => scrollToSection('contact')} className="bg-[#2A838E] hover:bg-[#1f626b] text-white px-5 py-2.5 rounded font-bold transition text-xs tracking-wider uppercase shadow-md shadow-[#2A838E]/10">
            Free Quote
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="md:hidden flex items-center space-x-3">
          <button onClick={() => setSearchModalOpen(true)} className="text-slate-700 p-1 text-sm">🔍</button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-slate-700 p-2 focus:outline-none rounded-lg hover:bg-slate-50 transition"
            aria-label="Toggle Menu"
          >
            <span className="text-xl block font-mono">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Re-engineered Mobile Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute top-20 left-0 w-full px-6 py-4 flex flex-col space-y-3 font-bold text-xs tracking-wider text-slate-700 shadow-xl z-50">
          <button onClick={() => handleMobileScroll('home')} className="w-full text-left py-2.5 border-b border-slate-50 hover:text-[#2A838E] transition">HOME</button>
          <button onClick={() => handleMobileScroll('about')} className="w-full text-left py-2.5 border-b border-slate-50 hover:text-[#2A838E] transition">ABOUT</button>
          <button onClick={() => handleMobileScroll('services')} className="w-full text-left py-2.5 border-b border-slate-50 hover:text-[#2A838E] transition">SERVICES</button>
          <button onClick={() => handleMobileScroll('portfolio')} className="w-full text-left py-2.5 border-b border-slate-50 hover:text-[#2A838E] transition">PORTFOLIO</button>
          <button onClick={() => handleMobileScroll('contact')} className="w-full text-left py-2.5 hover:text-[#2A838E] transition">CONTACT</button>
          <button onClick={() => handleMobileScroll('contact')} className="w-full bg-[#2A838E] text-white py-3 rounded font-bold text-center block text-xs tracking-widest uppercase mt-2">
            FREE QUOTE
          </button>
        </div>
      )}
    </header>
  );
}