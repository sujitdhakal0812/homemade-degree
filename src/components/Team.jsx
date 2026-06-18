import React from 'react';

export default function Team() {
 
  const managementTeam = [
    {
      id: 1,
      name: 'Sujit Dhakal',
      role: 'Chief Executive Officer / Founder',
      bio: 'Leading corporate strategy, framework architecture decisions, and client ecosystem deployment models.',
      avatarInitials: 'SD'
    },
    {
      id: 2,
      name: 'Nishan Tamang',
      role: 'Chief Technology Officer/ Co-Founder',
      bio: 'Overseeing network infrastructure stability, continuous Git branches orchestration, and software pipelines.',
      avatarInitials: 'NT'
    },
    {
      id: 3,
      name: '-------------',
      role: 'Head of Content & SEO Strategy',
      bio: 'Directing high-performance asset copywriting, semantic text structures, and organic positioning modules.',
      avatarInitials: '--'
    },

{
      id: 4,
      name: 'Sanju Gurung',
      role: 'Co-Founder / Senior Developer',
      bio: 'Directing high-performance asset copywriting, semantic text structures, and organic positioning modules.',
      avatarInitials: 'SG'
    }



  ];

  return (
    <section id="team" className="py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[#2A838E] font-black uppercase tracking-widest text-xs block">EXECUTIVE BOARD</span>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl uppercase">Management Team</h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            The engineering minds directing organizational pipelines and technological operations at Homemade Degree.
          </p>
        </div>

        {/* Responsive Grid Layout (Mobile: 1, Tablet: 2, Laptop/Desktop: 3 Column) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementTeam.map((member) => (
            <div 
              key={member.id} 
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800/80 shadow-xl hover:border-[#2A838E]/50 transition duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Modern Minimalist Placeholder Avatar Badge (Loads instantly, perfectly centered) */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#2A838E] to-cyan-600 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-[#2A838E]/10 select-none group-hover:scale-105 transition-transform duration-300">
                  {member.avatarInitials}
                </div>

                {/* Identity Framework */}
                <div className="space-y-1">
                  <h4 className="text-lg font-black tracking-tight text-white group-hover:text-[#2A838E] transition duration-300">
                    {member.name}
                  </h4>
                  <p className="text-[11px] font-bold text-[#2A838E] uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>

                {/* Bio text */}
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  {member.bio}
                </p>
              </div>

              {/* Minimalist Corporate Social Icon Anchors */}
              <div className="pt-6 mt-6 border-t border-slate-900 flex items-center space-x-4 text-slate-500">
                <a href="#" className="hover:text-white transition text-xs font-bold tracking-wider uppercase">LinkedIn</a>
                <span className="text-slate-800 text-xs">•</span>
                <a href="#" className="hover:text-white transition text-xs font-bold tracking-wider uppercase">Contact</a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}