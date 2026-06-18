import React, { useState, useEffect } from 'react';


export default function Hero({ 
  scrollToSection, 
  logo,
  targetClients = 0,  
  targetProjects = 0,  
  targetAwards = 0     
}) {
  
  const [counters, setCounters] = useState({ clients: 0, projects: 0, awards: 0 });

  useEffect(() => {
    
    if (targetClients === 0 && targetProjects === 0 && targetAwards === 0) {
      setCounters({ clients: 0, projects: 0, awards: 0 });
      return;
    }

    const interval = setInterval(() => {
      setCounters(prev => {
        const nextClients = prev.clients < targetClients ? prev.clients + Math.ceil(targetClients / 20) : targetClients;
        const nextProjects = prev.projects < targetProjects ? prev.projects + Math.ceil(targetProjects / 20) : targetProjects;
        const nextAwards = prev.awards < targetAwards ? prev.awards + 1 : targetAwards;

        if (nextClients === targetClients && nextProjects === targetProjects && nextAwards === targetAwards) {
          clearInterval(interval);
        }

        return {
          clients: nextClients > targetClients ? targetClients : nextClients,
          projects: nextProjects > targetProjects ? targetProjects : nextProjects,
          awards: nextAwards > targetAwards ? targetAwards : nextAwards,
        };
      });
    }, 30);

    return () => clearInterval(interval);
  }, [targetClients, targetProjects, targetAwards]);

  return (
    <>
      {/* Hero Core Block */}
      <section id="home" className="relative pt-16 pb-24 md:pt-28 md:pb-36 lg:pt-36 lg:pb-44 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden border-b-8 border-[#2A838E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Content Unit */}
          <div className="w-full lg:w-7xl text-center lg:text-left space-y-6 order-2 lg:order-1">
            <span className="inline-block text-[#2A838E] text-[10px] sm:text-xs font-black tracking-widest uppercase bg-[#2A838E]/10 border border-[#2A838E]/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded">
            
            </span>
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-tight uppercase">
              Innovative Technology & <span className="text-[#2A838E]">Digital Architecture</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Homemade Degree transforms raw programming modules into highly optimized IT setups. We map clear frameworks directly to modern client production lines.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-md mx-auto lg:mx-0">
              <button onClick={() => scrollToSection('contact')} className="w-full sm:w-auto bg-[#2A838E] hover:bg-[#1f626b] text-white px-8 py-3.5 sm:py-4 rounded font-bold text-xs tracking-wider transition uppercase shadow-xl shadow-[#2A838E]/20 shrink-0">
                Request A Quote
              </button>
              <button onClick={() => scrollToSection('services')} className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-slate-700 text-white px-8 py-3.5 sm:py-4 rounded font-bold text-xs tracking-wider transition uppercase shrink-0">
                Our Services
              </button>
            </div>
          </div>

          

        </div>
      </section>

      {/* Fully Multi-Device Responsive Stats Bar Counter */}
      <section className="relative -mt-10 sm:-mt-12 z-20 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
          <div className="p-6 sm:p-8 text-center space-y-1 sm:space-y-2">
            <h3 className="text-3xl sm:text-4xl font-black text-[#2A838E] tracking-tight">{counters.clients}+</h3>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Happy Global Clients</p>
          </div>
          <div className="p-6 sm:p-8 text-center space-y-1 sm:space-y-2">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{counters.projects}+</h3>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Projects Fully Shipped</p>
          </div>
          <div className="p-6 sm:p-8 text-center space-y-1 sm:space-y-2">
            <h3 className="text-3xl sm:text-4xl font-black text-[#2A838E] tracking-tight">{counters.awards}+</h3>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Performance Awards</p>
          </div>
        </div>
      </section>
    </>
  );
}