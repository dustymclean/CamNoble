
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NAVIGATION_ITEMS, BRAND_SLOGAN, CONTACT_DATA } from '../constants';

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

const MiniPage: React.FC = () => {
  const { id } = useParams();
  const item = NAVIGATION_ITEMS.find(i => i.path === `/${id}`);
  const hillCountryData = CONTACT_DATA.locations.find(l => l.name === "Hill Country Cannabis");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-zinc-300">Section not found</h1>
          <Link to="/" className="text-green-800 font-bold underline uppercase tracking-widest text-sm">Back to Hub</Link>
        </div>
      </div>
    );
  }

  const isMakerLab = item.id === 'maker-lab';

  const getExpertKnowledge = () => {
    switch(item.id) {
      case 'noble-labs':
        return [
          { title: "High-Efficiency Extraction", desc: "Specializing in maintaining high concentrations of cannabinoids, terpenes, and flavonoids through precise molecular separation." },
          { title: "B2B Scale & Reach", desc: "Serving over 130 dispensaries statewide with premium cannabis and hemp products, setting the Mississippi standard." },
          { title: "Public COAs", desc: "Absolute transparency with dedicated testing sections and publicly accessible Certificates of Analysis for every batch." }
        ];
      case 'noble-dispensary':
        return [
          { title: "The Flagship Experience", desc: "Located in Tylertown, designed with visibility in mind—patients can see the lab operations directly from the dispensary floor." },
          { title: "Sir Anthony Noble", desc: "A testament to serendipitous beginnings, blending whimsy with industrial precision in our brand story." },
          { title: "Welcoming Atmosphere", desc: "Professional clinical care with a local soul, including our famous four-legged door greeter in Tylertown." }
        ];
      case 'hill-country':
        return [
          { title: "Oxford Curation", desc: `Located at ${hillCountryData?.address}. A retail experience focused on premium selection and boutique concentrates like Skunk Worx Live Resin.` },
          { title: "State Compliance", desc: `Fully licensed dispensary (${hillCountryData?.license}) ensuring the highest safety standards for the Oxford community.` },
          { title: "Delta Bud & JAMS", desc: "Exclusive retail home for Delta Bud daytime/anytime capsules and the highly-regarded JAMS gummy line." }
        ];
      case 'noble-seltzer':
        return [
          { title: "Award Winning Flavors", desc: "Watermelon (Gold Award) and Peach (Bronze Award) headline our lineup of Pineapple and Lime sparklers." },
          { title: "Nano-Emulsion Dynamics", desc: "Water-soluble particles ensure a controlled social onset within 15 minutes. All Buzz. No Bull." },
          { title: "Hemp Social Experience", desc: "Designed as a milder, sparkling alternative for patients seeking a precise and refreshing social mood elevation." }
        ];
      case 'maker-lab':
        return [
          { title: "Additive Engineering", desc: "Exploring industrial utility through FDM and Resin technologies for lab-specific hardware enclosures." },
          { title: "CAD Optimization", desc: "Designing custom tools for Noble Labs operations to bridge manufacturing and technical innovation." },
          { title: "Future Fabrications", desc: "Centralizing open-source repositories and CAD files for the broader engineering community. Coming Soon." }
        ];
      default:
        return [];
    }
  };

  const expertKnowledge = getExpertKnowledge();

  return (
    <div className="animate-in slide-in-from-bottom-4 fade-in duration-700 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Navigation Header */}
      <Link to="/" className="inline-flex items-center text-zinc-400 hover:text-zinc-900 mb-16 group transition-all">
        <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center mr-4 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
        <span className="font-bold text-[10px] uppercase tracking-[0.4em]">Master Hub Index</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
        {/* Content Column */}
        <div className="sticky top-32">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-[10px] font-bold tracking-[0.5em] text-green-800 uppercase block">
              {item.id === 'noble-seltzer' ? BRAND_SLOGAN : item.category}
            </span>
            <span className="h-px w-8 bg-zinc-200" />
            {isMakerLab && (
              <span className="text-[10px] font-bold tracking-[0.2em] bg-emerald-600 text-white px-3 py-1 rounded uppercase">
                Active Lab
              </span>
            )}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-black text-zinc-900 mb-10 leading-[0.9] tracking-tighter">
            {item.title.split(' ').map((word, i) => (
               <React.Fragment key={i}>
                  {i === 0 ? word : <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-900 to-emerald-700 block mt-2">{word}</span>}
                  {' '}
               </React.Fragment>
            ))}
          </h1>
          
          <p className="text-xl text-zinc-500 leading-relaxed mb-20 font-light max-w-xl">
            {item.description}
          </p>
          
          <div className="mb-24">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-12 flex items-center">
              Brand Standards & Engineering
              <div className="ml-8 h-px flex-grow bg-zinc-100" />
            </h3>
            
            <div className="space-y-16">
              {expertKnowledge.map((ek, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="bg-zinc-50 border border-zinc-100 p-5 rounded-[1.8rem] mr-8 shrink-0 group-hover:border-green-800 group-hover:bg-white transition-all duration-500 shadow-sm">
                    <div className="text-green-800 opacity-60 group-hover:opacity-100 transition-opacity">
                      {IconMap[item.iconType]("w-6 h-6")}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-black text-zinc-900 text-2xl tracking-tight mb-3 group-hover:text-green-900 transition-colors">{ek.title}</h4>
                    <p className="text-zinc-500 text-base leading-relaxed font-light">{ek.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            {item.externalUrl && !isMakerLab && (
              <a 
                href={item.externalUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-zinc-900 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all shadow-2xl hover:-translate-y-1 active:scale-95 group"
              >
                <span>Visit {item.title}</span>
                <svg className="w-5 h-5 ml-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {isMakerLab && (
              <div className="bg-white border border-zinc-200 p-12 rounded-[3.5rem] shadow-sm flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-transparent pointer-events-none" />
                <p className="text-[10px] font-bold text-emerald-600 mb-6 uppercase tracking-[0.5em] relative z-10">Repository Status: Pending</p>
                <h4 className="text-3xl font-display font-black mb-4 text-zinc-900 relative z-10">Blueprint Portal</h4>
                <p className="text-base text-zinc-500 mb-10 max-w-xs leading-relaxed font-light relative z-10">Centralizing CAD assets and technical documentation for global distribution.</p>
                <div className="flex space-x-4 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Visual Column */}
        <div className="relative pt-12 lg:pt-0">
          <div className="absolute -inset-10 bg-zinc-50 rounded-[5rem] -z-10 transform rotate-2 opacity-50" />
          <div className="rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] bg-white border-[1px] border-zinc-100 w-full h-[900px] flex items-center justify-center relative overflow-hidden">
             {/* Large Stylized Icon Backdrop */}
             <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none transform -rotate-12 scale-150">
                {IconMap[item.iconType]("w-full h-full")}
             </div>
             
             <div className="text-zinc-900 opacity-10 transform scale-[3] relative z-10">
                {IconMap[item.iconType]("w-32 h-32")}
             </div>

             {/* Dynamic Branding Accent */}
             <div className="absolute top-12 left-12">
                <span className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-300">SYSTEM.LOGIC</span>
             </div>
          </div>

          {/* Perspective Card */}
          <div className="absolute -bottom-12 -left-4 md:-left-16 bg-zinc-900 p-14 rounded-[4rem] shadow-3xl max-w-[420px] border border-white/5 animate-in slide-in-from-left-8 duration-1000">
             <div className="flex items-center space-x-4 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.5em]">Executive Strategy</p>
             </div>
             <p className="text-lg font-light text-white/90 leading-relaxed italic font-serif tracking-tight">
                {item.id === 'noble-labs' && "Efficiency without transparency is just industrial noise. We let patients see the pure science from the floor."}
                {item.id === 'noble-dispensary' && "Sir Anthony Noble embodies our whimsy. Serious science deserves a legendary face."}
                {item.id === 'hill-country' && "Oxford standards require boutique curation. We treat every patient with the prestige they deserve."}
                {item.id === 'noble-seltzer' && "Watermelon Gold and Peach Bronze aren't just awards; they are a standard for social mood."}
                {item.id === 'maker-lab' && "Engineering industrial solutions requires iterative additive layers. We build the future in layers."}
             </p>
          </div>
        </div>
      </div>

      {/* Blueprint Visuals Section */}
      <div className="mt-72">
        <div className="flex flex-col items-center mb-24 text-center">
          <h2 className="text-5xl font-display font-black mb-6 tracking-tighter">Technical Blueprints.</h2>
          <p className="text-zinc-500 max-w-xl font-light text-lg leading-relaxed">Visualizing the logic and industrial standards behind {item.title}. All Buzz. No Bull.</p>
          <div className="h-1.5 w-32 bg-green-900 rounded-full mt-10 shadow-lg shadow-green-900/20" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group p-16 rounded-[3.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.02)] bg-white border border-zinc-100 transition-all duration-700 hover:border-green-800 hover:shadow-2xl flex flex-col items-center text-center">
               <div className="mb-10 text-zinc-200 group-hover:text-green-800 transition-all duration-700">
                  {IconMap[item.iconType]("w-16 h-16")}
               </div>
               <h4 className="text-2xl font-display font-black mb-5 uppercase tracking-tighter text-zinc-900">Marker {i}.0</h4>
               <p className="text-base text-zinc-500 leading-relaxed font-light group-hover:text-zinc-600 transition-colors">Standardizing excellence through iterative process design, molecular transparency, and industrial-grade precision engineering.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniPage;
