
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_DATA, BRAND_SLOGAN } from '../constants';

const WholesalePage: React.FC = () => {
  useEffect(() => {
    document.title = "Wholesale Command Center | Cam Noble";
    window.scrollTo(0, 0);
  }, []);

  const tracks = [
    {
      title: "Retail Partners",
      desc: "Stock Noble Seltzer or Noble Labs concentrates in your dispensary. We provide full marketing collateral and consistent batch quality.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
      )
    },
    {
      title: "Bulk Processing",
      desc: "Industrial extraction and manufacturing for cultivators. Utilize our high-capacity molecular separation for your flower.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
      )
    },
    {
      title: "Innovation & R&D",
      desc: "Collaborate with The Maker Space on custom additive manufacturing solutions or lab-specific hardware optimization.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m0 0l-2-1m2 1v2.5M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white py-32 px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-20">
          <Link to="/" className="inline-flex items-center text-zinc-500 hover:text-white mb-10 transition-colors group">
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Back to Ecosystem</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 leading-none">
                Wholesale<br/>
                <span className="shimmer-text">Command Center.</span>
              </h1>
              <p className="text-zinc-400 text-xl font-light leading-relaxed">
                Strategic partnerships built on industrial scale and molecular precision. Join the network distributing to 130+ dispensaries.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
               <span className="text-[10px] font-black text-green-500 uppercase tracking-widest block mb-4">System Status</span>
               <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white font-bold text-sm">Accepting New Partners</span>
               </div>
               <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Protocol: B2B_GATEWAY_V5</p>
            </div>
          </div>
        </div>

        {/* Strategic Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {tracks.map((track, i) => (
            <div key={i} className="bg-zinc-900/50 border border-white/5 p-12 rounded-[3.5rem] hover:border-green-800 transition-all duration-700 group">
              <div className="w-20 h-20 rounded-3xl bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-green-400 group-hover:bg-zinc-800/80 transition-all mb-10">
                {track.icon}
              </div>
              <h3 className="text-3xl font-display font-black mb-6 tracking-tighter text-white uppercase">{track.title}</h3>
              <p className="text-zinc-500 text-lg leading-relaxed font-light mb-8">{track.desc}</p>
              <div className="h-1 w-10 bg-green-900 group-hover:w-full transition-all duration-700 rounded-full" />
            </div>
          ))}
        </div>

        {/* Contact/Action Matrix */}
        <div className="bg-white p-16 md:p-24 rounded-[5rem] shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-transparent pointer-events-none" />
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-5xl font-display font-black text-zinc-900 mb-8 tracking-tighter uppercase leading-[0.85]">
                    Initiate <br/>
                    <span className="text-green-800">Operational Inquiries.</span>
                 </h2>
                 <p className="text-zinc-500 text-xl font-light mb-12 leading-relaxed">
                    All Buzz. No Bull. Contact Cam directly for strategic volume and laboratory integration details.
                 </p>
                 
                 <div className="space-y-6">
                    <a href={`mailto:${CONTACT_DATA.email.general}`} className="flex items-center p-6 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-green-800 transition-all group">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-zinc-400 group-hover:text-green-800 transition-colors">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                       </div>
                       <div className="ml-6">
                          <span className="block text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Email Command</span>
                          <span className="block text-xl font-display font-black text-zinc-900">{CONTACT_DATA.email.general}</span>
                       </div>
                    </a>
                    
                    <a href={`tel:${CONTACT_DATA.phone.lab}`} className="flex items-center p-6 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-green-800 transition-all group">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-zinc-400 group-hover:text-green-800 transition-colors">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                       </div>
                       <div className="ml-6">
                          <span className="block text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Secure Line</span>
                          <span className="block text-xl font-display font-black text-zinc-900">{CONTACT_DATA.phone.lab}</span>
                       </div>
                    </a>
                 </div>
              </div>
              
              <div className="bg-zinc-900 p-12 rounded-[4rem] text-center">
                 <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-ping" />
                 </div>
                 <h4 className="text-3xl font-display font-black text-white mb-6 uppercase tracking-tighter italic">Direct Lab Connection</h4>
                 <p className="text-zinc-400 font-light mb-10 leading-relaxed">
                    Our laboratory operations are designed for high-efficiency molecular separation. If you need clean, verified processing at scale, connect with HQ today.
                 </p>
                 <a href={`tel:${CONTACT_DATA.phone.lab}`} className="block bg-white text-zinc-950 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-green-400 transition-all active:scale-95">
                    Connect to Lab HQ
                 </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WholesalePage;
