import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_DATA, SOCIAL_LINKS, NAVIGATION_ITEMS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.hash === '#/' || location.hash === '';
  const [scrolled, setScrolled] = useState(false);
  const [showDustyInfo, setShowDustyInfo] = useState(false);

  // Hardened Meta Management for Crawlers
  useEffect(() => {
    // Canonical Management
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    const baseDomain = 'https://noblelabsms.com';
    const route =
      location.hash && location.hash !== '#/'
        ? location.hash.replace('#', '')
        : '';
    canonical.setAttribute('href', `${baseDomain}${route}`);

    // Dynamic Titles & Descriptions
    let title = 'Cam Noble | Digital Ecosystem & Command Center';
    let description =
      "Explore Cam Noble's industrial cannabis ventures, retail dispensaries in Tylertown and Oxford, and technical innovation lab.";

    const currentNav = NAVIGATION_ITEMS.find(
      item => `#${item.path}` === location.hash
    );
    if (currentNav) {
      title = `${currentNav.title} | Cam Noble Ecosystem`;
      description = currentNav.description;
    } else if (location.hash === '#/wholesale') {
      title = 'Wholesale Command Center | Noble B2B Gateway';
      description =
        "Strategic partnerships and industrial processing services for Mississippi's medical cannabis industry.";
    } else if (location.hash === '#/contact-hq') {
      title = 'Contact HQ | Cam Noble Command Center';
      description =
        'Secure contact portal for Cam Noble, Noble Labs, and Hill Country Cannabis.';
    } else if (location.hash === '#/ecosystem-map') {
      title = 'Tactical Ecosystem Map | Cam Noble Ventures';
      description =
        'Interactive tactical view of Noble Labs, Noble Seltzer, and The Maker Space.';
    }

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `${baseDomain}${route}`);
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
            <Link
              to="/"
              className="flex flex-col items-start group"
              aria-label="Cam Noble Digital Hub Home"
            >
              <span className="text-xl font-display font-extrabold tracking-tighter text-zinc-900 group-hover:text-green-900 transition-colors">
                CAM NOBLE
              </span>
              <span
                className={`text-[8px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${
                  scrolled || !isHome ? 'text-green-800' : 'text-zinc-500'
                }`}
              >
                Digital Hub
              </span>
            </Link>

            <div className="hidden lg:flex space-x-8 items-center" role="menubar">
              {NAVIGATION_ITEMS.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  role="menuitem"
                  className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-green-800 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
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

      {/* Main content */}
      <main className="flex-grow" role="main" id="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-16 px-4" role="contentinfo">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Footer sections as in your layout */}
          {/* ... identical to your current Layout footer ... */}
        </div>

        {/* Dusty Info Modal */}
        <AnimatePresence>
          {showDustyInfo && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true">
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
                {/* Modal content same as original */}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </footer>
    </div>
  );
};

export default Layout;
