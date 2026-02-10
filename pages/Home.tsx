
import React, { useEffect } from 'react';
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
  useEffect(() => {
    document.title = "Cam Noble | Home & Digital Ecosystem";
  }, []);

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-white px-4">
        {/* Animated Background Element */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
           <svg className="w-[150%] h-[150%] text-zinc-50 opacity-60 transform -rotate-12 animate-pulse duration-[10s]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M38.7,-68.2C50.2,-61.8,59.8,-52.1,67.5,-40.8C75.2,-29.4,81.1,-16.4,82.4,-2.8C83.7,10.9,80.5,25.2,73.1,38.2C65.8,51.1,54.4,62.6,41,69.5C27.6,76.4,12.2,78.7,-2.8,83.1C-17.8,87.5,-32.4,94,-46.4,90C-60.4,85.9,-73.7,71.2,-81.1,54.7C-88.5,38.1,-90,19.6,-86.6,2.2C-83.2,-15.1,-74.9,-31.3,-64.1,-43.8C-53.2,-56.3,-39.8,-65.1,-26.4,-70.6C-13,-76,-0.1,-78.2,13,-76.4C26.1,-74.6,38.7,-68.2,38.7,-68.2Z" transform="translate(100 100)" />
           </svg>
        </div>
        
        <div className="relative z-20 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-4 mb-10 animate-in slide-in-from-top-4 duration-1000">
            <span className="h-px w-10 bg-green-800/20" />
            <span className="text-[11px] font-bold tracking-[0.6em] text-green-900 uppercase block">
              {BRAND_SLOGAN}
            </span>
            <span className="h-px w-10 bg-green-800/20" />
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-display font-black text-zinc-900 mb-12 leading-[0.85] tracking-tighter">
            Cam<br/>
            <span className="relative inline-block mt-4">
              <span className="shimmer-text drop-shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                Noble.
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent blur-sm" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed mb-20">
            High-efficiency cannabis processing meets tactical innovation. Providing precision at every industrial layer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/ecosystem-map" className="group relative bg-zinc-900 text-white px-14 py-7 rounded-full font-bold shadow-2xl hover:shadow-green-900/20 hover:bg-zinc-800 transition-all hover:-translate-y-1 active:scale-95 w-full sm:w-auto uppercase tracking-widest text-[11px] text-center overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Explore Ecosystem
                <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
            <Link to="/contact-hq" className="bg-white border border-zinc-200 text-zinc-900 px-14 py-7 rounded-full font-bold hover:bg-zinc-50 transition-all w-full sm:w-auto uppercase tracking-widest text-[11px] text-center border-b-4 border-b-zinc-100 active:border-b-0 active:translate-y-1">
              Command Center
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="bg-zinc-950 py-16 overflow-hidden border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center text-white/50 font-bold uppercase tracking-[0.3em] text-[10px] gap-12">
          <div className="flex flex-col items-center space-y-3 group text-center">
            <span className="text-4xl text-emerald-500 font-display font-black group-hover:scale-110 transition-transform">130+</span>
            <span className="text-[9px] opacity-70">Dispensaries Active</span>
          </div>
          <div className="h-12 w-px bg-white/10 hidden md:block" />
          <div className="flex flex-col items-center space-y-3 group text-center">
            <span className="text-4xl font-display font-black group-hover:scale-105 transition-all tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-amber-500 via-yellow-200 to-amber-600 uppercase">
              The Liquid Standard
            </span>
            <span className="text-[9px] opacity-70 uppercase tracking-[0.15em]">Concentrate Crafter</span>
          </div>
          <div className="h-12 w-px bg-white/10 hidden md:block" />
          <div className="flex flex-col items-center space-y-3 group text-center">
            <span className="text-4xl text-emerald-500 font-display font-black group-hover:scale-110 transition-transform">100%</span>
            <span className="text-[9px] opacity-70">Lab Precision</span>
          </div>
        </div>
      </section>

      {/* Main Ecosystem Grid */}
      <section id="ecosystem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-28">
          <div className="max-w-xl">
            <div className="h-1.5 w-20 bg-green-900 mb-8 rounded-full" />
            <h2 className="text-6xl font-display font-black text-zinc-900 tracking-tighter leading-none mb-8">Pillars of <br/>Precision.</h2>
            <p className="text-zinc-500 text-xl font-light leading-relaxed">
              Industrial heart. Whimsical heritage. Explore the five pathways of precision engineering and social wellness channels of the Noble Labs ecosystem.
            </p>
          </div>
          <div className="mt-12 md:mt-0 flex space-x-4 items-center">
            <Link to="/ecosystem-map" className="text-[11px] font-bold text-green-900 uppercase tracking-widest hover:translate-x-1 transition-all flex items-center group">
              Tactical Map View
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {NAVIGATION_ITEMS.map((item) => (
            <Link 
              key={item.id} 
              to={item.path}
              className="group relative overflow-hidden rounded-[4rem] bg-white border border-zinc-200 shadow-[0_30px_60px_rgba(0,0,0,0.03)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_60px_100px_rgba(0,0,0,0.08)] flex flex-col h-[640px] p-16"
            >
              <div className="mb-16 relative">
                 <div className="absolute -inset-6 bg-zinc-50 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="relative w-28 h-28 rounded-[2rem] bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-green-950 group-hover:text-white transition-all duration-700 shadow-sm border border-zinc-100 group-hover:border-green-800">
                    {IconMap[item.iconType]("w-12 h-12")}
                 </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-center space-x-4 mb-10">
                  <span className="inline-block text-[10px] font-black tracking-[0.25em] uppercase py-2 px-6 bg-zinc-100 text-zinc-500 rounded-full border border-zinc-200 group-hover:bg-green-900/5 group-hover:text-green-950 group-hover:border-green-900/10 transition-all duration-500">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-4xl font-display font-black mb-8 text-zinc-900 tracking-tighter group-hover:text-green-950 transition-colors leading-[0.9]">{item.title}</h3>
                <p className="text-zinc-500 text-lg leading-relaxed group-hover:text-zinc-600 transition-colors font-light">
                  {item.description}
                </p>

                <div className="mt-auto pt-14 flex items-center space-x-5 text-zinc-900 font-black text-[11px] tracking-[0.4em] uppercase">
                  <span className="border-b-2 border-zinc-100 group-hover:border-green-900 transition-all duration-500 pb-2">Technical Profile</span>
                  <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Partners / Wholesale CTA */}
      <section className="bg-zinc-950 py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-8 italic">Interested in Partnerships?</h2>
          <p className="text-zinc-400 text-xl font-light mb-12 max-w-2xl mx-auto">Cam is always looking for professional collaborators and retail partners for Noble Labs and Noble Seltzer.</p>
          <Link to="/wholesale" className="bg-green-600 hover:bg-green-500 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-green-900/20 inline-block">
            Inquire for Wholesale
          </Link>
        </div>
      </section>

      {/* Locations & Contact Dedicated Section */}
      <section id="contact-hub" className="bg-zinc-50 py-48 border-t border-zinc-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <h2 className="text-6xl font-display font-black text-zinc-900 mb-10 uppercase tracking-tighter leading-[0.85]">Connect with <br/><span className="text-green-900">Noble HQ.</span></h2>
              <p className="text-zinc-500 text-lg font-light mb-16 leading-relaxed max-w-md">Professional support for processing, retail, and innovation inquiries. All Buzz. No Bull.</p>
              
              <div className="space-y-12">
                <div className="flex items-center space-x-10 group">
                  <div className="w-20 h-20 rounded-[2rem] bg-white border border-zinc-200 flex items-center justify-center shadow-sm group-hover:border-green-800 group-hover:scale-110 transition-all duration-500">
                    <svg className="w-8 h-8 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] mb-3">Direct Support</p>
                    <div className="flex flex-col space-y-2">
                      <a href={`tel:${CONTACT_DATA.phone.lab}`} className="text-2xl font-display font-black text-zinc-900 hover:text-green-800 transition-colors tracking-tighter">LAB: {CONTACT_DATA.phone.lab}</a>
                      <a href={`tel:${CONTACT_DATA.phone.dispensary}`} className="text-2xl font-display font-black text-zinc-900 hover:text-green-800 transition-colors tracking-tighter">RETAIL: {CONTACT_DATA.phone.dispensary}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-10 group">
                  <div className="w-20 h-20 rounded-[2rem] bg-white border border-zinc-200 flex items-center justify-center shadow-sm group-hover:border-green-800 group-hover:scale-110 transition-all duration-500">
                    <svg className="w-8 h-8 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] mb-3">Email Command</p>
                    <div className="flex flex-col space-y-2">
                      <a href={`mailto:${CONTACT_DATA.email.general}`} className="text-2xl font-display font-black text-zinc-900 hover:text-green-800 transition-colors tracking-tighter">{CONTACT_DATA.email.general}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <Link to="/contact-hq" className="bg-zinc-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-green-900 transition-all inline-flex items-center shadow-2xl shadow-zinc-200">
                  Digital Command Center
                  <svg className="w-4 h-4 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {CONTACT_DATA.locations.map((loc, idx) => (
                <div key={idx} className="bg-white p-16 rounded-[4.5rem] border border-zinc-200 shadow-sm flex flex-col md:flex-row items-center justify-between group hover:border-green-800 transition-all duration-700 hover:shadow-2xl">
                  <div className="mb-10 md:mb-0 text-center md:text-left">
                    <span className="text-[10px] font-black tracking-[0.4em] text-green-800 uppercase mb-6 flex items-center justify-center md:justify-start">
                      <span className="h-1 w-6 bg-green-800/10 mr-4" />
                      {loc.type}
                    </span>
                    <h4 className="text-4xl font-display font-black text-zinc-900 mb-4 tracking-tighter leading-none">{loc.name}</h4>
                    <p className="text-zinc-500 mb-1 font-light text-xl leading-none">{loc.address}</p>
                    <p className="text-zinc-500 mb-8 font-light text-xl leading-none">{loc.city}</p>
                    
                    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                      {loc.phone && (
                        <a href={`tel:${loc.phone}`} className="flex items-center text-sm font-black text-zinc-900 hover:text-green-800 transition-colors uppercase tracking-widest">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                          {loc.phone}
                        </a>
                      )}
                      {loc.license && (
                        <p className="text-[9px] text-zinc-400 font-black uppercase tracking-widest bg-zinc-50 px-4 py-2 rounded-xl border border-zinc-100">
                          LIC: {loc.license}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address + ' ' + loc.city)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-20 h-20 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all group-hover:scale-110 active:scale-95 shadow-sm border border-zinc-100"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
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
