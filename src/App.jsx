import React, { useState } from 'react';
import logo from './assets/homemade-degree.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* --- HEADER / NAVIGATION --- */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src={logo} 
              alt="Homemade Degree" 
              className="h-12 w-12 object-contain rounded-lg" 
            />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Homemade <span className="text-teal-600">Degree</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-medium">
            <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-teal-600 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-teal-600 transition">About Us</button>
            <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-teal-600 transition">Services</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-teal-600 transition">Contact</button>
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-semibold transition shadow-md shadow-teal-600/10"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2 shadow-lg animate-fadeIn">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-slate-600 font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-slate-600 font-medium">About Us</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-slate-600 font-medium">Services</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-slate-600 font-medium">Contact</button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-center bg-teal-600 text-white py-2 rounded-md font-semibold"
            >
              Get Started
            </button>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-teal-50/50 to-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-teal-100 text-teal-800 text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider mb-4">
            Next-Gen IT Agency
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            We Craft Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Digital Solutions</span> From Scratch
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From intuitive web systems to scalable mobile applications, Homemade Degree brings industry-level craftsmanship to your custom software needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-slate-900/10"
            >
              Explore Our Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-8 py-4 rounded-xl font-bold transition"
            >
              Contact Team
            </button>
          </div>
        </div>
        {/* Subtle decorative background shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl pointer-events-none z-0"></div>
      </section>

      {/* --- ABOUT US SECTION --- */}
      <section id="about" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Empowering Businesses through Modern Engineering
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At **Homemade Degree**, we believe premium software development shouldn't be locked behind hyper-corporate walls. We build powerful, optimized, responsive systems customized entirely around your business strategy. 
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you are a startup scaling your operations or an established business transforming digitally, our team handles everything from UX design to secure deployment.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="text-2xl font-bold text-slate-900">100%</h4>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Tailored Codebases</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="text-2xl font-bold text-slate-900">24/7</h4>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Agile Support</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-3xl p-8 flex items-center justify-center border border-slate-200 shadow-inner min-h-[320px]">
              <img 
                src={logo} 
                alt="Homemade Degree Large Emblem" 
                className="w-48 h-48 object-contain opacity-90 drop-shadow-md"
              />
            </div>

          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">Our Core Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              High-Quality Tech Solutions Provided Worldwide
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition group hover:-translate-y-1 duration-300">
              <div className="h-12 w-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Web Frameworks</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Clean single-page frameworks, robust backends, and highly scalable administrative tools tailored to your workflows.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition group hover:-translate-y-1 duration-300">
              <div className="h-12 w-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Platforms</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Native-performance cross-platform iOS and Android mobile software engineered to provide high engagement rates.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition group hover:-translate-y-1 duration-300">
              <div className="h-12 w-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Solutions & DevOps</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Secure continuous integration pipelines, automated deployment, and resource-efficient cloud backend setups.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to deploy your platform?</h2>
              <p className="mt-4 text-slate-300 max-w-xl mx-auto leading-relaxed">
                Get in touch with our team today. Drop us an email or send an absolute baseline project specification to start scheduling development.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a 
                  href="mailto:contact@homemadedegree.com" 
                  className="w-full sm:w-auto inline-block bg-teal-600 hover:bg-teal-500 text-white px-6 py-3.5 rounded-xl font-bold transition text-center"
                >
                  Email Our Developers
                </a>
              </div>
              <p className="mt-6 text-xs text-slate-400">
                Or discover more through GitHub collaboration.
              </p>
            </div>
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-lg">Homemade <span className="text-teal-500">Degree</span></span>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Homemade Degree. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}