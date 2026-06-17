import React, { useState } from 'react';
import logo from '../assets/homemade-degree.png';

export default function Navbar({ scrollToSection, setSearchModalOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileScroll = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur shadow-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="Homemade Degree Logo" className="h-12 w-12 object-contain" />
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-slate-900 leading-none">HOMEMADE</span>
            <span className="text-[10px] font-black tracking-widest text-[#2A838E] uppercase mt-1">DEGREE IT SOLUTIONS</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8 font-bold text-xs tracking-wider text-slate-700">
          <button onClick={() => scrollToSection('home')} className="hover:text-[#2A838E] transition">HOME</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-[#2A838E] transition">ABOUT</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-[#2A838E] transition">SERVICES</button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#2A838E] transition">PORTFOLIO</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-[#2A838E] transition">CONTACT</button>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button onClick={() => setSearchModalOpen(true)} className="text-slate-700 hover:text-[#2A838E] p-2 transition">🔍</button>
          <button onClick={() => scrollToSection('contact')} className="bg-[#2A838E] hover:bg-[#1f626b] text-white px-5 py-2.5 rounded font-bold transition text-xs tracking-wider uppercase">
            Free Quote
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setSearchModalOpen(true)} className="text-slate-700">🔍</button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-700 focus:outline-none">
            <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 font-bold text-xs tracking-wider text-slate-700 shadow-xl">
          <button onClick={() => handleMobileScroll('home')} className="block w-full text-left py-2 hover:text-[#2A838E]">HOME</button>
          <button onClick={() => handleMobileScroll('about')} className="block w-full text-left py-2 hover:text-[#2A838E]">ABOUT</button>
          <button onClick={() => handleMobileScroll('services')} className="block w-full text-left py-2 hover:text-[#2A838E]">SERVICES</button>
          <button onClick={() => handleMobileScroll('portfolio')} className="block w-full text-left py-2 hover:text-[#2A838E]">PORTFOLIO</button>
          <button onClick={() => handleMobileScroll('contact')} className="block w-full text-left py-2 hover:text-[#2A838E]">CONTACT</button>
        </div>
      )}
    </header>
  );
}