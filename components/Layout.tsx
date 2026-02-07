
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_DATA, SOCIAL_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md border-b border-zinc-200 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex flex-col items-start">
              <span className={`text-2xl font-display font-extrabold tracking-tight ${isHome ? 'text-zinc-900' : 'text-zinc-900'}`}>
                CAM NOBLE
              </span>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isHome ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Digital Ecosystem
              </span>
            </Link>
            
            <div className="hidden lg:flex space-x-6">
              <Link to="/noble-labs" className="text-xs font-bold uppercase tracking-widest hover:text-green-700 transition-colors">Processing</Link>
              <Link to="/noble-dispensary" className="text-xs font-bold uppercase tracking-widest hover:text-green-700 transition-colors">Tylertown</Link>
              <Link to="/hill-country" className="text-xs font-bold uppercase tracking-widest hover:text-green-700 transition-colors">Oxford</Link>
              <Link to="/noble-seltzer" className="text-xs font-bold uppercase tracking-widest hover:text-green-700 transition-colors">Seltzer</Link>
              <Link to="/maker-lab" className="text-xs font-bold uppercase tracking-widest hover:text-green-700 transition-colors">Innovation</Link>
            </div>

            <Link 
              to="/#contact-hub" 
              className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-zinc-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-lg">Cam Noble</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Pioneering excellence in Mississippi's cannabis industry through Noble Labs and fostering technical innovation in personal creative labs.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={SOCIAL_LINKS.brandInstagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.seltzerInstagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <span className="text-xs font-bold border border-zinc-700 rounded px-2 py-1">SELTZER</span>
              </a>
            </div>
          </div>

          <div className="space-y-4" id="footer-contact">
            <h3 className="text-white font-display font-bold text-lg">Contact Support</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center space-x-2">
                <span className="text-zinc-500">General:</span>
                <a href={`mailto:${CONTACT_DATA.email.general}`} className="text-zinc-300 hover:text-white">{CONTACT_DATA.email.general}</a>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-zinc-500">Retail:</span>
                <a href={`mailto:${CONTACT_DATA.email.dispensary}`} className="text-zinc-300 hover:text-white">{CONTACT_DATA.email.dispensary}</a>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-zinc-500">Lab HQ:</span>
                <a href={`tel:${CONTACT_DATA.phone.lab}`} className="text-zinc-300 hover:text-white">{CONTACT_DATA.phone.lab}</a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-bold uppercase tracking-widest">
              <Link to="/noble-labs" className="hover:text-white">Noble Labs</Link>
              <Link to="/noble-dispensary" className="hover:text-white">Tylertown</Link>
              <Link to="/hill-country" className="hover:text-white">Oxford</Link>
              <Link to="/noble-seltzer" className="hover:text-white">Noble Seltzer</Link>
              <Link to="/maker-lab" className="hover:text-white">Maker Lab</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-800 text-[10px] tracking-widest uppercase text-zinc-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} Cam Noble Digital Ecosystem. Built for Excellence.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
