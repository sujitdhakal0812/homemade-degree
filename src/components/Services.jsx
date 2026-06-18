import React, { useState } from 'react';

export default function Services() {
  const [activePortfolioFilter, setActivePortfolioFilter] = useState('all');

  const portfolioItems = [
    { id: 1, title: 'Web App Build', cat: 'web', desc: 'Enterprise SaaS Architecture' },
    { id: 2, title: 'iOS Platform UI', cat: 'app', desc: 'Secure Financial Application' },
    { id: 3, title: 'SEO Copywriting', cat: 'writing', desc: 'High-Ranking Technical Documentation & Strategy' },
    { id: 4, title: 'E-Commerce Framework', cat: 'web', desc: 'High-Conversion Online Store' },
  ];

  const filteredPortfolio = activePortfolioFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.cat === activePortfolioFilter);

  return (
    <>
      {/* --- SERVICES GRID SECTION --- */}
      <section id="services" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-[#2A838E] font-black uppercase tracking-widest text-xs block">OUR SERVICES</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Custom Software & Content Modules Built From Scratch</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1: Systems & Web Infrastructure */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-slate-900 text-white rounded flex items-center justify-center mb-6 group-hover:bg-[#2A838E] transition duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2">Systems Infrastructure</h4>
              <p className="text-xs text-slate-600 leading-relaxed">High-availability system configurations designed to support data routing without internal lag blocks.</p>
            </div>

            {/* Service 2: Cybersecurity Optimization (FIXED UNTERMINATED STRING) */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-slate-900 text-white rounded flex items-center justify-center mb-6 group-hover:bg-[#2A838E] transition duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2">Cybersecurity Optimization</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Integrated JWT authorization locks, secure operational encryptions, and strict branch protection schemas.</p>
            </div>

            {/* Service 3: Content Writing & SEO Strategy */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-slate-900 text-white rounded flex items-center justify-center mb-6 group-hover:bg-[#2A838E] transition duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2">Content Writing </h4>
              <p className="text-xs text-slate-600 leading-relaxed">High-performance copywriting, technical documentation, and keyword positioning engineered for search visibility.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- PORTFOLIO FILTER GRID SECTION --- */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[#2A838E] font-black uppercase tracking-widest text-xs block">OUR PORTFOLIO</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Explore Our Latest Solutions</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10 text-xs font-bold tracking-wider">
            {['all', 'web', 'app', 'writing'].map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActivePortfolioFilter(cat)}
                className={`px-5 py-2.5 rounded uppercase border transition whitespace-nowrap ${activePortfolioFilter === cat ? 'bg-[#2A838E] text-white border-[#2A838E]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#2A838E]'}`}
              >
                {cat === 'all' ? 'All Systems' : cat === 'writing' ? 'Writing' : cat}
              </button>
            ))}
          </div>

          {/* Grid Display */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="bg-slate-50 rounded-xl border border-slate-200/60 overflow-hidden shadow-sm group hover:shadow-xl transition duration-300">
                <div className="bg-slate-900 h-48 flex items-center justify-center text-[#2A838E] transition">
                  {item.cat === 'web' && (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
                  )}
                  {item.cat === 'app' && (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                  )}
                  {item.cat === 'writing' && (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                  )}
                </div>
                <div className="p-5 border-t border-slate-100 bg-white">
                  <span className="text-[10px] font-black text-[#2A838E] tracking-widest uppercase">{item.cat} services</span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}