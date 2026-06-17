import React, { useState, useEffect } from 'react';
import logo from '../assets/homemade-degree.png';

export default function Hero({ scrollToSection }) {
  const [counters, setCounters] = useState({ clients: 0, projects: 0, awards: 0 });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounters(prev => ({
//         clients: prev.clients < 1234 ? prev.clients + 11 : 1234,
//         projects: prev.projects < 4567 ? prev.projects + 37 : 4567,
//         awards: prev.awards < 99 ? prev.awards + 1 : 99,
//       }));
//     }, 15);
//     return () => clearInterval(interval);
//   }, []);

  return (
    <>
      <section id="home" className="relative pt-24 pb-28 md:pt-36 md:pb-44 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden border-b-8 border-[#2A838E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-[#2A838E] text-xs font-black tracking-widest uppercase bg-[#2A838E]/10 border border-[#2A838E]/30 px-4 py-2 rounded">
            SOLUTIONS & SERVICES
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none uppercase">
            Innovative Technology & <span className="text-[#2A838E]">Digital Architecture</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Homemade Degree transforms raw programming modules into highly optimized IT setups. We map clear frameworks directly to modern client production lines.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button onClick={() => scrollToSection('contact')} className="w-full sm:w-auto bg-[#2A838E] hover:bg-[#1f626b] text-white px-8 py-4 rounded font-bold text-xs tracking-wider transition uppercase shadow-xl shadow-[#2A838E]/20">
              Request A Quote
            </button>
            <button onClick={() => scrollToSection('services')} className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-slate-700 text-white px-8 py-4 rounded font-bold text-xs tracking-wider transition uppercase">
              Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Stats Counter integrated right under hero */}
      <section className="relative -mt-12 z-20 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
          <div className="p-8 text-center space-y-2">
            <h3 className="text-4xl font-black text-[#2A838E]">{counters.clients}+</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Happy Global Clients</p>
          </div>
          <div className="p-8 text-center space-y-2">
            <h3 className="text-4xl font-black text-slate-900">{counters.projects}+</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Projects Fully Shipped</p>
          </div>
          <div className="p-8 text-center space-y-2">
            <h3 className="text-4xl font-black text-[#2A838E]">{counters.awards}+</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Performance Awards</p>
          </div>
        </div>
      </section>
    </>
  );
}