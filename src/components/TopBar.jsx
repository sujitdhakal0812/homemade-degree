import React from 'react';

export default function TopBar() {
  return (
    <div className="hidden lg:flex bg-slate-900 text-slate-300 text-xs py-3 px-12 justify-between items-center border-b border-slate-800">
      <div className="flex items-center space-x-6 font-medium">
        <span className="flex items-center"><span className="text-[#2A838E] mr-2">📍</span> Bharatpur-11, Nepal</span>
        <span className="flex items-center"><span className="text-[#2A838E] mr-2">📞</span> +977 9845929947</span>
        <span className="flex items-center"><span className="text-[#2A838E] mr-2">✉️</span> info@homemadedegree.com</span>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="w-7 h-7 bg-slate-800 hover:bg-[#2A838E] text-white flex items-center justify-center rounded-full transition text-[10px]">FB</a>
        <a href="#" className="w-7 h-7 bg-slate-800 hover:bg-[#2A838E] text-white flex items-center justify-center rounded-full transition text-[10px]">TW</a>
        <a href="#" className="w-7 h-7 bg-slate-800 hover:bg-[#2A838E] text-white flex items-center justify-center rounded-full transition text-[10px]">LN</a>
      </div>
    </div>
  );
}