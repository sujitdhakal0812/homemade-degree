import React, { useState } from 'react';

export default function Services() {
  const [activePortfolioFilter, setActivePortfolioFilter] = useState('all');

  const portfolioItems = [
    { id: 1, title: 'Web App Build', cat: 'web', desc: 'Enterprise SaaS Architecture' },
    { id: 2, title: 'iOS Platform UI', cat: 'app', desc: 'Secure Financial Application' },
    { id: 3, title: 'Cloud Infrastructure', cat: 'cloud', desc: 'Automated CI/CD DevOps Pipeline' },
    { id: 4, title: 'E-Commerce Framework', cat: 'web', desc: 'High-Conversion Online Store' },
  ];

  const filteredPortfolio = activePortfolioFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.cat === activePortfolioFilter);

  return (
    <>
      {/* Services Grid */}
      <section id="services" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-[#2A838E] font-black uppercase tracking-widest text-xs block">// OUR SERVICES</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Custom Architecture Modules Built From Scratch</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-slate-900 text-white font-bold rounded flex items-center justify-center text-lg mb-6 group-hover:bg-[#2A838E] transition">📊</div>
              <h4 className="text-lg font-black text-slate-900 mb-2">Systems Infrastructure</h4>
              <p className="text-xs text-slate-600 leading-relaxed">High-availability system configurations designed to support data routing without internal lag blocks.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-slate-900 text-white font-bold rounded flex items-center justify-center text-lg mb-6 group-hover:bg-[#2A838E] transition">🛡</div>
              <h4 className="text-lg font-black text-slate-900 mb-2">Cybersecurity Optimization</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Integrated JWT authorization locks, secure operational encryptions, and strict branch protection schemas.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-slate-900 text-white font-bold rounded flex items-center justify-center text-lg mb-6 group-hover:bg-[#2A838E] transition">⚙</div>
              <h4 className="text-lg font-black text-slate-900 mb-2">Cloud DevOps Services</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Automated cluster staging setups linked with real-time analytics monitoring environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter Grid */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[#2A838E] font-black uppercase tracking-widest text-xs block">// OUR PORTFOLIO</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Explore Our Latest Tech Solutions</h2>
          </div>

          <div className="flex justify-center space-x-2 mb-10 text-xs font-bold tracking-wider">
            {['all', 'web', 'app', 'cloud'].map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActivePortfolioFilter(cat)}
                className={`px-5 py-2.5 rounded uppercase border transition ${activePortfolioFilter === cat ? 'bg-[#2A838E] text-white border-[#2A838E]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#2A838E]'}`}
              >
                {cat === 'all' ? 'All Systems' : cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="bg-slate-50 rounded-xl border border-slate-200/60 overflow-hidden shadow-sm group hover:shadow-xl transition duration-300">
                <div className="bg-slate-900 h-48 flex items-center justify-center text-3xl opacity-90">💾</div>
                <div className="p-5 border-t border-slate-100">
                  <span className="text-[10px] font-black text-[#2A838E] tracking-widest uppercase">{item.cat} development</span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-1.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}