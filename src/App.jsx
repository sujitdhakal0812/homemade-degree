import React, { useState } from 'react';

// Import our standalone engineering modules
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Core orchestration scroll function passed down to children
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#2A838E] selection:text-white">
      
      <TopBar />
      
      <Navbar scrollToSection={scrollToSection} setSearchModalOpen={setSearchModalOpen} />
      
      <Hero scrollToSection={scrollToSection} />
      
      <About />
      
      <Services />
      
      <Contact />

      {/* Pop-up Global Search Overlay Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl relative">
            <button onClick={() => setSearchModalOpen(false)} className="absolute -top-12 right-0 text-white text-2xl hover:text-[#2A838E]">✕ Close</button>
            <div className="flex items-center border-b-2 border-[#2A838E] py-2">
              <input type="text" className="w-full bg-transparent text-white text-xl focus:outline-none placeholder-slate-500" placeholder="Type keyword and press Enter..." autoFocus />
              <span className="text-2xl">🔍</span>
            </div>
          </div>
        </div>
      )}

      {/* Corporate Context Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900 text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-slate-400">&copy; {new Date().getFullYear()} <span className="text-white font-bold">HOMEMADE DEGREE</span>. All rights reserved.</p>
          <div className="space-x-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}