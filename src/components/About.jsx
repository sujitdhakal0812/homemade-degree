import React from 'react';
import logo from '../assets/homemade-degree.png';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl flex items-center justify-center aspect-square max-w-md mx-auto shadow-inner">
          <img src={logo} alt="About Corporate Branding" className="w-64 h-64 object-contain" />
        </div>
        <div className="space-y-6">
          <span className="text-[#2A838E] font-black uppercase tracking-widest text-xs block"> ABOUT US</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            We Offer Scalable, Production-Ready Digital Ecosystems
          </h2>
          <p className="text-slate-600 leading-relaxed">
            At Homemade Degree, our deployment methods prevent project decay. We build reliable single-page frameworks, agile database endpoints, and fully secure serverless channels.
          </p>
          <div className="space-y-4 pt-2">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wide"><span>Web Engineering Frameworks</span><span>95%</span></div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"><div className="bg-[#2A838E] h-full rounded-full" style={{ width: '95%' }}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wide"><span>Mobile Application Platforms</span><span>85%</span></div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"><div className="bg-slate-900 h-full rounded-full" style={{ width: '85%' }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}