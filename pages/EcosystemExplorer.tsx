import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_ITEMS, BRAND_SLOGAN } from '../constants';

const EcosystemExplorer: React.FC = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const [sessionToken] = useState(() => Math.random().toString(36).substring(2, 11).toUpperCase());

  useEffect(() => {
    document.title = "Tactical Ecosystem Map | Cam Noble";
    const timer = setTimeout(() => setIsScanning(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const activeItem = NAVIGATION_ITEMS.find(n => n.id === activeId);

  const getModuleSpecs = (id: string) => {
    switch(id) {
      case 'noble-labs': return [
        { label: 'THROUGHPUT', value: 'IND-SCALE' },
        { label: 'PURITY_INDEX', value: '99.98%' },
        { label: 'NODE_COUNT', value: '130+' },
        { label: 'COMPLIANCE', value: 'MS-MED' }
      ];
      case 'noble-dispensary': return [
        { label: 'SERVICE_LOC', value: 'TYLERTOWN' },
        { label: 'ESTABLISHED', value: 'FLAGSHIP' },
        { label: 'ATMOSPHERE', value: 'CLINICAL+' },
        { label: 'VISIBILITY', value: 'OPEN-LAB' }
      ];
      case 'hill-country': return [
        { label: 'RETAIL_TIER', value: 'BOUTIQUE' },
        { label: 'GENETICS', value: 'PREMIUM' },
        { label: 'SELTER_STOCK', value: 'HIGH' },
        { label: 'REGION', value: 'OXFORD' }
      ];
      case 'noble-seltzer': return [
        { label: 'ONSET', value: '<15 MIN' },
        { label: 'CRAFT_TYPE', value: 'NANO-INF' },
        { label: 'MOOD_TIER', value: 'SOCIAL' },
        { label: 'CALORIC', value: 'ZERO' }
      ];
      case 'maker-lab': return [
        { label: 'PLATFORM', value: 'ADDITIVE' },
        { label: 'RES_LAYER', value: '0.05MM' },
        { label: 'PHASE', value: 'ITERATION' },
        { label: 'DEV_STATUS', value: 'BETA' }
      ];
      default: return [];
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-green-500 selection:text-black overflow-hidden relative">
      {/* Immersive HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 border-[1.5rem] md:border-[3rem] border-zinc-950">
        <div className="h-full w-full border border-white/5 relative">
          {/* Corner Elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-500/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-500/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/30" />
        </div>
      </div>

      {/* Main Experience */}
      <div className="relative z-0 h-screen w-full flex flex-col md:flex-row">
        
        {/* Module Selection Grid (Left / Top) */}
        <div className="flex-grow flex items-center justify-center p-8 md:p-12 overflow-hidden">
          {/* Scaled down container for "zoom-out" feel */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl w-full transform scale-[0.75] md:scale-[0.8] lg:scale-[0.85] transition-transform duration-700">
            {NAVIGATION_ITEMS.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveId(item.id)}
                className={`relative aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden transition-all duration-700 group border ${
                  activeId === item.id 
                    ? 'border-green-500 bg-green-500/10 shadow-[0_0_50px_rgba(16,185,129,0.2)] scale-105' 
                    : 'border-white/5 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center">
                  <div className={`mb-3 transition-all duration-500 ${activeId === item.id ? 'text-green-400 scale-110' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                    {item.iconType === 'lab' && <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
                    {item.iconType === 'retail' && <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                    {item.iconType === 'boutique' && <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                    {item.iconType === 'seltzer' && <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    {item.iconType === 'maker' && <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m0 0l-2-1m2 1v2.5M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>}
                  </div>
                  <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] transition-colors ${activeId === item.id ? 'text-white' : 'text-zinc-600'}`}>
                    {item.id === 'hill-country' ? 'THE HILL' : item.id === 'maker-lab' ? 'MAKER SPACE' : item.title.split(' ')[0]}
                  </span>
                </div>
                {/* Visual Scanning Effect */}
                {activeId === item.id && (
                  <motion.div 
                    initial={{ top: '-100%' }}
                    animate={{ top: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    className="absolute left-0 right-0 h-1 bg-green-400/20 blur-sm pointer-events-none"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tactical Dossier (Right / Bottom) */}
        <div className="w-full md:w-[460px] h-full bg-zinc-900/50 backdrop-blur-3xl border-l border-white/5 p-8 md:p-14 flex flex-col justify-between overflow-y-auto no-scrollbar relative z-30">
          <AnimatePresence mode="wait">
            {activeId ? (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex-grow flex flex-col"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold text-green-500 uppercase tracking-[0.5em]">Module Active</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase mb-6 leading-none text-white">
                  {activeItem?.title}
                </h2>
                
                <p className="text-zinc-400 font-light text-lg mb-10 leading-relaxed italic">
                  "{activeItem?.description}"
                </p>

                {/* Technical HUD Grid */}
                <div className="grid grid-cols-2 gap-4 mb-12">
                  {getModuleSpecs(activeId).map(spec => (
                    <div key={spec.label} className="bg-white/5 p-4 rounded-3xl border border-white/5">
                      <span className="block text-[8px] font-bold text-zinc-600 uppercase tracking-widest mb-1">{spec.label}</span>
                      <span className="block text-xs font-mono text-zinc-200 tracking-tight">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto space-y-4">
                   <Link 
                    to={activeItem?.path || '/'}
                    className="w-full bg-white text-zinc-950 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center group hover:bg-green-400 transition-all active:scale-95 shadow-2xl shadow-white/5"
                   >
                    Initiate System Dive
                    <svg className="w-4 h-4 ml-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                   </Link>
                   <button 
                    onClick={() => setActiveId(null)}
                    className="w-full text-zinc-500 hover:text-white py-2 text-[10px] font-bold uppercase tracking-[0.4em] transition-all"
                   >
                    [ Deselect Module ]
                   </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-grow flex flex-col justify-center text-center md:text-left"
              >
                <div className="mb-12">
                   <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto md:mx-0 flex items-center justify-center mb-8 animate-pulse">
                      <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                   </div>
                   <h2 className="text-3xl font-display font-black text-zinc-800 uppercase tracking-tighter mb-4 italic">Standby Mode</h2>
                   <p className="text-zinc-700 text-xs font-bold uppercase tracking-widest leading-relaxed max-w-xs mx-auto md:mx-0">
                    Interact with a module on the tactical grid to display engineering dossier.
                   </p>
                </div>
                <div className="mt-auto pt-10 border-t border-white/5">
                  <span className="text-[10px] font-bold text-zinc-800 uppercase tracking-[0.6em]">Core Framework: 4.1.2_STABLE</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation & HUD Header */}
      <div className="absolute top-10 left-10 md:top-14 md:left-14 right-10 md:right-14 z-50 flex justify-between items-start pointer-events-none">
        <div className="flex flex-col space-y-4 pointer-events-auto">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center bg-zinc-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-white hover:bg-zinc-800 transition-all group shadow-xl"
          >
            <svg className="w-4 h-4 mr-3 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Hub</span>
          </button>
          
          <div className="pl-6 pt-2">
            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest block italic">MAP_ID: {sessionToken}</span>
          </div>
        </div>

        <div className="hidden md:flex flex-col text-right">
           <span className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-500 mb-1">Ecosystem Map</span>
           <span className="text-[8px] font-mono text-green-500/40 uppercase tracking-widest">ENCRYPT: SEC_GCM_256</span>
        </div>
      </div>

      {/* Intro Scanning Overlay */}
      <AnimatePresence>
        {isScanning && (
          <motion.div 
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[200] bg-zinc-950 flex flex-col items-center justify-center p-8"
          >
            <div className="relative">
               <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="w-48 h-48 rounded-full border border-green-500/10 border-t-green-500/50"
               />
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xs font-mono text-green-500 animate-pulse tracking-widest mb-2">SCANNING_NODES</span>
                  <div className="w-32 h-1 bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.8 }}
                      className="h-full bg-green-500"
                    />
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EcosystemExplorer;