import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_DATA, SOCIAL_LINKS, NAVIGATION_ITEMS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [showDustyInfo, setShowDustyInfo] = useState(false);

  // Hardened Meta Management for Crawlers
  useEffect(() => {
    // 1. Canonical Management (Supports GitHub Pages & Custom Domains)
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    
    // Default to the main brand domain for SEO weight
    const baseDomain = "https://noblelabsms.com";
    const cleanPath = location.pathname === '/' ? '' : location.pathname;
    canonical.setAttribute('href', `${baseDomain}${cleanPath}`);

    // 2. Dynamic Titles & Descriptions
    let title = "Cam Noble | Digital Ecosystem & Command Center";
    let description = "Explore Cam Noble's industrial cannabis ventures, retail dispensaries in Tylertown and Oxford, and technical innovation lab.";

    const currentNav = NAVIGATION_ITEMS.find(item => item.path === location.pathname);
    if (currentNav) {
      title = `${currentNav.title} | Cam Noble Ecosystem`;
      description = currentNav.description;
    } else if (location.pathname === '/wholesale') {
      title = "Wholesale Command Center | Noble B2B Gateway";
      description = "Strategic partnerships and industrial processing services for Mississippi's medical cannabis industry.";
    } else if (location.pathname === '/contact-hq') {
      title = "Contact HQ | Cam Noble Command Center";
      description = "Secure contact portal for Cam Noble, Noble Labs, and Hill Country Cannabis.";
    } else if (location.pathname === '/ecosystem-map') {
      title = "Tactical Ecosystem Map | Cam Noble Ventures";
      description = "Interactive tactical view of Noble Labs, Noble Seltzer, and The Maker Space.";
    }

    // Direct DOM manipulation for maximum crawler visibility
    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `${baseDomain}${cleanPath}`);

  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
    scrolled || !isHome 
      ? 'bg-white/60 backdrop-blur-2xl border-b border-zinc-200/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
      : 'bg-transparent py-6'
  }`;

  return (
    <div className="min-h-screen flex flex-col selection:bg-green-100 selection:text-green-900">
      {/* Navigation */}
      <nav className={navClasses} role="navigation" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <Link to="/" className="flex flex-col items-start group" aria-label="Cam Noble Digital Hub Home">
              <span className="text-xl font-display font-extrabold tracking-tighter text-zinc-900 group-hover:text-green-900 transition-colors">
                CAM NOBLE
              </span>
              <span className={`text-[8px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${scrolled || !isHome ? 'text-green-800' : 'text-zinc-500'}`}>
                Digital Hub
              </span>
            </Link>
            
            <div className="hidden lg:flex space-x-8 items-center" role="menubar">
              <Link to="/" role="menuitem" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-green-800 transition-colors">Home</Link>
              <Link to="/wholesale" role="menuitem" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-green-800 transition-colors">Wholesale</Link>
              <Link to="/noble-labs" role="menuitem" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-green-800 transition-colors">Processing</Link>
              <Link to="/noble-dispensary" role="menuitem" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-green-800 transition-colors">Tylertown</Link>
              <Link to="/hill-country" role="menuitem" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-green-800 transition-colors">Oxford</Link>
              <Link to="/noble-seltzer" role="menuitem" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-green-800 transition-colors">Seltzer</Link>
            </div>

            <div className="flex items-center">
              <Link 
                to="/contact-hq"
                aria-label="Access Command Center Contact Portal"
                className={`px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg ${
                  scrolled || !isHome 
                    ? 'bg-zinc-900 text-white hover:bg-green-900 shadow-zinc-300/20' 
                    : 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-zinc-200/20'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow" role="main" id="main-content">
        {children}
      </main>

      <footer className="bg-zinc-900 text-zinc-400 py-16 px-4" role="contentinfo">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-lg">Cam Noble</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Pioneering excellence in Mississippi's cannabis industry through Noble Labs and fostering technical innovation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-lg">Ecosystem Navigation</h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[10px] font-bold uppercase tracking-widest">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/wholesale" className="hover:text-white transition-colors">Wholesale</Link>
              <Link to="/noble-labs" className="hover:text-white transition-colors">Noble Labs</Link>
              <Link to="/noble-dispensary" className="hover:text-white transition-colors">Tylertown</Link>
              <Link to="/hill-country" className="hover:text-white transition-colors">Oxford</Link>
              <Link to="/noble-seltzer" className="hover:text-white transition-colors">Noble Seltzer</Link>
            </div>
          </div>

          <div className="space-y-4">
             <h3 className="text-white font-display font-bold text-lg">B2B Service Gateway</h3>
             <p className="text-xs italic mb-4">Industrial extraction and social beverage distribution.</p>
             <Link to="/wholesale" className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-green-500 transition-colors inline-block" aria-label="Access Industrial Wholesale Portal">
                Wholesale Portal
             </Link>
          </div>
        </div>

        {/* The Staple Section: Dusty McLean Branding */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-800 flex flex-col items-center space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500">
              MADE WITH LOVE, BY DUSTY MCLEAN, THE NORTH MISSISSIPPI NOTARY
            </span>
            <button 
              onClick={() => setShowDustyInfo(true)}
              className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-green-500 hover:bg-green-900 hover:text-white transition-all shadow-lg border border-white/5 active:scale-90"
              aria-label="View developer information for Dusty McLean"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <div className="text-[9px] tracking-widest uppercase text-zinc-700 text-center md:text-left">
            &copy; {new Date().getFullYear()} Cam Noble. Industrial Transparency. All Buzz. No Bull.
          </div>
        </div>
      </footer>

      {/* Dusty McLean Info Modal */}
      <AnimatePresence>
        {showDustyInfo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDustyInfo(false)}
              className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-zinc-900 border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl overflow-hidden group"
            >
              {/* Background Accent */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-900/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10">
                <header className="mb-10">
                  <h2 id="modal-title" className="text-3xl md:text-4xl font-display font-black text-white tracking-tighter mb-2 italic">
                    Like what you see here?
                  </h2>
                  <div className="h-1 w-12 bg-green-500 rounded-full" />
                </header>
                
                <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg">
                  <p>
                    Hi, my name is <span className="text-white font-bold">Dusty McLean</span>. I make NFC enabled ID card and websites. I try to make it easy to get in contact with me.
                  </p>
                  <p>
                    If you like what you see here on Cam's website, don't hesitate in reaching out to me. I would love to hear your ideas, and I'd love to build something special for you.
                  </p>
                </div>

                <div className="mt-12 flex flex-col space-y-4">
                  <a 
                    href="mailto:notary@northmsnotary.com" 
                    className="flex items-center justify-center bg-green-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-green-500 transition-all shadow-xl shadow-green-900/20 group"
                  >
                    <span>Email Me</span>
                    <svg className="w-4 h-4 ml-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://northmsnotary.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white text-zinc-950 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all"
                  >
                    Visit northmsnotary.com
                  </a>

                  <button 
                    onClick={() => setShowDustyInfo(false)}
                    className="text-zinc-600 hover:text-white py-4 text-[9px] font-bold uppercase tracking-[0.4em] transition-colors"
                  >
                    [ Exit Command ]
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;