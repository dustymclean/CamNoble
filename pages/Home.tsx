
import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS, CONTACT_DATA, BRAND_SLOGAN } from '../constants';

const IconMap = {
  lab: (className: string) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  ),
  retail: (className: string) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  ),
  boutique: (className: string) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  ),
  seltzer: (className: string) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  maker: (className: string) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m0 0l-2-1m2 1v2.5M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
  )
};

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle Decorative Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
           <svg className="w-[120%] h-[120%] text-zinc-50 opacity-40 transform -rotate-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M38.7,-68.2C50.2,-61.8,59.8,-52.1,67.5,-40.8C75.2,-29.4,81.1,-16.4,82.4,-2.8C83.7,10.9,80.5,25.2,73.1,38.2C65.8,51.1,54.4,62.6,41,69.5C27.6,76.4,12.2,78.7,-2.8,83.1C-17.8,87.5,-32.4,94,-46.4,90C-60.4,85.9,-73.7,71.2,-81.1,54.7C-88.5,38.1,-90,19.6,-86.6,2.2C-83.2,-15.1,-74.9,-31.3,-64.1,-43.8C-53.2,-56.3,-39.8,-65.1,-26.4,-70.6C-13,-76,-0.1,-78.2,13,-76.4C26.1,-74.6,38.7,-68.2,38.7,-68.2Z" transform="translate(100 100)" />
           </svg>
        </div>
        
        <div className="relative z-20 max-w-6xl mx-auto text-center px-4">
          <div className="inline-flex items-center space-x-3 mb-8 animate-in slide-in-from-top-4 duration-700">
            <span className="h-px w-8 bg-green-800/30" />
            <span className="text-[10px] font-bold tracking-[0.5em] text-green-800 uppercase block">
              {BRAND_SLOGAN}
            </span>
            <span className="h-px w-8 bg-green-800/30" />
          </div>
          
          <h1 className="text-6xl md:text-9xl font-display font-black text-zinc-900 mb-10 leading-[0.95] tracking-tighter">
            Digital<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-900 via-emerald-800 to-green-700">Architecture.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed mb-16 px-4">
            The Hub of Cam Noble: Blending high-efficiency cannabis processing with precision personal innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#ecosystem" className="bg-zinc-900 text-white px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-green-900/10 hover:bg-zinc-800 transition-all hover:-translate-y-1 active:scale-95 w-full sm:w-auto uppercase tracking-widest text-xs">
              Explore Ecosystem
            </a>
            <a href="#contact-hub" className="bg-white border border-zinc-200 text-zinc-900 px-12 py-6 rounded-full font-bold hover:bg-zinc-50 transition-all w-full sm:w-auto uppercase tracking-widest text-xs">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="bg-zinc-900 py-12 overflow-hidden border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center text-white/60 font-bold uppercase tracking-[0.25em] text-[10px] gap-10">
          <div className="flex flex-col items-center space-y-2 group">
            <span className="text-3xl text-emerald-400 font-display font-black group-hover:scale-110 transition-transform">130+</span>
            <span className="opacity-60">Dispensaries Served</span>
          </div>
          <div className="h-8 w-px bg-white/5 hidden md:block" />
          <div className="flex flex-col items-center space-y-2 group">
            <span className="text-3xl text-emerald-400 font-display font-black group-hover:scale-110 transition-transform">GOLD</span>
            <span className="opacity-60">Watermelon Seltzer</span>
          </div>
          <div className="h-8 w-px bg-white/5 hidden md:block" />
          <div className="flex flex-col items-center space-y-2 group">
            <span className="text-3xl text-emerald-400 font-display font-black group-hover:scale-110 transition-transform">100%</span>
            <span className="opacity-60">Lab Transparency</span>
          </div>
        </div>
      </section>

      {/* Main Ecosystem Grid */}
      <section id="ecosystem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="max-w-xl">
            <h2 className="text-5xl font-display font-black text-zinc-900 tracking-tight leading-none mb-6">Pillars of <br/>Innovation.</h2>
            <p className="text-zinc-500 text-lg font-light leading-relaxed">Industrial heart. Whimsical heritage. Five distinct pathways of precision engineering and social wellness.</p>
          </div>
          <div className="mt-8 md:mt-0 flex space-x-3 items-center">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mr-4">Select to Deep Dive</span>
            <div className="h-px w-20 bg-zinc-200" />
            <div className="h-3 w-3 rounded-full bg-green-800" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NAVIGATION_ITEMS.map((item) => (
            <Link 
              key={item.id} 
              to={item.path}
              className="group relative overflow-hidden rounded-[3rem] bg-white border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] flex flex-col h-[560px] p-12"
            >
              {/* Card Icon Container */}
              <div className="mb-14 relative">
                 <div className="absolute -inset-4 bg-zinc-50 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="relative w-24 h-24 rounded-[1.8rem] bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-green-900 group-hover:text-white transition-all duration-700 shadow-sm border border-zinc-50 group-hover:border-green-800">
                    {IconMap[item.iconType]("w-10 h-10")}
                 </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-center space-x-3 mb-8">
                  <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase py-1.5 px-5 bg-zinc-100 text-zinc-500 rounded-full border border-zinc-200 group-hover:bg-green-900/5 group-hover:text-green-900 group-hover:border-green-900/10 transition-all duration-500">
                    {item.category}
                  </span>
                  {item.id === 'maker-lab' && (
                    <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase py-1.5 px-5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                      Innovating
                    </span>
                  )}
                </div>
                
                <h3 className="text-3xl font-display font-black mb-6 text-zinc-900 tracking-tight group-hover:text-green-950 transition-colors">{item.title}</h3>
                <p className="text-zinc-500 text-base leading-relaxed max-w-sm group-hover:text-zinc-600 transition-colors font-light">
                  {item.description}
                </p>

                <div className="mt-auto pt-10 flex items-center space-x-4 text-zinc-900 font-bold text-[10px] tracking-[0.3em] uppercase transition-all">
                  <span className="border-b-2 border-zinc-100 group-hover:border-green-800 transition-all duration-500 pb-1 italic">Technical Profile</span>
                  <div className="w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500">
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Locations & Contact Dedicated Section */}
      <section id="contact-hub" className="bg-zinc-50 py-40 border-t border-zinc-200 relative overflow-hidden">
        {/* Subtle Side Pattern */}
        <div className="absolute right-0 top-0 h-full w-1/4 opacity-5 pointer-events-none">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/></pattern></defs>
              <rect width="100" height="100" fill="url(#grid)" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-display font-black text-zinc-900 mb-8 uppercase tracking-tighter leading-none">Connect with <br/><span className="text-green-800">Noble HQ.</span></h2>
              <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-200 mb-12 shadow-sm inline-block">
                <p className="text-zinc-500 text-sm mb-2 uppercase tracking-widest font-bold">Laboratory & Flagship Hours</p>
                <p className="text-xl font-display font-bold text-zinc-900">Monday – Friday <span className="text-zinc-400 mx-2">|</span> 9:00 AM – 5:00 PM</p>
              </div>
              
              <div className="space-y-10">
                <div className="flex items-center space-x-8 group">
                  <div className="w-16 h-16 rounded-[1.8rem] bg-white border border-zinc-200 flex items-center justify-center shadow-sm group-hover:border-green-800 transition-all duration-500">
                    <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-2">Technical & Support Line</p>
                    <div className="flex flex-col space-y-1">
                      <a href={`tel:${CONTACT_DATA.phone.lab}`} className="text-xl font-display font-bold text-zinc-900 hover:text-green-800 transition-colors tracking-tight">LAB: {CONTACT_DATA.phone.lab}</a>
                      <a href={`tel:${CONTACT_DATA.phone.dispensary}`} className="text-xl font-display font-bold text-zinc-900 hover:text-green-800 transition-colors tracking-tight">RETAIL: {CONTACT_DATA.phone.dispensary}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-8 group">
                  <div className="w-16 h-16 rounded-[1.8rem] bg-white border border-zinc-200 flex items-center justify-center shadow-sm group-hover:border-green-800 transition-all duration-500">
                    <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-2">Direct Messaging</p>
                    <div className="flex flex-col space-y-1">
                      <a href={`mailto:${CONTACT_DATA.email.general}`} className="text-xl font-display font-bold text-zinc-900 hover:text-green-800 transition-colors tracking-tight">{CONTACT_DATA.email.general}</a>
                      <a href={`mailto:${CONTACT_DATA.email.dispensary}`} className="text-xl font-display font-bold text-zinc-900 hover:text-green-800 transition-colors tracking-tight">{CONTACT_DATA.email.dispensary}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              {CONTACT_DATA.locations.map((loc, idx) => (
                <div key={idx} className="bg-white p-12 rounded-[3.5rem] border border-zinc-200 shadow-sm flex flex-col group hover:border-green-800 transition-all duration-700 hover:shadow-xl">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-green-800 uppercase mb-6 flex items-center">
                    <span className="h-1 w-4 bg-green-800/20 mr-3" />
                    {loc.type}
                  </span>
                  <h4 className="text-3xl font-display font-black text-zinc-900 mb-3 tracking-tight">{loc.name}</h4>
                  <p className="text-zinc-500 mb-1 font-light text-lg">{loc.address}</p>
                  <p className="text-zinc-500 mb-8 font-light text-lg">{loc.city}</p>
                  
                  <div className="space-y-2 mb-10">
                    {loc.phone && (
                      <a href={`tel:${loc.phone}`} className="flex items-center text-sm font-bold text-zinc-900 hover:text-green-800 transition-colors">
                        <svg className="w-4 h-4 mr-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        {loc.phone}
                      </a>
                    )}
                    {loc.license && (
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest bg-zinc-50 px-3 py-1.5 rounded-lg inline-block">
                        License: {loc.license}
                      </p>
                    )}
                  </div>
                  
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address + ' ' + loc.city)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center font-bold text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-all group-hover:text-zinc-900"
                  >
                    View Map Details
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
