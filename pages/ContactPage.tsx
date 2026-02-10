
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_DATA, BRAND_SLOGAN, SOCIAL_LINKS, ROBUST_FAQ } from '../constants';

const ContactPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Digital Identity Card | Cam Noble";
    window.scrollTo(0, 0);
  }, []);

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Cam Noble
ORG:Noble Labs
TITLE:Founder & Owner
TEL;TYPE=WORK,VOICE:${CONTACT_DATA.phone.lab}
TEL;TYPE=CELL,VOICE:${CONTACT_DATA.phone.dispensary}
EMAIL;TYPE=PREF,INTERNET:${CONTACT_DATA.email.general}
URL:https://www.noblelabsms.com/
ADR;TYPE=WORK,POSTAL,PARCEL:;;241 Old Hwy 98 E;Tylertown;MS;39667;USA
NOTE:All Buzz. No Bull.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Cam_Noble.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white py-32 px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors group">
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Exit Command Center</span>
          </Link>
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-4 leading-none">
            Digital<br/>
            <span className="shimmer-text">Identity Card</span>
          </h1>
          <p className="text-zinc-500 font-bold tracking-[0.6em] uppercase text-[10px] mb-4">{BRAND_SLOGAN}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Card Column */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                 <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-500 text-[10px] font-bold uppercase tracking-widest">Verified Master Node</span>
                </div>
                
                <h2 className="text-5xl font-display font-black text-white mb-2 leading-none">Cam Noble</h2>
                <p className="text-zinc-400 font-light text-xl mb-12 italic">Visionary, Engineer, Operator</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:border-green-800/50 transition-colors">
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Primary Laboratory</p>
                    <a href={`tel:${CONTACT_DATA.phone.lab}`} className="text-xl font-bold text-white hover:text-green-400 transition-colors">{CONTACT_DATA.phone.lab}</a>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:border-green-800/50 transition-colors">
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Email Gateway</p>
                    <a href={`mailto:${CONTACT_DATA.email.general}`} className="text-lg font-bold text-white hover:text-green-400 transition-colors break-all">{CONTACT_DATA.email.general}</a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={downloadVCard}
                    className="flex-grow bg-white text-zinc-950 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-green-400 transition-all flex items-center justify-center shadow-xl active:scale-95"
                  >
                    Save to Contacts
                    <svg className="w-4 h-4 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Social Matrix */}
            <div className="mt-8 grid grid-cols-2 gap-4">
               <a href={SOCIAL_LINKS.brandInstagram} target="_blank" rel="noopener noreferrer" className="bg-zinc-900/50 border border-white/5 p-8 rounded-[3rem] flex flex-col items-center hover:border-green-800 transition-all group">
                  <svg className="w-8 h-8 text-zinc-400 group-hover:text-white mb-4 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span className="text-[10px] font-black uppercase tracking-widest">Noble Labs</span>
               </a>
               <a href={SOCIAL_LINKS.seltzerInstagram} target="_blank" rel="noopener noreferrer" className="bg-zinc-900/50 border border-white/5 p-8 rounded-[3rem] flex flex-col items-center hover:border-green-800 transition-all group">
                  <svg className="w-8 h-8 text-zinc-400 group-hover:text-white mb-4 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span className="text-[10px] font-black uppercase tracking-widest">Noble Seltzer</span>
               </a>
            </div>
          </div>

          {/* All 5 Locations Detailed Matrix */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-2 px-6">Ecosystem Nodes</p>
            {CONTACT_DATA.locations.map((loc, i) => (
              <div key={i} className="bg-zinc-900/20 border border-white/5 p-8 rounded-[3rem] group hover:border-green-800/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">{loc.type}</span>
                  {loc.license && <span className="text-[8px] font-mono text-zinc-600 uppercase">ID: {loc.license}</span>}
                </div>
                <h3 className="text-xl font-display font-black text-white mb-2 tracking-tighter">{loc.name}</h3>
                <p className="text-zinc-500 text-sm mb-4 leading-relaxed font-light">{loc.address}, {loc.city}</p>
                {loc.phone && (
                  <a href={`tel:${loc.phone}`} className="inline-flex items-center text-[9px] font-black text-zinc-400 group-hover:text-green-500 transition-colors uppercase tracking-widest">
                    Link: {loc.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* System FAQ / Robust Information Section */}
        <div className="mt-32 pt-24 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-display font-black text-white mb-4 tracking-tighter italic">System Protocols</h2>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Knowledge Base & FAQ</p>
            </div>
            <div className="mt-4 md:mt-0">
               <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.4em]">Index: v5.0.1_STABLE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {ROBUST_FAQ.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-900/10 border border-white/5 rounded-3xl overflow-hidden transition-all duration-500"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 text-left flex justify-between items-center group"
                >
                  <span className="text-sm font-black uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">{faq.question}</span>
                  <svg 
                    className={`w-4 h-4 text-zinc-600 transition-transform duration-500 ${activeFaq === idx ? 'rotate-45 text-green-500' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {activeFaq === idx && (
                  <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-zinc-500 text-sm leading-relaxed font-light border-l border-green-900/50 pl-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center pb-20">
          <p className="text-zinc-700 font-bold uppercase tracking-[1em] text-[8px] mb-8">Noble Ecosystem Secure Hub</p>
          <div className="flex justify-center space-x-6">
            <div className="w-1 h-1 rounded-full bg-zinc-800" />
            <div className="w-1 h-1 rounded-full bg-green-900" />
            <div className="w-1 h-1 rounded-full bg-zinc-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
