import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[#2A838E] font-black uppercase tracking-widest text-xs block"> SERVICE QUOTATION</span>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Initialize Your Free Proposal</h2>
        </div>
        <div className="bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl">
          <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Your Name</label>
              <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2A838E] transition placeholder-slate-600" placeholder="Name" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Your Email</label>
              <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2A838E] transition placeholder-slate-600" placeholder="Email" />
            </div>
            <div className="sm:col-span-2 space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Scope / Specifications</label>
              <textarea rows="4" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2A838E] transition placeholder-slate-600" placeholder="Detail your required features..."></textarea>
            </div>
            <div className="sm:col-span-2 pt-2">
              <button type="submit" className="w-full bg-[#2A838E] hover:bg-[#1f626b] text-white font-bold py-4 rounded tracking-widest transition text-xs shadow-xl uppercase">Submit Ticket</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}